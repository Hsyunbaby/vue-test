<template >
    <div class="fill">
        <section class="mSorts clearfix">
            <ul>
                <li class="">
                     <router-link :to='"./gameTrade"'><img src="../assets/pic/i01.png" alt="AppStore充值" /></router-link>
                     <router-link :to='"./gameTrade"'><img src="../assets/pic/i02.png" alt="手游交易" /></router-link>
                </li>
                <li class="">
                     <router-link :to='"./gameTrade"'><img src="../assets/pic/i05.png" alt="苹果手游直充" /></router-link>
                </li>
                <li>
                     <router-link :to='"./user"'><img src="../assets/pic/i04.png" alt="个人中心" /></router-link>
                     <router-link :to='"./gameTrade"'><img src="../assets/pic/i03.png" alt="网游交易" /></router-link>
                    <!-- <a href="procurement/toNetGameTrade.html"><img src="../assets/pic/i04.png" alt="个人中心" /> </a>
                    <a href="procurement/toNetGameTrade.html" class="pt"><img src="../assets/pic/i03.png" alt="网游交易" /> </a> -->
                </li>
            </ul>
        </section>
        <section class="searchWrap clearfix">
                <input type="text" id="txt_search_simple" placeholder="查询您要充值的手游" onfocus="this.value=''" onBlur="if(!value){value=defaultValue;}" class="input" xqkinput_index="0" />
                <a href="#" class="searchbtn" id="hlk_search_simple">搜</a>
                <p class="hotwords">
                    <a title="天天酷跑" href="goods-buying-A989-100106.html">天天酷跑</a>
                    <a title="地下城与勇士" href="buy-G10.html">地下城与勇士</a>
                    <a title="忘仙" href="buy-A817.html">忘仙</a>
                    <a href="http://www.aspku.com/" target="_blank">源码之家</a>
                </p>
            </section>
    </div>
</template>
<style scoped>
.fill {
    padding: 1em;
}
.mSorts {
    overflow: hidden;
}

.mSorts ul {
    display: -moz-box;
    display: -webkit-box;
    width: 100%;
}

.mSorts li {
    text-align: center;
    overflow: hidden;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    box-flex: 1
}

.mSorts li:first-child {
    margin-right: 0.6em;
}

.mSorts li:last-child {
    margin-left: 0.6em;
}

.mSorts li a {
    display: block;
    overflow: hidden;
}

.mSorts li a img {
    max-width: 100%;
    height: auto;
}

.mSorts li a.pt {
    margin-top: 0.6em;
}
.searchWrap {
    position: relative;
    margin: 2em 0;
    padding: 0 2em;
}

.searchWrap .input {
    -moz-box-sizing: border-box;
    background: #fff;
    border: 1px solid #fff;
    color: #a3a3a3;
    font-size: 1.7em;
    height: 2.5em;
    padding: 0 2em 0 0.8em;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.searchWrap .searchbtn {
    font-size: 2em;
    color: #666;
    position: absolute;
    right: 2em;
    top: 0.28em;
}

.searchWrap .hotwords {
    margin: 0.5em 0;
    text-align: center;
}

.searchWrap .hotwords a {
    color: #2062c5;
    font-size: 1.35em;
    margin: 0 0.5em 0 0;
}

.searchInfo {
    padding: 5em 0 9em;
    text-align: center;
}

.searchInfo dt {
    font-size: 1.8em;
    margin-bottom: 0.6em;
}

.searchInfo dd {
    font-size: 1.45em;
}
</style>
<script>
export default {
  methods: {
      
  }
}
</script>


