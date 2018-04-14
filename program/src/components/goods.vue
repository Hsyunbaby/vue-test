<template >
    <div class="home">
        <headNav :my-message='value1'></headNav>
        <form id="registerForm" method="post" action="#">
		<section class="mContent">
        <article class="cttBg">
            <ul class="form">
                <li>
                    <i class="ico icoJi">寄</i>
                    <span class="blue">7300银两=100元 即买即发</span></li>
                <li>游戏名称：忘仙</li>
                <li>游戏区服：三区/万剑逍遥</li>
                <li>游戏类型：游戏币</li>
                <li>单件数量：7300银两</li>
                <li>商品单价：0.0136986301369863元/银两</li>
                <li>商品库存：1&nbsp;件 </li>
                <li><span class="ftBig orange">¥100</span>
                    <a href="javascript:window.history.go(-1);" class="aBlue right">返回</a></li>
            </ul>
        </article>
        <ul class="form pusht">
            <li><input type="button" class="btn" value="立即购买" onClick="window.location.href='goods-buying-29449218.html'" /></li>
        </ul>
    </section>
		</form>
        <footNav></footNav>
    </div>
</template>
<script>
import headNav from "./headNav";
import footNav from "./footNav";
export default {
    data () {
        return {
            "value1":"忘仙"
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

.mContent .ctTit {
    font-size: 1.6em;
    color: #9a9a9a;
    height: 1.1em;
    line-height: 1.1em;
    margin-bottom: 0.5em;
}

.mContent .ctTit small {
    font-size: 0.8em;
}


.form {
    margin: 0 0 0.5em;
    font-size: 1.68em;
    width: 100%;
}

.orderBox {
    font-size: 1.48em;
}

.form li {
    margin-bottom: 0.5em;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.form li.select {
    width: 100%;
    height: 2.8em;
    line-height: 2.8em;
    padding: 0 0.5em;
    background: #fff;
    font-size: 0.88em;
    color: #323232;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.form li.select span {
    color: #b7b7b7;
}

.form .input {
    width: 100%;
    height: 2.8em;
    border: 0.07em solid #ababab;
    padding: 0 0.8em;
    font-size: 0.98em;
    color: #333;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.form .input70 {
    width: 60%;
}

.form li .money {
    font-size: 1em;
}

.form li.small {
    font-size: 0.9em;
}

.form li .vCode {
    float: right;
    display: block;
    -webkit-box-pack: horizontal;
    margin-left: 10px;
    width: 36%;
    height: 3.05em;
    line-height: 3.25em;
    font-size: 0.8em;
    text-align: center;
    color: #fff;
    background: #898989;
    vertical-align: top;
    cursor: pointer;
}

.form .btnArea {
    margin-top: 1.4em;
}

.form .btn,
.form a.btn,
.btn,
a.btn {
    width: 100%;
    height: 2.64em;
    line-height: 2.64em;
    text-align: center;
    font-size: 1.11em;
    color: #fff;
    border: 0 none;
    cursor: pointer;
    background: #F9873C;
}

.form .btn.btnGray {
    background: #8e8e8e;
}

.form a.btn,
a.btn {
    display: block;
    font-size: 1.12em;
    font-weight: normal;
}

a.btn {
    font-size: 1.68em;
}

.form a.btnGray,
a.btnGray {
    background: #8e8e8e;
}

.form .btn50,
.form a.btn50,
.btn,
a.btn50 {
    width: 50%;
}

.form li.noLogin {
    padding: 0 2em;
    margin: 1.5em 0 2.5em 0;
}

.form li.noLogin a {
    color: #0073c3;
    font-size: 0.88em;
}

.form li.btnTip {
    font-size: 0.9em;
    text-align: center;
}

.form label {
    float: left;
}
</style>

