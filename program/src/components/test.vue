<template>
<div id="bj">
  <div id="kd">
  <BlogHeader></BlogHeader>    
  <div id="add-blog">
    <h2>写下你想对他说的话</h2>
    <form v-if="!submmited">
      <label style="color: sandybrown;font-size:20px;font-weight:bold">留言标题</label>
      <input type="text" v-model="blog.title" required  style="background:rgba(16, 199, 190, 0.1)"/>

      <label style="color: sandybrown;font-size:20px;font-weight:bold">博客内容</label>
      <textarea v-model="blog.content" style="background:rgba(16, 199, 190, 0.1)"></textarea>

      <div id="checkboxes">
        <label>生活</label>
        <input type="checkbox" value="生活" v-model="blog.categories">
        <label>情感</label>
        <input type="checkbox" value="情感" v-model="blog.categories">
        <label>IT</label>
        <input type="checkbox" value="IT" v-model="blog.categories">
        <label>互联网</label>
        <input type="checkbox" value="互联网" v-model="blog.categories">
      </div>
      <label>作者:</label>
      <select v-model="blog.author" style="background:rgba(16, 199, 190, 0.1)">
        <option v-for="author in authors" :key="author.id">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>

    <div v-if="submmited" style="background:rgba(16, 199, 190, 0.1)">
      <h3>您的博客发布成功!</h3>
    </div>

    <div id="preview">
      <h3>博客预览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">
          {{category}}
        </li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import BlogHeader from './BlogHeader.vue'
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["along","嘉文四世","安妮",'辛德拉','发条'],
      submmited:false
    }
  },
  methods:{
    post:function(){
      this.$http.post("https://myboke-d8690.firebaseio.com/posts.json",this.blog)
          .then(function(data){
            // console.log(data);
            this.submmited = true;
          });
    }
  },
  components:{
    BlogHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bj{
  width: 100%;
  height: 796px;
  background: url("http://www.ruanyifeng.com/images_pub/pub_117.jpg") no-repeat;
  background-size: 100% 100%;
}
#kd{
  max-width: 600px;
  margin: 0 auto;
}

#add-blog *{
  box-sizing: border-box;
  
}
#add-blog{
  margin: 0px auto;
  max-width: 600px;
}
#add-blog h2{
  text-align: center;
  color: sandybrown
}
label{
  display: block;
  margin: 10px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 150px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 0;
  color: crimson;
  font-weight: bold;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 10px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 20px 0;
}

h3{
  margin-top: 10px;
}

</style>
