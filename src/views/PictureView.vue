<template>
  <div>
    <div id="root">
      <div class="nav">
        <div class="nav-left">
          <img src="../components/img/touxiang.jpg" alt="User Avatar" width="50" height="50">
          <h4> Welcome to the AI-generated image feature!</h4>
        </div>
        <div class="nav-right">
          <ul>
            <li><a @click="goToHomePage">主页</a></li>
            <li><a @click="goToHistory">历史记录</a></li>
          </ul>
        </div>
      </div>

      <div class="fixed-header">
        <div class="container">
          <div class="option-container">
              <div class="option">

                  <!-- 上传文件 -->
                  <div class="file-upload">
                    <div class="file-upload">
                      <button class="file-upload-btn" type="button" @click="triggerFileUpload">Add Image</button>
                      <input class="file-upload-input"
                             type="file"
                             @change="handleFileUpload"
                             accept="image/*"
                             ref="fileInput"
                             style="display: none;" />

                      <!-- 移除拖拽相关的div和内部元素 -->

                      <div class="file-upload-content" v-if="imageSrc">
                          <img class="file-upload-image" :src="imageSrc" alt="your image" />
                          <div class="image-title-wrap">
                              <button type="button" @click="removeImage" class="remove-image">Remove </button>
                          </div>
                      </div>
                  </div>
                    
                  </div>
                  
                  <!-- 节日选择 -->
                  <div style="font-weight: bold; font-size: 17px; color: #183028;">
                      <label for="holiday-picker">
                          选择节日:
                          <i class="fa fa-calculator"></i>
                      </label>

                      <select id="holiday-picker" v-model="selectedHoliday">
                          <option value="christmas">圣诞节</option>
                          <option value="spring-festival">春节</option>
                          <option value="easter">复活节</option>
                          <!-- 添加更多节日选项... -->
                      </select>
                  </div>
                  <!-- 地区选择 -->
                  <div style="font-weight: bold; font-size: 17px; color: #183028;">
                      <label for="country-select">
                          选择国家:
                          <i class="fa fa-paper-plane"></i>
                      </label>
                      <select v-model="selectedCountry" id="country-select" class="country-select">
                          <option v-for="(country, index) in countries" :key="index" :value="country.value">
                              {{ country.label }}
                          </option>
                      </select>

                  </div>
                  <div class="design-requirements">
                      <!-- 目标对象 -->
                      <div style="font-weight: bold; font-size: 17px; color: #183028;">
                          <label for="target-object">
                              目标对象:
                              <i class="fa fa-child"></i>
                          </label>
                          <select id="target-object" v-model="targetObject">
                              <option value="children">儿童及其家庭</option>
                              <option value="students">学生及家长</option>
                              <option value="young-adults">年轻成年人</option>
                              <option value="families">家庭</option>
                              <option value="seniors">老年人</option>
                              <option value="entrepreneurs">创业者/企业家</option>
                              <option value="freelancers">自由职业者</option>
                              <option value="small-business">小型企业主</option>
                              <option value="high-risk-jobs">高危职业工作者</option>
                              <!-- 根据需要添加更多选项... -->
                          </select>
                      </div>

                      <!-- 风格 -->
                      <div style="font-weight: bold; font-size: 17px; color: #183028;">
                          <label for="style">
                              风格:
                              <i class="fa fa-heart"></i>
                          </label>
                          <select id="style" v-model="style">
                              <option value="现代">现代</option>
                              <option value="复古">复古</option>
                              <option value="极简">极简</option>
                              <option value="科技">科技</option>
                              <!-- 添加更多风格选项... -->
                          </select>
                      </div>

                      <!-- 其他需求-->
                      <div style="font-weight: bold; font-size: 17px; color: #183028;">
                          <label for="other-requirements">
                              其他需求:
                              <i class="fa fa-lightbulb-o"></i>
                          </label>
                          <textarea id="other-requirements" v-model="otherRequirements" placeholder="请输入其他具体的设计需求或建议..."></textarea>
                      </div>

                      <!-- 文件名-->
                      <div style="font-weight: bold; font-size: 17px; color: #183028;">
                          <label for="filename">
                              文件名:
                              <i class="fa fa-snowflake-o"></i>
                          </label>
                          <input type="text" id="filename" v-model="filename" placeholder="请输入文件名...">
                      </div>

                      <div class="mod_text">
                          <label for="length">长度:</label>
                          <input type="number" id="length" min="1" step="1" v-model="length" placeholder="输入长度">
                          <label for="width">宽度:</label>
                          <input type="number" id="width" min="1" step="1" v-model="width" placeholder="输入宽度">
                          <button class="submit-btn"  @click="onSubmit">提交</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="product-container">
              <div class="product">
                  <!-- 显示生成的图片 -->
                  <img :src= "responseImageUrl" alt="Generated Image" class="product-image">
                </div>

              <div class="mod">
                  <div class="mod_container">
                      <textarea class="mod_text1" placeholder="在此输入修改意见..."></textarea>
                      <button class="modify-button">修改</button>
                  </div>
                  <div class="mod_button">
                      <i class="fa fa-thumbs-o-up" style="font-size: 22px; color: #e87722 "></i>
                      <i class="fa fa-thumbs-down" style="font-size: 22px; color: #e87722 "></i>
                      <a href="path/to/your/file.extension" download class="download-btn">
                          <i class="fa fa-download" style="font-size: 22px; color: #e87722; margin-left: 10px; "></i>
                      </a>
                  </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
        countries: [
            { value: 'US', label: 'United States' },
            { value: 'GB', label: 'United Kingdom' },
            { value: 'FR', label: 'France' },
            { value: 'DE', label: 'Germany' },
            // 添加更多的国家...
        ],
        imageSrc: null, // 存储上传的图片的URL    
        imageFile:null,
        selectedHoliday:'',        
        selectedCountry: '',
        targetObject: '',
        style: '',
        otherRequirements: '',
        length: null,
        width: null,
        filename:'', 

        responseImageUrl: '/img/default/backgroud.jpg'
                
        };
    },

    methods: {
        goToHomePage() {
        this.$router.push({ name: 'Home' });
        },
        goToHistory() {
        this.$router.push({ name: 'History' });
        },
        triggerFileUpload() {
        this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {        
            this.imageFile = file;
            const reader = new FileReader();
            reader.onload = (e) => {
            this.imageSrc = e.target.result;
            console.log(this.imageSrc)
            };
            reader.readAsDataURL(file);
        }
        },

        removeImage() {
        this.imageSrc = null; // 移除图片
        this.imageFile = null;
        },

        async onSubmit() {
            const otherParams = {
            selectedHoliday: this.selectedHoliday,
            selectedCountry: this.selectedCountry,
            targetObject: this.targetObject,
            style: this.style,
            otherRequirements: this.otherRequirements,
            length: this.length,
            width: this.width,
            filename: this.filename
            };

            
            try {
                const imageUrl = await genePicPOST(this.imageFile, otherParams);
                this.responseImageUrl = imageUrl; // 这里假设API返回的是可以直接使用的图片URL
            } catch (error) {
                console.error('Error uploading image:', error);
            }
            
        }
        
    }

}
  
