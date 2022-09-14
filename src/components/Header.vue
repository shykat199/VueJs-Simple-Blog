<template>
  <div class="">
    <nav>
      <ul>
        <li>
          <router-link to="/" exact >Blog</router-link>
        </li>
        <li>
          <router-link to="/add" exact >Add New Blog</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
ul {
  list-style: none;
  text-align: center;
  
}
li {
  display: inline-block;
  margin: 0 5px;
  text-decoration: none!important;
  
}

/* a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
  
} */

nav ul li a:link , a:visited{
  text-decoration: none!important;
  cursor: pointer;
  color:  whitesmoke;
  padding: 6px 8px;
  border-radius: 10px;
}

nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
  overflow: hidden;
  top: 0;
  position: fixed;
  width: 100%;
  
}

/* nav ul li:hover {
  background: #ddd;
  color: inherit;
  
} */
.router-link-active{
    background: rgb(125, 119, 119);
    color: #444;
}
</style>
