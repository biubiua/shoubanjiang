<template>
  <div id="app">
    <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>

import footerbar from "@/components/footerbar";
export default {
  name: 'app',
  // data(){
  //   return
  // },
  components:{
   
    footerbar
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
html,body{
  width:100%;
  height:100%;
  
}


</style>
