<template>
<div v-if="goodinfo" id="detail">
	<!-- {{this.$route.params.gid}} -->
	<div class="picture">
		<img :src="goodinfo.picture"/>
	</div>
	<div class="content">
		<p class="name">{{goodinfo.name}}</p>
		<p class="cn_name">名称机翻:{{goodinfo.cn_name}}</p>
		<p class="price">
			<span class="sale_price">￥{{goodinfo.sale_price}}</span>
			<span class="japan">(日元：{{goodinfo.price}})</span>
		</p>
		<h4>商品说明</h4>
		<p class="desc">{{goodinfo.detail.description}}</p>
	</div>
	<img :src="goodinfo.server.desc" class="server"/>
</div>
</template>

<script>
export default {

  name: 'gooddetail',

  data () {
    return {
    	goodinfo:null
    };
  },
  // 
  mounted(){
  		axios.get("/api/gooddetail?gid="+this.$route.params.gid).then(res=>{
  			this.goodinfo = res.data;
  		//console.log(res.data);
      //dispatch分发消息给mutations
     
  	})
  }
};
</script>

<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
	@return $px/$base *1rem;
}
#detail{
	width:100%;
	.content{
		z-index:10;
		background-color: white;
		padding: px2rem(14px) px2rem(18px);
	    color: #333;
	    font-size: px2rem(15px);
	    letter-spacing: -.4px;
	    line-height: px2rem(24px);
	    .price{
	    	margin-bottom: px2rem(10px);
	    }
	    .sale_price{
	    	font-size: px2rem(20px);
    		color: #fb3446;
	    }
	    .japan{
	    	margin-left: px2rem(10px);
		    font-size: px2rem(12px);
		    color: #999;
	    }
	    h4{
	    	color: #999;
	    	font-weight:400;
	    	padding-top:px2rem(15px);
	    	border-top:1px solid #ccc;
	    	margin-bottom:px2rem(10px);
	    }
	}
	.picture{
		width:320px;
		height:px2rem(320px);
		// overflow:hidden
		img{
			width:100%;
			height:100%;
		}
	}
	.server{
		margin: px2rem(20px) 5%;
    	width: 90%;
	}
}
</style>