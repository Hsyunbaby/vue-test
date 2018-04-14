<template>
  <div id="app">
      <loading v-show='bLoading'></loading>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
//   components: {
//     loading
//   },
  computed: mapGetters(["bLoading"]),
  };
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
}

body {
  font: 14px/1.5 "Microsoft Yahei";
  font-size: 62.5%;
  color: #333;
  background: #e4e4e4;
}

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  word-wrap: break-word;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul,
menu {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

:focus {
  outline: 0;
}

li,
img,
label,
input {
  vertical-align: middle;
}

ins,
del,
i,
s {
  text-decoration: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Microsoft Yahei", SimHei;
  font-weight: normal;
  *font-weight: bold;
}

a,
input,
textarea {
  text-decoration: none;
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
  color: #585858;
}

.clearfix:after,
.head:after,
#footer:after,
.block:after,
#pages:after,
#tab:after,
.tab:after,
.formul:after,
.formul li:after,
.formul li .common:after,
.formul li .common li:after,
.form:after,
.form li:after,
.form li .common:after,
.form li .common li:after,
.transverse:after,
.vertical:after {
  clear: both;
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
}

.clearfix,
.head,
#footer,
.block,
#pages,
#tab,
.tab,
.formul,
.formul li,
.formul li .common,
.formul li .common li,
.form,
.form li,
.form li .common,
.form li .common li,
.transverse,
.vertical {
  *zoom: 1;
  clear: left;
}

h1,
big {
  font-size: 2.5em;
}

.tcenter {
  text-align: center;
}

.tright {
  text-align: right;
}

.tleft {
  text-align: left;
}

.bold {
  font-weight: bold;
}

blockquote,
.block {
  padding: 1em 0;
}

.block {
  background: #fff;
  border: 1px solid #ccc;
}

.warning {
  font-size: 1.48em;
  background: #fff8c1;
  border: 1px solid #f07a77;
  text-align: center;
}

samp,
em {
  padding: 0 0.3em;
  font-style: normal;
}

em {
  color: #d91010;
}

strong {
  font-weight: bold;
}

.error,
.fail,
.red,
.warn {
  color: #c02a34;
}

a.red {
  color: #fb2509;
}

.success,
.green,
a.green {
  color: #1cae1c;
}

.orange {
  color: #f60;
}

.blue {
  color: #0073c3;
}

.gray {
  color: #666;
}

.oatmeal {
  color: #ccc;
}

.black {
  color: #3b3b3b;
}

.ftBig {
  font-size: 1.4em;
}

.push {
  margin: 10px;
}

.pushtH {
  margin-top: 0.5em !important;
}

.pusht {
  margin-top: 1em !important;
}

.pushr {
  margin-right: 10px;
}

.pushb {
  margin-bottom: 10px;
}

.pushl {
  margin-left: 1em;
}

.pusht20 {
  margin-top: 2em !important;
}

.pushb20 {
  margin-bottom: 20px;
}

.pusht30 {
  margin-top: 30px;
}

.pushb30 {
  margin-bottom: 30px;
}

.pusht60 {
  margin-top: 6em !important;
}

.noPush,
.nopush {
  margin: 0 !important;
}

.fill {
  padding: 1em;
}

.fillL {
  padding-left: 0.7em;
}

.clearR,
.clear_r {
  clear: right;
}

.clearL.clearl {
  clear: left;
}

.clear {
  clear: both;
  height: 0;
  font-size: 0;
  overflow: hidden;
}

.left,
.f_left {
  float: left;
}

.right,
.f_right {
  float: right;
}

.show {
  display: block;
}

.hide {
  display: none;
}

input.short {
  border: 0 none;
  font-size: 0.8em;
  width: 3em;
  text-align: center;
}

.action,
.icon,
.inline,
i {
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  vertical-align: middle;
}

.ico {
  padding: 0;
  width: 1.4em;
  height: 1.4em;
  line-height: 1.4em;
  text-align: center;
  color: #fff;
  font-style: normal;
  border-radius: 0.2em;
}

.icoJi {
  background: #f770cf;
}

.icoDan {
  background: #4fc849;
}

.heart {
  position: relative;
  width: 1em;
  height: 0.9em;
  cursor: pointer;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 0.5em;
  top: 0;
  width: 0.5em;
  height: 0.8em;
  background: #c0c0c0;
  -moz-border-radius: 0.5em 0.5em 0 0;
  border-radius: 0.5em 0.5em 0 0;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 100%;
  -moz-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -o-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  -o-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.htRed:before,
.htRed:after {
  background: #fe6c00;
}

.cttBg {
  padding: 0.8em 1.5em;
  background: #fff;
}

.sbtn {
  padding: 0.2em 0.9em;
  color: #fff;
  font-style: normal;
  border-radius: 0.3em;
  background: #0073c3;
}

.sbtnOrange {
  background: #f60;
}

.sbtnGray {
  background: #c4c4c4;
}

.boxSize {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
