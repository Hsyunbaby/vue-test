<template >
     <footer class="Mfoot">
        <p class="nav">
            <router-link :to='"./login"'>登录</router-link><em>|</em><router-link :to='"./reg"'>注册</router-link><em>|</em><a href="javascript:window.scrollTo(0,0);">返回顶部</a>
        </p>
        <p class="cp">
            <a href="#">电脑版</a>
        </p>
        <p class="copyright">
            &copy;2014 m.7881.com
        </p>
    </footer>
</template>
<style scoped>
.Mfoot {
    padding: 0.2em 0;
    text-align: center;
    font-size: 1.5em;
}

.Mfoot p {
    margin: 0 0 0.7em 0;
}

.Mfoot p.copyright {
    color: #aaa;
    font-size: 0.8em;
}

.Mfoot a {
    color: #666;
}

.Mfoot p.cp a {
    background: url(../assets/computer.png) no-repeat 0 50%;
    -webkit-background-size: 1.16667em .86667em;
    -moz-background-size: 1.16667em .86667em;
    -o-background-size: 1.16667em .86667em;
    background-size: 1.16667em .86667em;
    color: #88898D;
    padding: 0 0 0 1.6667em;
}

.Mfoot em {
    padding: 0 1em;
    font-style: normal;
    color: #a6a6a6;
}

</style>

