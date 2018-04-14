<template >
<div class="mheadNav">
    <header class="mainHd">
        <nav class="mNav">
          <router-link :to='"./login"' >登录</router-link>
          <router-link :to='"./reg"' >注册</router-link>
        <!-- <a href="reg.html">注册</a><a href="login.html">注册</a> -->
        </nav>
        <h1>
            <a href="index.html" class="logo">7881-做最专业的游戏交易平台</a>
        </h1>
	</header>
  <section class="sliderWrap clearfix">
            <a href="index.html"><img src="../assets/pic/s01.jpg" width="100%"></a>
  </section>
</div>
</template>
<script>
</script>

<style scoped>

.mainHd {
  height: 5em;
  background: #e4f2fc;
  border-bottom: 2px solid #5fa8da;
}

.mainHd h1 {
  padding: 0.5em 0 0 0.5em;
}

.mainHd .logo {
  display: block;
  width: 6em;
  height: 1.48em;
  text-indent: -9999em;
  line-height: 0;
  background: url(../assets/logo.png) left top no-repeat;
  -webkit-background-size: 5em auto;
  -moz-background-size: 5em auto;
  -o-background-size: 5em auto;
  background-size: 5em auto;
}

.mainHd .mNav {
  float: right;
  height: 5em;
  line-height: 5em;
}

.mainHd .mNav a {
  font-size: 1.6em;
  color: #575757;
  margin-right: 1em;
}
.sliderWrap {
    position: relative;
}

.sliderWrap a {
    display: block;
}

</style>

