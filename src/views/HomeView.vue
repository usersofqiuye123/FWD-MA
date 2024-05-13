<template>
  <div div class="container">
    
    <div class="shortcut">
      <div class="wrapper">
        <div class="fl">
          <ul>
            <li> 智保创享欢迎您！</li>
            <li>
              <a @click="goToLoginPage"> 请登录 </a>
            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li>
              <a class="style_red" @click="goToHistoryPage"> 历史记录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 顶部快捷导航 -->

    <div class="main" >
      <div class="f" @click="goToAITextPage" >
        <h1>AI文案</h1>
      </div>
      <div class="f" @click="goToAIImagePage">
        <h1>AI图像</h1>
      </div>
      <div class="f" @click="goToAIPosterPage">
        <h1>AI海报</h1>
      </div>
    </div>
    <!-- 功能选择区结束 -->
    <div class="show">
        
        <div class="card-column column-0">
            <div class="card card-color-0">
                <div class="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
                <!-- <h1>Hey now, get started</h1> -->
            </div>
            <div class="card card-color-2">
                <div class="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
                <!-- <h1>Hey now, you are an excellent insurance agent</h1> -->
            </div>
        </div>
        <div class="card-column column-1">
            <div class="card card-color-1">
                <div class="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
                <!-- <h1>The little assistant will solve your problem, come on</h1> -->
            </div>
            <div class="card card-color-3">
                <div class="border"></div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
                <!-- <h1>Get the show on, get paid</h1> -->
           
        </div>
    </div>

    <div id="cover" class="cover"></div>

    <div id="open-content" class="open-content">
        <a href="#" id="close-content" class="close-content"><span class="x-1"></span><span class="x-2"></span></a>
        <img id="open-content-image" src="" />
        <div class="text" id="open-content-text"></div>
    </div>
</div>

<div class="ve" style="background-color:blanchedalmond;">

</div>
    
    <footer>
      <p>Posted by: FWD</p>
      <p><time datetime="2024-05-01"></time></p>
    </footer>
    <!--底部导航-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  methods: {

    goToLoginPage() {
      this.$router.push({ name: 'Login' }); 
    },
    goToHistoryPage() {
      this.$router.push({ name: 'History' }); 
    },  
    goToAIPosterPage() {
      this.$router.push({ name: 'Poster' });
    },
    goToAITextPage() {
      this.$router.push({ name: 'Text' });
    },
    goToAIImagePage() {
        this.$router.push({ name: 'Picture' });
      }

  }

}
</script>



<style scoped>

  /* 全局样式 */

    .container {
        overflow-y: auto;
        overflow-x: auto;
    }
    ::-webkit-scrollbar {
        width: 10px; /* 滚动条宽度 */
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        background: #183028; /* 滑块颜色 */
        border-radius: 10px; /* 滑块圆角 */
    }
    /* 滚动条轨道 */
    ::-webkit-scrollbar-track {
        background: #8b9793; /* 轨道颜色 */
        border-radius: 10px; /* 轨道圆角 */
    }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }

    .f h1 {
        margin: 0; /* 移除标题的默认边距 */
        position: relative;
        text-transform: uppercase;
        letter-spacing: 6px;
        font-size: 50px;
        font-weight: 900;
        text-decoration: none;
        color: #183028; /* 标题颜色 */
        display: inline-block;
        background-size: 120% 100%;
        animation: 0.8s shake infinite alternate;
    }

  @keyframes shake {
    0% {
      transform: skewX(-15deg);
    }

    5% {
      transform: skewX(15deg);
    }

    10% {
      transform: skewX(-15deg);
    }

    15% {
      transform: skewX(15deg);
    }

    20% {
      transform: skewX(0deg);
    }

    100% {
      transform: skewX(0deg);
    }
  }
  /* 版心 */
  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  /* 版心 */
  .style_red {
    color: #c81623;
  }
    .shortcut {
        height: 100px;
        width: 99.3%;
        position: fixed;
        top: 0;
        background-color: #fae4d3;
        line-height: 100px;
    }

    .shortcut li {
      float: left;
    }


    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f3bb90; /* 假设背景色 */
    }

  /* 容器样式 */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* 视口高度 */
        text-align: center;
        background-color: #f3bb90;
    }

  /* 功能选择区样式 */
  .main {
    position: fixed;
    display: flex;
    justify-content: space-around; /* 子元素水平间距平均分布 */
    max-width: 1200px; /* 假设最大宽度 */
    margin: 0 auto; /* 水平居中 */
  }

  /* 功能块样式 */
    .f {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px; /* 假设宽度 */
        height: 400px; /* 假设高度 */
        background-color: #e87722; /* 背景色 */
        border-radius: 5px; /* 圆角 */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影 */
        cursor: pointer; /* 鼠标悬停时的小手图标 */
        transition: all 0.3s ease; /* 过渡效果 */
    }

    /* 功能块鼠标悬停样式 */
    .f:hover {
      background-color: #f0f0f0; /* 鼠标悬停时的背景色 */
      transform: scale(1.05); /* 鼠标悬停时稍微放大 */
    }

    /* 功能块内的标题样式 */

    .card-column {
        width: 50%;
        float: left;
        padding: 4%;
        box-sizing: border-box;
    }

    .column-1 {
        padding-top: 100px;
    }
    .card h1 {
        position: relative;
        padding: 80px 0px 150px 10px;
        width: 90%;
    }

  /* 如果需要添加更多样式，可以在这里继续添加 */
    footer {
        background-color: #fae4d3;
        padding: 40px;
        margin-bottom:15px;
        text-align: center;
        position: fixed; /* 固定定位 */
        bottom: 0; /* 紧贴视口底部 */
        width: 99.1%; /* 宽度为100% */
    }  
 

</style>

