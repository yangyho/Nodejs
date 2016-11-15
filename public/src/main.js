import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';


//引入组件
import mianApp from './mianApp.vue';
import firstcomponent from './component/firstcomponent.vue';
import secondcomponent from './component/secondcomponent.vue';
import tree from './component/three.vue';
import four from './component/four.vue';
import five from './component/five.vue';

// 引入初始化样式
require('./assets/css/normalize.css');

//开启debug模式
Vue.config.debug = true;

// 注册
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  // mode: 'history', 
  // base: __dirname,//格式路径#
  routes: [
  	{
      path: '/', 
      component: firstcomponent //默认加载
    },
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/tree',
      component: tree
    },
    {
      path: '/four',
      component: four
    },
    {
      path: '/five',
      component: five
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 mianApp 实例，并且挂载到选择符.$mount() #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(mianApp) 
}).$mount('#app') //将App组件渲染到index.html，id=#app的div里面








// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
