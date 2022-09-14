<template>
  <div id="app">
    <!-- <AddBlogComponent /> -->
    <!-- <ShowBlogComponent/> -->
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>

//import AddBlogComponent from './components/AddBlog.vue'
//import ShowBlogComponent from './components/ShowBlog.vue'
import HeaderComponent from './components/Header.vue'
export default {
  name: 'App',
  components: {

    // AddBlogComponent,
    //ShowBlogComponent,
    HeaderComponent,
    
  },
}
</script>

<style>
#app {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
