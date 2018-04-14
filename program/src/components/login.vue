<template >
    <div class="home">
        <headNav :my-message='value1'></headNav>
        <section class="mContent">
                <form id="loginForm" method="post">
                <input type="hidden" name="random" id="random" value="" />
                <input type="hidden" name="lbbrowser" id="lbbrowser" value="webbrowser" />
                <input type="hidden" id="macaddress" name="macaddress" value="" />

                <input type="hidden" name="comeback" value="" />
                <!-- <s:token /> 解析成一个新组件 会报错 其作用：防止用户重新提交-->
                <ul class="form">
                    <li>
                        <input type="text" class="input" placeholder="用户名：" id="username" name="username" :my-username='valueU' />
                    </li>
                    <li>
                        <input type="password" class="input" placeholder="密   码：" id="password" :my-password='valueP'/>
                        <input type="hidden" class="input" id="password_" name="password" />
                    </li>
                    <li class="btnArea">
                        <input type="button" id="hlkOK" class="btn" value="登　　录" @click='login'/>
                    </li>
                    <li class="noLogin">
                        <a href="#" class="right">忘记密码</a>
                        <router-link :to='"./reg"' >注册</router-link>               
                    </li>
                </ul>
            </form>
        </section>
        <footNav></footNav>
    </div>
</template>
<script>
import headNav from "./headNav";
import footNav from "./footNav";
import axios from "axios";

export default {
  data() {
    return {
      value1: "用户登录",
      valueU: "",
      valueP: "",
    };
  },
  components: {
    headNav,
    footNav
  },
  methods: {
    login() {
      this.valueU = document.getElementById("username").value;
      this.valueP = document.getElementById("password").value;
      //   console.log(this.value);
      axios({
        url: "http://localhost:3000/login",
        // url: "https://vue-test-9eeaa.firebaseio.com/posts.json"
       params:{"user":this.valueU,"pass":this.valueP}        
      }).then(res => {
        // console.log(this.value)
        if(res.data=="1"){
          this.$router.push({
                  path:"/user",
                  query:{"user":this.valueU},
              });
         }else{
           alert("用户名不存在或者密码错误~"); 
         }
         
      });
    }
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
  background: #f9873c;
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

