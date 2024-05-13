import instance from "../utils/request"

// 生成照片页的请求，和生成文字大概只会有文件读取的不同

// 创建一个函数用来发送带有图片和字符串参数的POST请求
async function geneTextPOST(imageFile, otherParams) {
  // 创建一个新的FormData对象来封装图片和其他参数
  const formData = new FormData();
  formData.append('image', imageFile, imageFile.name); // 上传图片文件
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

export default geneTextPOST;

/*
<template>
  <div>
    <!-- 文件上传选择器 -->
    <input type="file" ref="fileInput" @change="onFileSelected" accept=".pdf, .doc, .docx, .xls, .xlsx, .md, .epub, .mobi, .txt" />

    <!-- 提交按钮 -->
    <button @click="uploadDocument">上传文件</button>

    <!-- 反馈区域，用于显示上传结果 -->
    <p v-if="uploadedUrl">{{ uploadedUrl }}</p>
  </div>
</template>

<script>
import axios from '@/path/to/your/axios-config.js'; // 引入配置好的axios实例

export default {
  data() {
    return {
      selectedFile: null,
      uploadedUrl: '',
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadDocument() {
      if (!this.selectedFile) {
        alert('请选择一个文件');
        return;
      }

      const formData = new FormData();
      formData.append('document', this.selectedFile);

      try {
        const response = await axios.post('/api/document-upload', formData);
        // 假设后端返回上传成功的文件URL
        if (response.data && response.status === 200) {
          this.uploadedUrl = response.data.url;
        }
      } catch (error) {
        console.error('文件上传失败', error);
        // 可以在此处调用全局错误处理函数
        errorHandle(error.response.status, error.message);
      }
    },
  },
};
</script>

*/ 