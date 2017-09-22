<template>
	<div class="me">
	<nav>
		<p class="ling"><i class="iconfont icon-lingsheng"></i></p>
		<span>我的</span>
		<p class="shezhi"><i class="iconfont icon-shezhi"></i></p>
	</nav>
		<div class="logres gray">
			<span class="register"  @click="registerClick">注册</span>			
			<i>/</i>
			<span class="login" @click="loginClick">登录</span>
		</div>
		<div class="tu gray">
			<i class="iconfont icon-ccgl-yundanchukusaomiao-4"></i>		
			我的黏土
			<i class="icon "></i>
		</div>
		<div class="gray">
			<div class="collect">
				<i class="icon-shoucang2 iconfont"></i>
				我的收藏
				<i class="icon "></i>
			</div>
			<div class="claim">
				<i class="iconfont icon-shoucang-copy"></i>
				我的认领
				<i class="icon "></i>
			</div>
		</div>
		<div class="gray">
			<div class="used">
				<i class="icon-bao iconfont"></i>
				我的二手
				<i class="icon "></i>
			</div>
			<div class="order">
				<i class="icon-dingdan iconfont"></i>
				我的订单
				<i class="icon "></i>
			</div>
			<div class="car">
				<i class="iconfont icon-gouwuche"></i>
				购物车
				<i class="icon "></i>
			</div>
			<div class="address">
				<i class="iconfont icon-shouhuodizhi"></i>
				收货地址
				<i class="icon "></i>
			</div>
		</div>
		<div class="gray">
			<div class="activity">
				<i class="icon-xiaolaba iconfont"></i>
				手办活动
				<i class="icon "></i>
			</div>
			<div class="chat">
				<i class="icon-liaotianshi iconfont"></i>
				神秘聊天室
				<i class="icon "></i>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import router from "../router"
export default {

  name: 'my',

  data () {
    return {

    };
  },
  methods:{
  	loginClick(){
  		router.push("/login");
  	},
  	registerClick(){
  		router.push("/register")
  	}
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
	    font-size:16px;
	    padding:3px 0 ;
	    p{
	    	display: inline-block;    	
	    	height: px2rem(44px);
	    	width:px2rem(50px);
	    	
	    	i{
	    		font-size: px2rem(28px);
	    	}
	    }
	    .shezhi{
	    	margin-right:10px;
	    	float:right;
	    }
	    .ling{
	    	float:left;
	    }
	}
.me{
	background:#f0f0f0;
	margin-bottom: px2rem(50px);
	font-size:px2rem(14px);
	.logres{
		height: px2rem(102px);
    	line-height: px2rem(102px);  
    	padding-top:px2rem(40px);
    	color:#f66875;	
	}
	.register{
		margin-left:px2rem(125px);
	}
	.gray{
		margin-bottom:px2rem(20px);
	}
	.tu{
		height:px2rem(48px);
		line-height:px2rem(48px);
		position:relative;
	}
	.logres,.tu{
		background:white;
	}
	.gray div{
		height:px2rem(48px);
		line-height:px2rem(48px);
		background:white;
		border-top:1px solid #f0f0f0;
		position:relative;
	}
	.iconfont{
		display: inline-block;
		width:px2rem(20px);
		height:px2rem(20px);
		margin-left:px2rem(15px);
		margin-right:px2rem(5px);
	}
	.icon{
		position:absolute;
		border: 2px solid #c8c8cd;
	    border-bottom-width: 0;
	    border-left-width: 0;
	    content: " ";
	    top: 50%;
	    right: px2rem(20px);
	    position: absolute;
	    width: px2rem(5px);
	    height: px2rem(5px);
	    transform: translateY(-50%) rotate(45deg);
	}
}
</style>