import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import jwt_decode from 'jwt-decode';
// 新的beforeach
/*
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('user-token');
  
  if (token) {
    try {
      // 解码JWT，假设token是JWT格式
      const decodedToken = jwt_decode(token);
      
      // 获取Token的过期时间（这里假设decodedToken.exp是过期时间的秒数）
      const currentTime = Date.now() / 1000; // 当前时间转换为秒
      
      // 检查Token是否已过期
      if (decodedToken.exp > currentTime) {
        // 未过期，允许访问
        next();
      } else {
        // 已过期，处理逻辑
        console.log('Token已过期');
        // 清除Token
        localStorage.removeItem('user-token');
        // 重定向到登录页面
        next('/login');
      }
    } catch (err) {
      // 解码失败或其它异常，也视为Token无效
      console.error('Token解码失败或无效', err);
      localStorage.removeItem('user-token');
      next('/login');
    }
  } else {
    // 没有Token，重定向到登录页面
    next('/login');
  }
});
*/ 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/picture',
    name: 'Picture',
    component: () => import('../views/PictureView.vue')
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('../views/TextView.vue')
  },
  {
    path: '/poster',
    name: 'Poster',
    component: () => import('../views/PosterView.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/HistoryView.vue'),

    // beforeEnter: async (to, from, next) => {
    //   try {
    //     // 在进入页面前发送POST请求拿到后端的数据
    //     await fetchHistoryData();
    //     // 请求成功，继续导航
    //     next();
    //   } catch (error) {
    //     // 如果请求失败，可以根据情况处理错误，比如重定向到错误页面
    //     console.error('Failed to fetch history data:', error);
    //     next('/error'); // 假设有一个错误页面
    //   }
    // }
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {  
  const token = localStorage.getItem('user-token');  
  
  if (to.path === '/login' || to.path === '/register'|| token) {  
    // 如果要访问的是登录页面或者已经有token了，直接通过  
    next();  
  } else {  
    // 如果没有token并且不是登录页面，重定向到登录页面  
    next('/login');  
  }  
});  
  

export default router
