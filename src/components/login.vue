<template>
	 <div id = "login">
		<div class = "container-login">
			<p class = "from-mz">欢迎登录手办酱</p>
			<form>
			<input type = "text" placeholder = "手机号" class = "phone" v-model="phone"/>
			<input type = "password" placeholder = "密码" class = "password" v-model="password"/>
			</form>
			<div class = "contor">
			<input type="checkbox" class = "from-checkbox"/>
			<span class = "from-jzw">记住我</span>
			<span class = "from-wjmm">忘记密码?</span>
			</div>
			<button class = "from-dl" @click="loginClick" >登录</button>
			<button class = "from-zc" @click="registerClick">注册</button>
			</div>
		</div>
</template>

<script>
import router from "../router"
export default {

  name: 'login',

  data () {
    return {
    	password:'',
    	phone:''
    };
  },
  methods:{
  	registerClick(){
  		router.push("/register")
  	},
  	loginClick(){
			
			axios.post("/api/login","phone="+this.phone+"&password="+this.password)
		.then(res=>{
			console.log(res.data)
			if(res.data){
				alert("登录成功！");
				this.$router.push('/');
			}else{                                                                                                                                                                                                                                                                                      
				alert("手机号或密码错误")
			}
		})
	}
  }
}
//this.phone!=(/^1\d{10}$/)&&this.password!=(/^[a-zA-Z0-9]{6,10}$/)
</script>
<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
	@return $px/$base *1rem;
}

#login{

	height:100%;
	background-color: #f0f0f0;
	background-image:url("../assets/123.png");
	background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
    overflow:hidden;
.container-login{
	width:80%;
	height:550px;
	margin:px2rem(15px) auto;
	overflow:hidden;
	font-size:px2rem(10px);

	.from-mz{
		font-size: px2rem(16px);
	}
	.phone{
		width: 100%;
		height: px2rem(42px);
		font-size: px2rem(14px);
		margin-top: px2rem(15px);
		border-radius:px2rem(4px);
		border-style:none;
		padding: px2rem(5px) px2rem(10px);
		border:1px solid #e0e0e0;


	}
	.password{
		width: 100%;
		height: px2rem(42px);
		font-size: px2rem(14px);
		margin-top: px2rem(15px);
		border-radius:px2rem(4px);
		border-style:none;
		border:1px solid #e0e0e0;
		padding-left:px2rem(15px)
	}
	.input-error{
		font-size: px2rem(16px);
		margin-top: px2rem(5px);
		color:red;
	}
	.contor{
		margin-top: px2rem(30px);
			.from-checkbox{
				width: px2rem(14px);
				height: px2rem(14px);
				margin-top: px2rem(30px);
				float: left;
				margin-top: px2rem(5px)

			}
			.from-jzw{
				float: left;
				margin-left: px2rem(10px);
				font-size: px2rem(14px);
			}
			.from-wjmm{
				float: right;
				color: #c75e54;
				font-size: px2rem(14px);
			}
	}
	.from-dl{
		width: 100%;
		height: px2rem(40px);
		font-size: px2rem(16px);
		margin-top: px2rem(15px);
		border-radius:px2rem(4px);
		background:#c14a3f;
		color: #fff;
		border-style:none;

	}
	.from-zc{
		width: 100%;
		height: px2rem(40px);
		font-size: px2rem(16px);
		margin-top: px2rem(15px);
		border-radius:px2rem(4px);
		background:#fff;
		border-style:none;
		border:1px solid #e5e5e5;
	}
}
}

</style>