<template>
  <div id="new">
   <ul  v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false">
    <li v-for="data in datalist">
      <p>
        <img :src="data.author.avatar"/>
        <span class="username">{{data.author.name}}</span>
        <button>+  关注</button>
          <span class="name"> {{data.author.grade.name}}</span>         
          <span class="shu">|</span>
          <span class="time">{{data.time}}</span>
      </p>
      <div class="share">
        <img :src="data.share.image"/>        
      </div>
      <div class="content">{{data.content}}</div>
       <footer>
        <div>
          <i class="icon-xin iconfont"></i>
          <span>{{data.like.count}}</span>
        </div>
        <div>
          <i class="icon-xiaoxi iconfont"></i>
          <span>{{data.comment.count}}</span>
        </div>
        <div class="last">
          <i class="iconfont icon-zhuanfa"></i>
          <span>{{data.clay.count}}</span>
        </div>
      </footer>
    </li>
   </ul>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import Vue from "vue";
import router from "../router"
import axios from "axios";

Vue.use(InfiniteScroll);
export default {


  name: 'new',

  data () {
    return {
      datalist:[],
      loading:false,
      current:2
    };
  },
   mounted(){
  	axios.get("/api/newlist").then(res=>{	
      this.datalist=res.data.data;
  		// console.log(res.data)
  	})

  },
  methods:{
    loadMore(){
       this.loading = true;
      // console.log(111)
       this.current++;
       // console.log(this.current)
    axios.get(`/api/tweet?sort=latest&page=${this.current}`).then(res=>{ 
       this.datalist = [...this.datalist,...res.data.data]
        // console.log(res.data)
        this.loading = false;
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
#new{
  margin-top:px2rem(40px);
  li{
    list-style: none;
    overflow: hidden;
    .share{
         width: 100%;
        height:px2rem(320px);
        img{
         width:100%;
         height:100%; 
      } 
    }
    .content{
      line-height: px2rem(22px);
      height: auto;
      margin: px2rem(15px) 0;
      padding: 0 px2rem(14px);
    }
   
    p{
      position: relative;
      padding: px2rem(10px) px2rem(15px);
      height: px2rem(64px);
      button{
        position: absolute;
        right: px2rem(15px);
        top: 50%;
        margin-top: -px2rem(22px);
        width: px2rem(70px);
        height: px2rem(26px);
        color: #f66875;
        border: 1px solid #f66875;
        border-radius: px2rem(13px);
        text-align: center;
        line-height: px2rem(26px);
        background-color: white
      }
      .username{
        font-size: px2rem(15px);
        color: #333;
        margin-left: px2rem(54px);
        margin-top: px2rem(2px);
        line-height: px2rem(18px);
        display:block;
      }
      .name{
        font-size: px2rem(12px);
        color: #9a9a9a;
        margin-left: px2rem(14px);
        margin-top: px2rem(2px);
        line-height: px2rem(18px);
      }
      .shu{
        font-size: px2rem(12px);
        color: #9a9a9a;
      }
      .time{
         font-size: px2rem(12px);
        color: #9a9a9a;
        margin-top: px2rem(2px);
        line-height: px2rem(18px);
      }
      img{
        float:left;
        height: px2rem(44px);
        width: px2rem(44px);
        border-radius: 50%;
        border: 1px solid #dadada;
      }
    }    
  }
  footer{
    padding: 0 px2rem(16px) px2rem(20px);
    margin-top: px2rem(20px);
    .last{
       border-right: none;
    }
    div{
      font-size: px2rem(12px);
      color: #999;
      width: 30%;
      height: px2rem(22px);
      line-height: px2rem(22px);
      border-right: 1px solid #ddd;
      display:inline-block;
      i{
        vertical-align: middle;
        font-size: px2rem(26px);
        margin-right:px2rem(5px);
        margin-left:px2rem(25px);
      }
      span{
        font-size: px2rem(12px);
        color: #999;
        line-height:px2rem(22px);
      }
    }
  }
}
</style>