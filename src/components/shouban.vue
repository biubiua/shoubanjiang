<template>
	<div>	
	<nav>
		<span>手办库</span>
		<i class="iconfont icon-sousuo"></i>
	</nav>
		<ul class="text a">
			<li class="li1">原作</li>
			<li class="li2">查看更多</li>
		</ul>
		<div class="yuanzuo">	
			<ul class="yuan">
				<li v-for="data in yuanlist">
					<img :src="data.thumb"/>
					<p>{{data.name}}</p>
				</li>
			</ul>
		</div>
		<ul class="text">
			<li class="li1">厂商</li>
			<li class="li2">查看更多</li>
		</ul>
		<div class="changshang">
			<ul class="chang">
				<li v-for="data in changlist">
					<img :src="data.thumb"/>
				</li>
			</ul>
		</div>
		<ul class="text">
			<li class="li1">系列</li>
			<li class="li2">查看更多</li>
		</ul>
		<div class="xilie">
			<ul class="xilie">
				<li v-for="data in xilielist">
					<img :src="data.thumb"/>
				</li>
			</ul>
		</div>
		<ul class="text a">
			<li class="li1">属性</li>
		</ul>
		<div class="shu">	
			<ul class="shuxing">
				<li v-for="data in shulist">
					<img :src="data.thumb"/>
					<p>{{data.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'shouban',

  data () {
    return {
    	yuanlist:[],
    	changlist:[],
    	xilielist:[],
    	shulist:[]
    };
  },
  mounted(){
  	axios.get("/api/store").then(res=>{	
  		this.yuanlist=res.data.origins;
  		this.changlist = res.data.producers;
  		this.xilielist = res.data.figure_serieses;
  		this.shulist = res.data.figure_keywords;
  		//console.log(res.data.producers)	
  	})
  	
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
	    padding:px2rem(3px) 0;
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
.text{
	margin:px2rem(30px) px2rem(10px) 0 px2rem(20px);
	font-size: px2rem(17px);
    color: #333;
    li{
    	list-style: none
    }
    
    .li1{
    	float:left;
    }
    .li2{
    	float:right;
    	font-size: px2rem(12px);
    	color: #9a9a9a;
    	margin-top:px2rem(6px);
    }
}
.a{
	margin-top:px2rem(60px);
}

.yuanzuo,.changshang,.xilie{
	width:100%;
	overflow: auto;

	ul{
		width:px2rem(1050px);
	    display: block;
	    font-size: 0;
	    height: px2rem(175px);
	    padding: 0 px2rem(14px);
	    margin-top:px2rem(10px);

		li{
			float:left;
			width: px2rem(140px);
		    height: px2rem(73px);
		    margin: px2rem(10px) px2rem(10px) 0 0;
		    position:relative;
		    p{		
		    	overflow:hidden;
		    	color:white;   	
		    	text-align: center;
		    	background-color: rgba(0,0,0,.30);
			    text-shadow: 0 1px 1px rgba(51,51,51,.59);
			    font-weight: 400;
			    font-size: px2rem(15px);
			    position: absolute;
			    left: 0;
			    right: 0;
			    width: 100%;
			    height: 100%;
			    line-height: px2rem(70px);
			    top: 50%;
			    transform: translateY(-50%);
		    }
		}
		img{
			width:100%;
			border-radius:px2rem(8px);
		}	
	}
}
.shu{
	width:100%;
	overflow: auto;
	ul{
		width:px2rem(600px);
	    display: block;
	    font-size: 0;
	    height: px2rem(160px);
	    padding: 0 px2rem(14px);
	    margin-top:px2rem(10px);
	    margin-bottom: px2rem(90px);
		li{
			float:left;
			width: px2rem(140px);
		    height: px2rem(70px);
		    margin: px2rem(10px) px2rem(10px) 0 0;
		    position:relative;
		    p{		
		    	overflow:hidden;
		    	color:white;   	
		    	text-align: center;
		    	background-color: rgba(0,0,0,.30);
			    text-shadow: 0 1px 1px rgba(51,51,51,.59);
			    font-weight: 400;
			    font-size: px2rem(15px);
			    position: absolute;
			    left: 0;
			    right: 0;
			    width: 100%;
			    height: 100%;
			    line-height: px2rem(70px);
			    top: 50%;
			    transform: translateY(-50%);
		    }
		}
		img{
			width:100%;
			border-radius:px2rem(8px);
		}	
	}
}
.changshang,.xilie{
	li{
		box-sizing: border-box;
		border:1px solid #ccc;
		border-radius: px2rem(5px);

	}
}

</style>