import instance from "../utils/request"

// 生成照片页的请求，和生成文字大概只会有文件读取的不同

// 创建一个函数用来发送带有图片和字符串参数的POST请求
async function genePicPOST(imageFile, otherParams) {
  // 创建一个新的FormData对象来封装图片和其他参数
  const formData = new FormData();
/*!!!! add 思考一下如果是多个文件，该 */
  // 图片文件, 如果是
  formData.append('image', imageFile, imageFile.name); 
  // 添加其他字符串参数
  Object.entries(otherParams).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    // 使用配置好的Axios实例发送POST请求
    const response = await instance.post('我的请求地址', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 必须明确指定此内容类型以适应文件上传
      },
    });

    // 假设服务器返回的是图片数据或者图片URL
    if (response.status === 200 && response.data) {
      const imageUrl = response.data.imageUrl; // 例如，如果API返回的是图片URL
      return imageUrl
    }

  } catch (error) {
    // 处理错误，如调用errorHandle函数
    const { status, data } = error.response || {};
    errorHandle(status, error.message);
  }
}

export default genePicPOST;

/*

<!-- view.vue -->
<template>
  <div>
    <!-- 表单用于收集用户输入及选择图片 -->
    <form @submit.prevent="handleSubmit">
      <!-- 其他字符串输入字段 -->
      <input type="text" v-model="textParam1" placeholder="Text Parameter 1" />
      <!-- 图片文件输入控件 -->
      <input type="file" ref="imageInput" @change="handleImageChange" accept="image/*" />

      <!-- 提交按钮 -->
      <button type="submit">Upload Image & Parameters</button>
    </form>

    <!-- 渲染接收到的图片 -->
    <img :src="receivedImageUrl" v-if="receivedImageUrl" alt="Received Image" />
  </div>
</template>

<script>
import { uploadImageWithParams } from './api'; // 引入你的API函数

export default {
  data() {
    return {
      textParam1: '',
      receivedImageUrl: null,
      selectedImageFile: null,
    };
  },
  methods: {
    handleImageChange(event) {
      this.selectedImageFile = event.target.files[0];
    },
    async handleSubmit() {
      if (this.selectedImageFile) {
        try {
          const imageUrl = await uploadImageWithParams(this.selectedImageFile, { textParam1: this.textParam1 });
          this.receivedImageUrl = imageUrl; // 这里假设API返回的是可以直接使用的图片URL
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else {
        alert('Please select an image to upload.');
      }
    },
  },
};
</script>
*/ 