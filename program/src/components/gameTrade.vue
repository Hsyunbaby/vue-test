<template >
    <div class="home">
        <headNav :my-message='value1'></headNav>
        <section class="mContent">
        <div class="tab"><a href="javascript:void(0);" class="current"><i></i>热门游戏</a><a href="javascript:void(0);">最近浏览</a></div>
        <div>
            <ul class="tlist column2 showOne pusht">
            <!-- <router-link :to='"./buy"'>忘仙</router-link>                 -->
                <li><router-link :to='"./buy"'>忘仙</router-link></li>
                <li><router-link :to='"./buy"'>神魔</router-link></li>
                <li><router-link :to='"./buy"'>仙变</router-link></li>
                <li><router-link :to='"./buy"'>时空猎人</router-link></li>
                <li><router-link :to='"./buy"'>魔与道</router-link></li>
                <li><router-link :to='"./buy"'>九州OL</router-link></li>
                <li><router-link :to='"./buy"'>世界OL</router-link></li>
                <li><router-link :to='"./buy"'>诛神OL</router-link></li>
            </ul>
            <ul class="tlist historyList pusht">
            </ul>
        </div>
        <p class="aBlue pusht tright clearfix" id="clearfixid">

            <a href="#">更多手机游戏&gt;&gt;</a>
        </p>
    </section>
        <footNav></footNav>
    </div>
</template>
<script>
import headNav from "./headNav";
import footNav from "./footNav";
export default {
    data () {
        return {
            "value1":"手游交易"
        }
    },
  components: {
    headNav,
    footNav
  }
};
</script>

<style scoped>
.mContent {
    padding: 1.2em;
    overflow: hidden;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.tlist {
    overflow: hidden;
}

.tlist li {
    margin-bottom: 0.1em;
    width: 100%;
    text-align: center;
}

.tlist li a {
    font-size: 1.48em;
    display: block;
    padding: 0.5em 0;
    background: #fff;
}
.aBlue a {
    font-size: 1.6em;
    color: #0073c3
}

a.aBlue {
    color: #0073c3
}
.tab a {
    float: left;
    display: block;
    position: relative;
    width: 50%;
    color: #696969;
    padding: 0.7em 0;
    font-size: 1.6em;
    text-align: center;
    border-bottom: 0.2em solid #c4c4c4;
}

.tab a.current {
    border-color: #0073c3;
    color: #0073c3;
}

.column2 li {
    clear: none;
    float: left;
    width: 50%;
    text-align: left;
}

.column2 li a {
    margin: 0 0.1em 0 0;
    padding: 0.8em 1em;
}

.column3 li {
    clear: none;
    float: left;
    width: 33%;
}

.column3 li a {
    margin: 0 0.2em;
    padding: 0.5em;
}

.historyList li {
    text-align: left;
}

.historyList li a {
    position: relative;
    padding: 0.8em 1em;
    white-space: nowrap;
    overflow: hidden;
}

.historyList li a:after {
    position: absolute;
    top: 1.3em;
    right: 1em;
    content: '';
    width: 0.55em;
    height: 0.55em;
    border: #6e6e6e solid;
    border-width: 0.13em 0.13em 0 0;
    -webkit-transform: rotate(45deg);
}
.historyList li a .gray {
    color: #aaa;
}
</style>