</script>


<style scoped>
    #root {
        display: flex;
        justify-content: space-between;
        padding: 0px;
        /* 注意：这里可能需要添加margin-top来避开固定的导航栏 */
        margin-top: 100px; /* 假设导航栏高度为100px */
        background-color: #d1d6d4;
    }

    .nav {
        height: 100px;
        width: 100%;
        background-color: #e87722;
        position: fixed;
        top: 0;
        display: flex; /* 添加flex布局 */
        justify-content: space-between; /* 让子元素在nav中均匀分布 */
        align-items: center; /* 垂直居中 */
        line-height: normal; /* 移除line-height，因为我们使用flex来垂直居中 */
        padding: 0 10px; /* 添加一些内边距来避免内容与边缘过近 */
        box-sizing: border-box; /* 确保padding不会增加元素的总宽度 */
    }

    .nav-left {
        display: flex;
        align-items: center;
    }

    .nav-right {
        display: flex;
        align-items: center;
    }

    .nav ul {
        list-style-type: none;
        margin-right: 50px;
        padding: 0;
        /* 移除overflow: hidden; 因为我们不需要隐藏溢出内容 */
        display: flex; /* 使用flex布局来水平排列li元素 */
    }

    .nav li {
        /* 移除float: left; 因为我们使用flex布局 */
        flex: 0 0 auto; /* 防止li元素在有多余空间时增长 */
    }

        .nav li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            background-color: #f3bb90; /* 这里直接设置li a的背景色 */
        }

            .nav li a:hover {
                background-color: #111;
            }

    .fixed-header {
        position: fixed;
        top: 104px;
        left: 0;
        width: 100%;
        z-index: 999; /* 确保在其他内容之上 */
        display: flex; /* 也可以是其他布局方式，如 grid */
        align-items: center; /* 垂直居中 */
        justify-content: space-between; /* 水平两端对齐 */
        padding: 10px; /* 内边距 */
        background-color: #fff; /* 可选，设置背景色 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可选，添加阴影 */
    }

    .container {
        width: 100%; /* 根据需要设置 */
        height: 838px;
        display: flex; /* 容器内部使用 flex 布局 */
    }

    .option-container, .product-container {
        flex: 1; /* 分配相等的空间给两边的容器 */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; /* 在垂直方向上居中内容 */
        border-style: solid;
        border-width: 3px;
        border-color: #e87722;
        /* height 可以根据需要设置，但在这里可能不需要 */
        padding: 10px; /* 内容内边距 */
        overflow-y: auto;

    }

    .option {
        /* 表单的样式 */
        padding: 20px;
    }

    .product {
        /* 图片区域的样式 */
        text-align: center;
        padding: 20px;
    }

        .product img {
            max-width: 100%;
            height: auto;
        }




    .file-upload {
        background-color: #ffffff;
        width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    .file-upload-btn {
        width: 100%;
        margin: 0;
        color: #e87722;
        background: #f3bb90;
        border: none;
        padding: 10px;
        border-radius: 4px;
        border-bottom: 1px solid #e87722;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
    }

        .file-upload-btn:hover {
            background: #e87722;
            color: #ffffff;
            transition: all .2s ease;
            cursor: pointer;
        }

        .file-upload-btn:active {
            border: 0;
            transition: all .2s ease;
        }


    .file-upload-content {
        display: flex;
        text-align: center;
    }

    .file-upload-input {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        outline: none;
        opacity: 0;
        cursor: pointer;
    }

    h3 {
        color: #e87722;
    }

    .image-upload-wrap {
        margin-top: 20px;
        border: 4px dashed #f3bb90;
        position: relative;
    }

        .image-dropping,
        .image-upload-wrap:hover {
            background-color: #e87722;
            border: 4px dashed #ffffff;
        }

    .image-title-wrap {
        padding: 0 15px 15px 15px;
        color: #e87722;
    }

   

    .file-upload-image {
        max-height: 120px;
        max-width: 120px;
        margin: auto;
        padding: 20px;
    }

    .remove-image {
        width: 200px;
        margin: 0;
        color: #e87722;
        background: #cd4535;
        border: none;
        padding: 10px;
        border-radius: 4px;
        border-bottom: 4px solid #f3bb90;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
    }

        .remove-image:hover {
            background: #e87722;
            color: #ffffff;
            transition: all .2s ease;
            cursor: pointer;
        }

        .remove-image:active {
            border: 0;
            transition: all .2s ease;
        }

    .date-picker-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* 或者 center，取决于您想要的布局 */
        width: 200px; /* 扩大容器宽度 */
        margin: 10px 0; /* 添加一些外边距 */
    }

    .label {
        display: block;
        margin-bottom: 5px;
        font-size: 1.25rem; /* 增大字体大小 */
        font-weight: bold; /* 可以选择加粗字体 */
        color: #e87722
    }

    .submit-btn {
        margin-left: 30px; /* 设置右边距为10像素，你可以根据需要调整这个值 */
    }

    .holiday-picker {
        display: flex;
        flex-direction: column;
        align-items: center; /* 或者 center，取决于您想要的布局 */
        width: 200px; /* 扩大容器宽度 */
        margin: 10px 0; /* 添加一些外边距 */
        padding: 20px 239px;
        border: 1px solid #183028;
        border-radius: 4px;
    }

    .country-select {
        width: 200px; /* 设置选择框的宽度 */
        padding: 5px; /* 设置内边距 */
        font-size: 1rem; /* 设置字体大小 */
        margin: 10px 0;
    }

    .design-requirements {
        width: 100%; /* 根据需要设置宽度 */
    }

        .design-requirements > div {
            margin-bottom: 10px; /* 文本框之间的间距 */
        }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #183028;
    }

    textarea {
        height: 100px;
        resize: vertical;
    }


    select {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #183028;
        /* 为了兼容性，可能需要 vendor prefixes 或使用第三方库（如 normalize.css）来改善跨浏览器一致性 */
        appearance: none; /* 移除默认样式，部分浏览器 */
        -webkit-appearance: none; /* Chrome, Safari, Opera */
        -moz-appearance: none; /* Firefox */
    }

  .product-container {
    position: relative; /* 为了使右下角的按钮能够定位 */
  }

  .product {
    /* 图片展示区样式 */
     position: relative; /* 使绝对定位的子元素相对于此元素定位 */  
    text-align: center;
    border: 2px dashed green; /* 绿色虚线边框 */
    height: 536px;
    width: 100%;
  }

  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mod {
    /* 选择长度宽度和提交按钮的样式 */
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1; /* 占据剩余空间 */
    margin-top: 30px;
  }

  .mod_text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }

  .submit-btn {
    margin-left: 10px;
  }

  .mod {
    /* 右下角的点赞或不喜欢按钮 */
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .like-btn, .dislike-btn {
    padding: 5px 10px;
    border: 0.2px dashed green;
    background-color: #eee;
    cursor: pointer;
    margin:2px;
  }

    .like-btn:hover, .dislike-btn:hover {
      background-color: #ddd;
    }

    .mod_container {
        display: flex;
        align-items: center; /* 垂直居中，如果需要的话 */
        margin-bottom: 10px; /* 为了示例中的可读性，添加一些底部间距 */
    }

    .mod_text1 {
        width: 200px; /* 示例宽度，可以根据需要调整 */
        height: 50px; /* 示例高度，可以根据需要调整 */
        padding: 10px; /* 添加一些内边距，使文本更易于阅读 */
        border: 1px solid #183028; /* 添加边框，使文本框更明显 */
        border-radius: 4px; /* 添加圆角 */
        resize: none; /* 禁止文本框调整大小，如果需要的话 */
    }  
</style>

