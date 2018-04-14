<template>
  <!-- 缓冲提示条 --> 
<div class='buffer hidden' id='buffer' > 
  <div class="spinner" > 
   <span class='buffer_tip' id='buffer_tip' style="">正在请求中...</span> 
   <div class="rect1"></div> 
   <div class="rect2"></div> 
   <div class="rect3"></div> 
   <div class="rect4"></div> 
   <div class="rect5"></div> 
  </div> 
</div> 
<!-- 缓冲提示条 -->
</template>

<style scoped>
/*缓冲提示条 start*/
.buffer{ 
  background-color: black; 
  height: 120px; 
  width: 60%; 
  margin: auto; 
  filter: alpha(Opacity=60); 
  -moz-opacity: 0.6; 
  opacity: 0.85; 
  border-radius: 7px; 
} 
.buffer_tip{ 
 color: white; 
 font-size: 20px; 
 display: block; 
 padding-top: 15px; 
} 
.spinner { 
 margin: -190% auto; 
 height: 60px; 
 text-align: center; 
 font-size: 10px; 
} 
.spinner > div { 
 background-color: #67CF22; 
 height: 100%; 
 width: 6px; 
 display: inline-block; 
 -webkit-animation: stretchdelay 1.2s infinite ease-in-out; 
 animation: stretchdelay 1.2s infinite ease-in-out; 
} 
.spinner .rect2 { 
 -webkit-animation-delay: -1.1s; 
 animation-delay: -1.1s; 
} 
.spinner .rect3 { 
 -webkit-animation-delay: -1.0s; 
 animation-delay: -1.0s; 
} 
.spinner .rect4 { 
 -webkit-animation-delay: -0.9s; 
 animation-delay: -0.9s; 
} 
.spinner .rect5 { 
 -webkit-animation-delay: -0.8s; 
 animation-delay: -0.8s; 
} 
@-webkit-keyframes stretchdelay { 
 0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
 20% { -webkit-transform: scaleY(1.0) } 
} 
@keyframes stretchdelay { 
 0%, 40%, 100% { 
  transform: scaleY(0.4); 
  -webkit-transform: scaleY(0.4); 
 } 20% { 
  transform: scaleY(1.0); 
  -webkit-transform: scaleY(1.0); 
 } 
} 
/*缓冲提示条 end*/
</style>


<script>
/*缓冲进度条 start*/
/** 
 * 显示loading(加载)动画 
 
 */
import $ from "jquery"
// "http://libs.baidu.com/jquery/1.9.0/jquery.js"
function buffer_tip_show(tip_text){ 
 $("#buffer_tip").html(tip_text ? tip_text : '请稍等'); 
 $("#buffer").removeClass("hidden"); 
} 
/** 
 * 不显示loading(加载)动画 

 */
function buffer_tip_hidden(){ 
 $("#buffer").addClass("hidden"); 
} 
/*缓冲进度条 end*/
buffer_tip_show('正在努力加载中');
export default {

}
</script>


