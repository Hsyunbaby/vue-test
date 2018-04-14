<template>
<div class='user'>
  <headNav :my-message='value1'></headNav>
  <div class="content">
    <div class="header">
      <h2><img src="../assets/img/headimg.png" alt=""/></h2>
      <div class="user-box">
        <a >{{this.$route.query.userData.user}}</a>
        <a href="javascript:;" @click="logout">注销</a>
        <!-- <a href="javascript:;" >{{this.$route.query.user}}</a> -->
      </div>
      <ul id="clear">
        <li>
          <span><b>关 注 ： </b>{{this.$route.query.userData.follow}}</span>
        </li>
        <li>
          <span><b>粉 丝 ： </b>{{this.$route.query.userData.fans}}</span>
          <!-- <p class="end">粉丝</p> -->
        </li>
      </ul>
</div>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>买到的宝贝</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>购物车</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>设置</p>
        </li>
      </ul>
    </div>
    <footNav></footNav>
  </div>
</template>

<script>
import axios from "axios";
import headNav from "./headNav";
import footNav from "./footNav";
export default {
  data() {
    return {
      value1: "个人中心",
      // userData:
    };
  },
  components: {
    headNav,
    footNav
  },
  //  props: ["myPassord","myUsername"],
  beforeRouteEnter(to, from, next) {
    axios({
      url: "http://localhost:3000/users",
      // url: "https://vue-test-9eeaa.firebaseio.com/posts.json"
       params:{msg:to.query.user}
    }).then(res => {      
      // console.log(res)
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].user==to.query.user) {
          to.query.userData = res.data[i]; //路由传递 预载数据
          // console.log(to.query.userData)
          next();
          break;//这里要有break，不然不会跳转（可能next方法执行了多次）
        } else {
          next("/login");
        }
      }
    });
  },
  methods: {
    logout() {
      //注销
      // var del=document.getElementById("")
      axios({
        url: "http://localhost:3000/del", //给服务器发个请求,
        params:{"del":this.$route.query.userData.user}
      }).then(res => {
        if (res.data =="1") {
          //需要服务器返回对象
          this.$router.push("/home"); //跳转
        }
      });
    }
  }
};
</script>


<style>
/* @import url("../assets/css/mydoc.css"); */
#clear:after{ display:block; content:''; clear:both;}
#clear{ zoom:1;background: #9e9a95;}
.content {
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
}
.content .header {
  width: 100%;
  height: 120px;
  background: #9e9a95;
  padding-top: 10px;
}
.header h2 {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
}
.header h2 img {
  width: 100%;
}
.header .user-box {
  width: 80px;
  font-size: 17px;
  color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}
.user-box a {
  color: #fff;
}
.header ul {
  margin-top: 10px;
}
.header ul li {
  width: 50%;
  height: 40px;
  float: left;
  color: #fff;
}
.header ul li span {
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: block;
  font-size: 16px;
}
.header ul li p {
  text-align: center;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  border-right: 1px solid #fff;
}
.header ul li p.end {
  border: 0;
}

.content .docList {
  width: 500px;
  margin: 0 auto;
}
.docList ul {
  border-top: 1px solid #7b7c7c;
}
.docList ul li {
  background: #fff;
  height: 40px;
  border-top: 1px solid #bcbbba;
  border-bottom: 1px solid #7b7c7c;
}
.docList ul li span {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}
.docList ul li b {
  width: 15px;
  height: 15px;
  background: url(../assets/img/next_img.png) no-repeat 0 0;
  background-size: 100%;
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}

.docList ul .gk-text i {
  width: 16px;
  height: 16px;
  background: url(../assets/img/gk_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.gk-text p {
  float: left;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
.docList ul .mm-text i {
  width: 16px;
  height: 16px;
  background: url(../assets/img/mm_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.mm-text p {
  float: left;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
.docList ul .cg-text i {
  width: 16px;
  height: 16px;
  background: url(../assets/img/cg_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.cg-text p {
  float: left;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
.docList ul .sc-text i {
  width: 16px;
  height: 16px;
  background: url(../assets/img/sc_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.sc-text p {
  float: left;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
.docList ul .my_cz {
  margin-bottom: 10px;
}
.docList ul .my_cz i {
  width: 16px;
  height: 16px;
  background: url(../assets/img/my_cz.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.my_cz p {
  float: left;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>


