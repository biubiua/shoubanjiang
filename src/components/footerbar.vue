<template>
	<div>
		<ul>
			<router-link to="/home" tag="li" activeClass="active">
				<i class="iconfont icon-qingbao" ></i>
				出荷情报
			</router-link>
			<router-link to="/zhaiquan" tag="li" activeClass="active">
				<i class="iconfont icon-iconset0456"></i>
				宅圈
			</router-link>
			<router-link to="/shop" tag="li" activeClass="active">
				<i class="iconfont icon-bao"></i>
				贩售
			</router-link>
			<router-link to="/shouban" tag="li" activeClass="active">
				<i class="iconfont icon-iconsbku"></i>
				手办库
			</router-link>
			<router-link to="/my" tag="li" activeClass="active">
				<i class="iconfont icon-20150825tubiaolianxizhuanhuan03"></i>
				我
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'footer',

  data () {
    return {

    };
  }
};
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
	@return $px/$base *1rem;
}
ul{
	z-index:30;
	position: fixed;
	bottom:0;
	display: flex;
    width: 100%;
    height:px2rem(50px);
    background: white;
     padding-bottom: px2rem(5px);
     padding-top:px2rem(5px);
    .iconfont{
    	width:px2rem(20px);
    	height:px2rem(20px);
    	display:block;
    	margin-left:px2rem(25px);
    	color: #aeaeae;
    	font-size: px2rem(25px);
    	padding-bottom:px2rem(10px);
    }
	li{
		float:left;
		list-style: none;
		flex: 1;
	    text-align: center;
	    font-size:px2rem(14px);
	    vertical-align: bottom;
	}
}
.active{
	color: hotpink;	
	i{
		color:hotpink
	}
}
</style>