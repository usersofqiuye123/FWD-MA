<template>
  <div class="container">
    <div class="main">
      <!-- 整个注册盒子 -->
      <div class="loginbox">
        <!-- 左侧的注册盒子 -->
        <div class="loginbox-in">
          
          <div class="userbox">
            <span class="iconfont">&#xe817;</span>
            <input class="user" id="user" v-model="name" placeholder="用户名">
          </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">&#xe775;</span>
            <input class="pwd" id="password" type="password" v-model="pwd" placeholder="密码">
          </div>
          <br>
          <div class="log-box">
            <div class="log-box-text"></div>
            <button type="primary" class="login_btn" @click="login">Login</button>
          </div>

          <br>
          <div class="warn"></div>
          <button type="primary" class="register_btn" @click="register">若无账号请点击注册</button>
          
        </div>

        <!-- 右侧的注册盒子 -->
        <div class="background">
          <div class="title">Welcome to InsureGen</div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",

  data(){
    return{
      name:'',
      pwd:''
    }
  },

  methods: {
    register() { this.$router.push("Register") },

    async login() {  
      const user_id = this.user; // 输入框绑定的值
      const password = this.password; 

      var usernameRegex = /^[A-Za-z0-9_]{1,9}$/; 
      var pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
      // 密码验证正则表达式，包含数字、小写和大写字母，至少8位 
  /**!!! check 正则的正确性：只能输入数字、大小写、小于8？*/         
      if (!usernameRegex.test(user_id) && !pwdRegex.test(password)) {
        alert('请输入有效的用户名');
        return;
      }
      
      try {
        // 包装data里面的数据，然后把数据包丢给接口，instance会stringify
        const token = await tokenPOST(user_id, password);
        if (token) {
        // 更新本地用户名和token
          localStorage.setItem('user-id', user_id); // 存储获取到的 id 到本地存储
          localStorage.setItem('user-token', token); // 存储获取到的 token 到本地存储
          console.log('登录成功');
          this.$router.push('/');  
          //跳转页面
        }
      } catch (error) {
        console.error('登录失败：', error);
        // 显示错误提示等
      }
/*    // 模拟的token，测试router  
      const myToken = 'mock-user-token'; 
      
      // 存储token到localStorage  
      localStorage.setItem('user-token', myToken);  

      // 跳转到首页或其他页面  
      this.$router.push('/');   */
    }  
  }  
}</script>



<style scoped>
  body {
background-color:red;
  }

    .loginbox {
        display: flex;
        position: absolute;
        width: 800px;
        height: 400px;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 #e87722;
    }

    .loginbox-in {
        background-color: #f3bb90;
        width: 240px;
    }

   .userbox {
     margin-top: 120px;
     height: 30px;
     width: 230px;
     display: flex;
     margin-left: 25px;
   }

   .pwdbox {
     height: 30px;
     width: 225px;
     display: flex;
     margin-left: 25px;
   }

   .background {
     width: 570px;
     background-image: url('../components/img/logo.png');
     background-size: cover;
     font-family: sans-serif;
   }

    .title {
        margin-top: 219px;
        font-weight: bold;
        font-size: 30px;
        color: #183028;
    }

     .title:hover {
       font-size: 21px;
       transition: all 0.4s ease-in-out;
       cursor: pointer;
     }

   .uesr-text {
     position: left;
   }

    input {
        outline-style: none;
        border: 0;
        border-bottom: 1px solid #e87722;
        background-color: transparent;
        height: 20px;
        font-family: sans-serif;
        font-size: 15px;
        color: #e87722;
        font-weight: bold;
    }
     /* input::-webkit-input-placeholder{
     color:#E9E9E9;
  } */
        input:focus {
            border-bottom: 2px solid #e87722;
            background-color: transparent;
            transition: all 0.2s ease-in;
            font-family: sans-serif;
            font-size: 15px;
            color: #e87722;
            font-weight: bold;
        }



        input:-webkit-autofill {
            /* 修改默认背景框的颜色 */
            box-shadow: 0 0 0px 1000px #f3bb90 inset !important;
            /* 修改默认字体的颜色 */
            -webkit-text-fill-color: #e87722;
        }

       input:-webkit-autofill::first-line {
         /* 修改默认字体的大小 */
         font-size: 15px;
         /* 修改默认字体的样式 */
         font-weight: bold;
       }

    .log-box {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        width: 190px;
        margin-left: 30px;
        color: #f3bb90;
        margin-top: -5px;
        align-items: center;
    }

    .log-box-text {
        color: #f3bb90;
        font-size: 12px;
        text-decoration: underline;
    }

    .login_btn {
        background-color: #e87722; 
        border: none;
        color: #FAFAFA;
        padding: 5px 22px;
        text-align: center;
        text-decoration: none;
        font-size: 13px;
        border-radius: 20px;
        outline: none;
    }

        .login_btn:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            cursor: pointer;
            background-color: #f3bb90;
            transition: all 0.2s ease-in;
        }

   .warn {
     margin-top: 60px;
     /* margin-right:120px; */
     margin-left: -120px;
     margin-bottom: 5px;
     font-weight: bold;
     font-size: 17px;
   }

    .register_btn {
        background-color: transparent; /* Green */
        border: none;
        text-decoration: none;
        font-size: 12px;
        /* border-radius: 20px;   */
        color: #e87722;
        font-size: 12px;
        text-decoration: underline;
        display: flex;
        margin-left: 25px;
        outline: none;
    }

     .register_btn:hover {
       font-weight: bold;
       cursor: pointer;
     }

   @font-face {
     font-family: "iconfont";
     src: url('../components/font/iconfont.eot');
     src: url('../components/font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
     url('../components/font/iconfont.woff2') format('woff2'), url('../components/font/iconfont.woff') format('woff'), url('../components/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
     url('../components/font/iconfont.svg#iconfont') format('svg');
   }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 22px;
        color: #e87722;
        margin-right: 10px;
        margin-top: 3px;
    }

   .icon-key:before {
     content: "\e775";
   }

   .icon-account:before {
     content: "\e817";
   }
</style>
