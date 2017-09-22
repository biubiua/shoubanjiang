<template>
	<div>
	      	<router-view></router-view>

		 <navbar></navbar>
		<swipe class="my-swipe">
	  		<swipe-item v-for="data in looplist" key="data.id">
	  			 <img :src="data.imgurl" 	@click="detailClick(data.object_id)"/>
	  			 <p>{{data.title}}</p>
	  			 <span>{{data.article.rawtype}}</span>
	  		</swipe-item>
		</swipe>
		<ul class="navgation">
			<li class="shou">手办</li>
			<li class="message">情报</li>
			<li class="news">宅闻</li>
			<li class="ping">评测</li>
			<li class="talk">访谈</li>
			<li class="study">学姿势</li>
		</ul>
		<ul class="main">
      		<li v-for="data in mainlist" 
      			v-infinite-scroll="loadMore"
		      	infinite-scroll-disabled="loading"
		     	infinite-scroll-distance="0"
		      	infinite-scroll-immediate-check="false"
		      	@click="detailClick(data.mixable_id)"
		    >
        		<img :src="data.picture"/>
        		<p class="title">{{data.title}}</p>
        		<p class="time">
        			<span class="type" :style="{background:data.tag.color}">{{data.tag.name}}</span>
        			<span class="today" :style="{background:data.tag.color}">{{data.showTime}}</span>
        		</p>
      		</li>
      	</ul>
	</div>

</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import { InfiniteScroll } from 'mint-ui';
import Vue from "vue";
import router from "../router"
import axios from "axios";
import navbar from "@/components/navbar";

Vue.use(InfiniteScroll);
export default {

  name: 'home',

  data () {
    return {
    	looplist:[],
    	mainlist:[],
    	current:2,
    	loading:false
    };
  },
  mounted(){
  	axios.get("/api/home").then(res=>{
  	//console.log(res)	
  		this.looplist=res.data.banners;
  		this.mainlist = res.data.mixtures.data;

  		// console.log(res.data.mixtures)	
  	})
  	
  },
  methods:{
  	detailClick(id){
  		router.push(`/home/homedetail/${id}`);
  	},
  	loadMore(){
  		this.loading = true;
       this.current++;
  		axios.get(`api/homemore?page=${this.current}`).then(res=>{
  			this.mainlist = [...this.mainlist,...res.data.mixtures.data]
  			this.loading = false;
  		})
  	}
  },
  components:{
  	navbar,
   	 'swipe': Swipe,
   	 'swipe-item': SwipeItem
 	} 
};
</script>

<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
	@return $px/$base *1rem;
}
.my-swipe {
	top:px2rem(50px);
    width: 100%;
    position:relative;
    height:px2rem(210px);
 img{
 	width:100%;
 }
 p{
 	position: absolute;
 	bottom:0;
 	left: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: px2rem(15px);
    color: #fff;
    padding: px2rem(8px) px2rem(18px) px2rem(30px);
    background-color: rgba(0,0,0,.6);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
 }
 span{
 	position:absolute;
 	right:0;
 	top:px2rem(10px);
    // top: 6px;
    font-size: px2rem(12px);
    text-align: center;
    color: hsla(0,0%,100%,.9);
    width: px2rem(54px);
    height: px2rem(24px);
    border-radius: px2rem(12px) 0 0 px2rem(12px);
    line-height: px2rem(24px);
    background-color: rgba(0,0,0,.6);
 }
}
.navgation{
	padding: px2rem(60px) 0 px2rem(16px);
    width: 100%;
    background-color: #fff;
    overflow:hidden;
	li{
		float:left;
		list-style: none;
		width: 16.66%;
	    height: px2rem(50px);
	    background-size: auto 65%;
	    box-sizing: border-box;
	    padding-top: px2rem(35px);
	    font-size: px2rem(12px);
	    text-align: center;
	    background-position: top;
   		background-repeat: no-repeat;
		background-size: auto 65%;
		}    
	.shou{
		background-image:url("../assets/6.png");
	}
	.message{
		background-image:url("../assets/1.png");
	}
	.news{
		background-image:url("../assets/2.png");
	}
	.ping{
		background-image:url("../assets/3.png");
	}
	.talk{
		background-image:url("../assets/4.png");
	}
	.study{
		background-image:url("../assets/5.png");
	}
}
.main{

	li{
		width: 100%;
    	height: px2rem(210px);
		border-radius:px2rem(10px);
		position: relative;
	    margin-top: px2rem(6px);
	    width: 100%;
		overflow: hidden;
		background:#ccc;
		img{
			width:100%;
		}
		.title{
			position: absolute;
		    z-index: 4;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    margin: 0;
		    padding: px2rem(60px) px2rem(15px) px2rem(10px);
		    color: #fff;
		    font-size: px2rem(15px);
		    text-shadow: 0 1px 0 rgba(0,0,0,.5);
		    background-image: linear-gradient(0deg,rgba(34,34,34,.7) 0,rgba(34,34,34,0));
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    word-wrap: normal;
		    border-radius: 0 0 px2rem(10px) px2rem(10px);
		}
		.time{
			position: absolute;
		    z-index: 10;
		    top: px2rem(12px);
		    left: px2rem(12px);
		    width: px2rem(48px);
		    height: px2rem(48px);
		    font-size: px2rem(12px);
		    border: 2px solid #fff;
		    box-sizing: border-box;
		    color: #fff;
		    text-align: center;
		    border-radius: px2rem(8px);
			span{
				display: block;
			    height: px2rem(22px);
			    line-height: px2rem(22px);
			    border-bottom: 1px solid #fff;
			    box-sizing: border-box;
			}
		}
	}
}
</style>