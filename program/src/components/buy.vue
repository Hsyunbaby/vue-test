<template >
    <div class="home">
        <headNav :my-message='value1'></headNav>
        <section class="mContent">
        <hgroup class="goSelect">
            <div id="groupserver">
                所有区 /所有服 /所有类型
            </div><a id="goodselect">筛选</a></hgroup>
        <div class="sorted clearfix">
            <ul class="tlist">
                <!-- <li sort="price">价格从低到高<i id="priceasc" class="asc ascGray"></i></li> -->
                <li sort="price">价格从高到低<i id="pricedesc" class="desc descGray"></i></li>
            </ul>
        </div>

        <ul class="proList clearfix" id="dataUl" >
            <li v-for="(item,index) of list" :key='index'>
                <router-link :to='"./goods"'>
                    <p class="tt"><i class="ico icoJi">寄</i>{{item.rule}}</p>                
                </router-link>
                <p>
                    <router-link :to='"./goods"'><ins class="sbtn right">购买</ins></router-link>
                    <router-link :to='"./goods"'><span class="price">¥{{item.price}}</span><br>{{item.detail}}</router-link>
                </p>
            </li>
            <div id="dataappend"></div>
        </ul>
        <div class="moreList" id="goodsload">+点击加载后20条+</div>
    </section>
        <footNav></footNav>
    </div>
</template>
<script>
import headNav from "./headNav";
import footNav from "./footNav";
export default {
  components: {
    headNav,
    footNav
  },
  data () {
      return {
          list:[],
          "value1":"购买列表"
      }
  },
  mounted(){// home|follow
    this.$http({
      url:'/static/buy.json',
      // params:{id:id,xx:dataName}
    }).then(
      res => this.list=res.data
    )

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
.moreList {
    margin: 1em 0;
    padding: 0.5em 0;
    background: #666;
    color: #fff;
    font-size: 1.45em;
    text-align: center;
}
.goSelect {
    position: relative;
    padding-left: 1em;
    height: 2.8em;
    line-height: 2.8em;
    font-size: 1.45em;
    background: #0073c3;
    color: #fff;
}

.goSelect a {
    display: inline-block;
    position: absolute;
    right: 1em;
    top: 0.6em;
    height: 1.6em;
    line-height: 1.6em;
    padding: 0 0.4em;
    color: #333;
    background: #fcdb00;
}

.selectBox {
    border-radius: 0.5em 0.5em 0 0;
    background: #fff;
    border-bottom: 2px solid #989898;
    overflow: hidden;
}

.selectBox li {
    float: left;
    display: inline-block;
    width: 49.5%;
    padding: 0.2em 0;
    text-align: center;
}

.selectBox li:first-child {
    border-right: 2px solid #989898
}

.selectBox li .cuselect:after {
    border-color: #0073c6;
    border-width: 0.2em 0.2em 0 0;
    width: 0.65em;
    height: 0.65em;
}

.selectBox li .cuselect select {
    height: 2.1em;
    font-size: 1.6em;
    color: #0073c3;
    background: #fff;
    border: 0 none;
}

.sorted {
    height: 3em;
    line-height: 3em;
    margin: 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(#dcdcdc));
}

.sorted li {
    float: left;
    display: inline-block;
    width: 49.8%;
    margin-bottom: 0;
    text-align: center;
    font-size: 1.45em;
}

.sorted li:first-child {
    border-right: 1px solid #b5b5b5;
}

.sorted li:last-child {
    border-left: 1px solid #fff;
}

.sorted li i {
    width: 0;
    height: 0;
    margin-left: 0.3em;
}

.sorted li i.desc {
    background: none;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #0073c3;
}

.sorted li i.descGray {
    background: none;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #666;
}

.sorted li i.asc {
    background: none;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid #0073c3;
}

.sorted li i.ascGray {
    background: none;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid #666;
}

.proList li {
    position: relative;
    padding: 0.5em 1.5em;
    margin-bottom: 0.1em;
    background: #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow: hidden;
}

.proList a {
    color: #7b7b7b;
    font-size: 1.45em;
}

.proList p {
    padding: 0.1em 0;
}

.proList .tt {
    font-size: 1em;
    color: #3464c7;
    font-weight: bold;
}

.proList .tt .ico {
    font-size: 0.7em;
    padding: 0;
    width: 1.4em;
    height: 1.4em;
    line-height: 1.5em;
    margin: -0.2em 0.15em 0 0;
    font-weight: normal;
    text-align: center;
}

.proList .po {
    font-size: 1.22em;
    color: #fe6c00;
}

.proList p .price {
    margin-right: 1em;
    font-size: 1.2em;
    color: #fe6c00;
    font-weight: bold;
}

.proList .sbtn {
    font-size: 0.9em;
}

.proList .arrow {
    width: 0.7em;
    height: 0.7em;
    border-right: 0.2em solid #d2d2d2;
    border-bottom: 0.2em solid #d2d2d2;
    margin-top: 0.2em;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
}

.proList .sbtnGray {
    margin-left: 2em;
}
</style>

