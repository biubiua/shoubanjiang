<template>
	<div id="reg">
	<div class="register">
		<p class = "from-mz">注册帐号</p>
		<form>
			<input type = "text" placeholder = "手机号" class = "phone" v-model="phone"/>
			<input type="text" placeholder="昵称" class="user"/>
			<input type = "password" placeholder = "密码"  class = "password" v-model="password"/>
			<button class = "from-zc" @click="reg">注册</button>
		</form>
		<a href="/#/login" class="back">返回登录</a>
	</div>
	</div>
</template>

<script>
export default {

  name: 'register',

  data () {
    return {
    	phone:"",
    	password:""

    };
  },
   methods:{
	reg(){
		axios.post("/api/register","phone="+this.phone+"&password="+this.password)
		.then(res=>{
			//console.log(res.data);
			//if(this.phone==(/^1\d{10}$/)&&this.password==(/^[a-zA-Z0-9]{6,10}$/)){
				alert("注册成功！");
				this.$router.push('/home');
			
		})
		.catch(error=>{
			console.log(error);
			alert("注册失败！");
		})
		}
	}

};
</script>

<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
	@return $px/$base *1rem;
}
#reg{
	height:580px;
	width:100%;
	background-color: #f0f0f0;
	background-image:url("../assets/123.png");
	background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
}
.register{
	width:80%;
	height:100%;
	margin:0 auto;
	padding-top:px2rem(15px);
	overflow:hidden;
	font-size:px2rem(10px);
	position:relative;
	
	.from-mz{
		font-size: px2rem(20px);

	}
	.phone,.user,.password{
		width: 100%;
    	margin: px2rem(20px) 0;
    	height: px2rem(41px);
    	line-height: px2rem(30px);
    	padding:px2rem(5px) px2rem(10px);
    	box-sizing: border-box;
    	font-size: px2rem(14px);
    	background-color: #fff;
    	border-radius: px2rem(4px);
    	border: 1px solid #e0e0e0;
	}
	.from-zc{
		width: 100%;
		height: px2rem(40px);
		line-height: px2rem(36px);
		font-size: px2rem(16px);
		margin: px2rem(20px) 0;
		border-radius:px2rem(4px);
		background:#c14a3f;
		color: #fff;
		border-style:none;
	}
	.back{
		float:right;
		color:black;
		margin:px2rem(35px) 0;
		font-size:px2rem(18px);
	}
}
</style>