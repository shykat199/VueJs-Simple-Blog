import AddBlogComponent from "../components/AddBlog.vue";
import ShowBlogComponent from "../components/ShowBlog.vue";
import singleBlog from "../components/singleBlog.vue";
export default [
  { path: "/", component: ShowBlogComponent },
  { path: "/add", component: AddBlogComponent },
  { path: "/blog/:id", component: singleBlog },
];
