<template>
<div>
	<div id="nav">
		<router-link to="/zhaiquan/new" tag="span" activeClass="active" class="hot">
				最热
			</router-link>
			<router-link to="/zhaiquan/hot" tag="span" activeClass="active" class="new">
				最新
			</router-link>
		</div>
	<router-view></router-view>
</div>
</template>

<script>
export default {

  name: 'zhaiquan',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
$base:100px;
@function px2rem($px){
  @return $px/$base *1rem;
}
#nav{
	position: fixed;
	width:100%;
	height:px2rem(40px);
	width:100%;
	top:0;
	text-align: center;
	color:white;
	background-color: #f66875;    
	z-index:20;
	text-align: center;
	padding-bottom:px2rem(5px);
	span{
		width:50%;
		list-style: none;
		text-align: center;
		line-height: px2rem(35px);
		display: inline-block;

	}
	.hot{
		float:left;
	}
	.new{
		float:right;
	}
	.active{
		border-bottom:px2rem(3px) solid white;
	}
}
</style>