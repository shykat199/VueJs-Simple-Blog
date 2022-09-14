<template>
  <div id="add-blog" class="container main">
    <h2>Add a New Blog Post</h2>

    <form action="" v-if="!submitted">
      <label for="blogTitle">Blog Title:</label>
      <input type="text" name="blogTitle" required v-model.lazy="blog.bTitle" />
      <label for="blogContent">Blog Content:</label>
      <textarea
        name="blogContent"
        id=""
        cols="30"
        rows="10"
        v-model.lazy="blog.bContent"
      ></textarea>
      <div id="checkbox">
        <label>Angular Js</label>
        <input
          type="checkbox"
          name=""
          value="Angular Js"
          v-model="blog.catagories"
        />

        <label>Vue JS</label>
        <input
          type="checkbox"
          name=""
          value="Vue JS"
          v-model="blog.catagories"
        />

        <label>React Js</label>
        <input
          type="checkbox"
          name=""
          value="React Js"
          v-model="blog.catagories"
        />

        <label>Java Script</label>
        <input
          type="checkbox"
          name=""
          value="Java Script"
          v-model="blog.catagories"
        />

        <label>Java EE</label>
        <input
          type="checkbox"
          name=""
          value="Java EE"
          v-model="blog.catagories"
        />

        <label>Spring Boot</label>
        <input
          type="checkbox"
          name=""
          value="Spring Boot"
          v-model="blog.catagories"
        />
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in aothors" :key="author.id">
        {{author}}
        </option>
      </select>

      <button class="ms-3 btn btn-primary" @click.prevent="postData">Add Blog</button>

    </form>
    
    <div v-if="submitted" class="container">
      <h3>Thanks For Adding Your Post</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog:</h3>
      <p>Blog title: {{ blog.bTitle }}</p>
      <p>Blog content:</p>
      <p>{{ blog.bContent }}</p>
      <p>Blog Catagory:</p>
      <ul>
        <li v-for="catagorie in blog.catagories" :key="catagorie.id">
          {{ catagorie }}
        </li>
      </ul>
      <p>Blog Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlogComponent",
  data() {
    return {
      blog: {
        bTitle: "",
        bContent: "",
        catagories: [],
        author:"",
      },
      aothors:['Net ninja','Angular Avenger','Vue spender'],
      submitted:false,
    };
  },
  methods:{

    postData:function(){

      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        
        bTitle:this.blog.bTitle,
        bContent:this.blog.bContent,
        catagories:this.blog.catagories,
        author:this.blog.author,
        userId:1,

      }).then((result)=>{
        console.log(result);
      }); 

      this.submitted=true;
    } 
  }
};
</script>

<style>

.main h2{
  margin-top: 80px;
}

#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkbox input {
  display: inline-block;
  margin-right: 10px;
  /* margin-left: 2px; */
}
#checkbox label {
  display: inline-block;
  margin-right: 14px;
}
</style>
