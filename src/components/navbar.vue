<template>
	<nav>
		<span>出荷情报</span>
		<i class="iconfont icon-sousuo" @click="searchClick"></i>
	</nav>
</template>

<script>
import router from "../router"
export default {

  name: 'nav',

  data () {
    return {

    };
  },methods:{
  	searchClick(){
  		 router.push('/search');
  	}
  }
};
</script>

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
	    padding:3px 0;
	    span{
	    	margin-left:px2rem(50px);
	    }
	    i{
	    	display: block;
	    	float:right;
	    	height: px2rem(44px);
	    	width:px2rem(50px);
	    	font-size: px2rem(24px);
	    }
	}
</style>