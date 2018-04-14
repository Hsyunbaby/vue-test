<template >
    <header class="topHd">
		<a href="javascript:window.history.go(-1);" class="back">返回</a>
          <router-link :to='"./home"' class="home" >首页</router-link>
		<!-- <a href="index.html" class="home">首页</a> -->
		<span>{{myMessage}}</span>
    </header>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
console.log(mapActions,mapGetters); // 返回对象{count:fn,homdeData:fn}
export default {
  data(){
    return {
      // count:0  this.$store.dispatch(type,payload)
      // navState:'会员登录'
    }
  },
  props:['myMessage'],
   mounted () {
    let dataName = this.$route;
    // console.log(dataName)
  }
  // methods:{
  //   ...mapActions([
  //     'login','reg','trade','goods','buy',
  //   ]),
  // },
  // computed:mapGetters([
  //   // 'navState'
  // ])
}
</script>

<style scoped>
.topHd {
    position: relative;
    height: 2.6em;
    line-height: 2.6em;
    background: #0073c3;
    color: #fff;
    font-size: 1.8em;
    text-align: center;
}

.topHd span {
    font-size: 1.2em;
}

.topHd a {
    position: absolute;
    display: block;
    top: 0;
    width: 1.59em;
    height: 2.6em;
    text-indent: -999em;
    overflow: hidden;
}

.topHd a.back {
    left: 0.5em;
    background: url(../assets/back.png) no-repeat 0 50%;
    -webkit-background-size: 0.76667em .96667em;
    -moz-background-size: 0.76667em .96667em;
    -o-background-size: 0.76667em .96667em;
    background-size: 0.76667em .96667em;
    color: #88898D;
}

.topHd a.home {
    right: 0.1em;
    width: 2.1em;
    background: url(../assets/home.png) no-repeat 0 50%;
    -webkit-background-size: 1.56667em 1.36667em;
    -moz-background-size: 1.56667em 1.36667em;
    -o-background-size: 1.56667em 1.36667em;
    background-size: 1.56667em 1.36667em;
}
</style>

