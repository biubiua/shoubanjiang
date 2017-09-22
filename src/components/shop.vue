<template>
	<div id="car">
		<div class="search">
			<form>
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="点选关键字或直接搜索"/>
			</form>
			<i class="iconfont icon-gouwuche"></i>
		</div>
		<div class="goodall"  v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false">
		<div class="goodlist" v-for="(data,index) in datalist" @click="goodClick(data.id)">
			<img :src="data.thumb"/>
			<div class="white">
			<p class="name">{{data.name}}</p>
			<p class="price">
				￥<span>{{data.sale_price}}</span>
			</p>
			<p class="japan">日元：{{data.price}}</p>
		</div>
		</div>
	</div>
	</div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import Vue from "vue";
import router from "../router"
import axios from "axios";

Vue.use(InfiniteScroll);

export default {

  name: 'shop',

  data () {
    return {
    	datalist:[],
    	current:1,
    	loading:false
    };
  },
   mounted(){
  	axios.get("/api/shop").then(res=>{
  		this.datalist=res.data.data;
  		//console.log(res.data)	
  	}) 	
  },
  methods:{
  	goodClick(id){
  	 	 router.push(`/gooddetail/${id}`);
  	},
  	loadMore(){
  		this.loading = true;
  		this.current++;
  		axios.get(`/api/good?page=${this.current}`).then(res=>{
  			this.datalist = [...this.datalist,...res.data.data]
  			//console.log(res.data);
  			this.loading= false;
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
#car{
	margin-top:px2rem(33px);
	overflow:hidden;
	.search{
		height:px2rem(48px);
		background:#f66875;
		width:100%;
		position:fixed;
		top:0;
		form{
			margin-top:px2rem(7px);
			display: inline-block;
			background-color: #f0f0f0;
	    	border-radius: px2rem(4px);
	    	position: relative;
		    height: 100%;
		    height:px2rem(32px);
		    width:80%;
		    margin-left:px2rem(15px);
		    .icon-sousuo{
		    	margin-left:px2rem(10px);
		    }
		  
	    	input{
	    		box-sizing: border-box;
			    padding-left: px2rem(12px);
			    height:px2rem(32px);
			    background-color: #f0f0f0;
			    font-size: px2rem(14px);
			    border:none;
			    
	    	}
	    }
	    	  .icon-gouwuche{
		    	display:block;
		    	width:px2rem(44px);
		    	height:px2rem(44px);
		    	font-size: px2rem(25px);
		    	position:absolute;
		    	position:absolute;
		    	right:0;
		    	top:px2rem(8px);
		    }	
	}
	

	.white{
		background:white;
	}
	.goodlist{
		width:48%;
		float:left;
		padding:0 px2rem(3px);
		padding-top:px2rem(5px);
		background: #f0f0f0;
		margin-top:20px;
		img{
			width: 100%;
    		height: 100%;
    		border-radius: 8px 8px 0 0;
		}
		.name{
			overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    font-size: px2rem(12px);
		    line-height: px2rem(18px);
		    letter-spacing: -.3px;
		    color: #333;
		    padding: 0 px2rem(8px);
		    padding-top:px2rem(10px);
		    min-height: px2rem(34px);
		}
		.price{
			margin-top: px2rem(8px);
		    padding: 0 px2rem(8px);
		    font-size: px2rem(18px);
		    line-height: px2rem(18px);
		    letter-spacing: -.4px;
		    color: #fb3446;
		    span{
		    	margin-left: px2rem(5px);
		    }
		}
		    .japan{
		    	margin-top: px2rem(5px);
			    padding: 0 px2rem(8px);
			    font-size: px2rem(12px);
			    line-height: px2rem(18px);
			    letter-spacing: -.3px;
			    color: #999;
		    }
	}
}
</style>