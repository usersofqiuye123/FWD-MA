import instance from "../utils/request"
// 登录页的请求

// 把检验过的登录页面数据打包进来
async function tokenPOST(user_id, password)  {
  try {
    const data = { user_id, password }; // 将登录凭证放入对象中，instance会自动打包
    const response = await instance.post('https://', data); // 测试用的'postman-echo.com/post'

    if (response.status === 200) {
      const token = response.data.token; // 假设服务器返回的数据结构包含一个 token 字段
      return token;
    } else {
      throw new Error('Login failed with status: ' + response.status);
    }
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

export default tokenPOST;



/*
<template>
  <form @submit.prevent="handleSubmit">
    <!-- 输入用户名和密码的input框 -->
    <button type="submit">登录</button>
  </form>
</template>

<script>
import tokenPOST from '@/path/to/login.js'; // 根据实际情况调整路径
export default {
  name: 'LoginView',
  methods: {
    async handleSubmit() {
      const userId = this.userId; // 输入框绑定的值
      const password = this.password; 
      try {
        const token = await tokenPOST(userId, password);
        if (token) {
          console.log('登录成功');
          //跳转页面
        }
      } catch (error) {
        console.error('登录失败：', error);
        // 显示错误提示等
      }
    },
  },
};
</script> */