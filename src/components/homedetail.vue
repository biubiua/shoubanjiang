<template>
	<div id="homedetail">
	<nav>
		<span>情报详情</span>
		<i class="iconfont icon-fanhui" @click="backClick"></i>
	</nav>
		<div class="header" v-if="">
		<img :src="homeinfo.article.author.avatar"/>
			<span>{{homeinfo.article.author.name}}</span>
		</div>
		<p>{{homeinfo.article.title}}</p>
	</div>
</template>

<script>
import router from "../router"
import axios from "axios";
export default {

  name: 'homedetail',

  data () {
    return {
    	homeinfo:[]
    }
  },
  methods:{
  	backClick(){
  		 router.push('/home');
  	}
  },
    mounted(){
  		axios.get("/api/homedetail?gid="+this.$route.params.gid).then(res=>{
  			this.homeinfo = res.data;
  			
  		//console.log(res.data);
      //dispatch分发消息给mutations    
  	})
  }
};
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
  @return $px/$base *1rem;
}
nav{
		position: fixed;
		width:100%;
		top:0;
		text-align: center;
	    color:white;
	    line-height: px2rem(44px);
	    height: px2rem(44px);
	    background-color: #f66875;    
	    z-index:20;
	    text-align: center;
	    padding:px2rem(3px) 0;
	
	    i{
	    	display: block;
	    	float:left;
	    	height: px2rem(44px);
	    	width:px2rem(50px);
	    	font-size: px2rem(24px);
	    }
	}
#homedetail{
	margin-top:px2rem(45px);
	.header{
		padding-top: px2rem(22px);
   		 margin-bottom: px2rem(23px);
		img{
			float: left;
		    display: block;
		    box-sizing: border-box;
		    border: 1px solid #dadada;
		    border-radius: 50%;
		    width: px2rem(40px);
		    height: px2rem(40px);
		}
		p{
			margin:px2rem(5px);
		}
	}
}
</style>