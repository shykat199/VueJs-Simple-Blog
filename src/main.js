import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routs/routes'
Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

//Router
const router=new VueRouter({
  routes:Routes,
  mode:'history',
});




//Custom Dirictive
Vue.directive('rainbow',{

  bind(el){
   el.style.color="#" + Math.random().toString().slice(2,8);
    //el.style.fontSize="150px";
  }

});

Vue.directive('theam',{
  bind(el,binding){
    if(binding.value=='wide'){
      el.style.maxWidth="1200px";
    }
    else if(binding.value=='narrow'){
      el.style.maxWidth="560px";
    }
  }
})


//Filters

Vue.filter('to-uppercase',(value)=>{
  return value.toUpperCase();
})

Vue.filter('snippet',(value)=>{
  return value.slice(0,100)+"...";
})


new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
