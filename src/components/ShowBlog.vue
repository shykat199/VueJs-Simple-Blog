<template>
  <div class="main" v-theam="'wide'" id="show-blog">
    <h1>All Blog Artical</h1>
    <input type="text" v-model="search" placeholder="Search Blogs..." />
    <div v-for="blog in filteerBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/'+ blog.id" v-rainbow exact>
        {{blog.title | to-uppercase}}
      </router-link>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogComponent",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filteerBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style>
#show-blog {
  max-width: 800px;
  margin: auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  text-decoration: none;
}

a:link {
  text-decoration: none;
}
.main h1 {
  margin-top: 80px;
}
</style>
