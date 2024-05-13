import instance from "../utils/request"

// 创建一个函数用来发送带有图片和字符串参数的POST请求
async function reGenePicPOST(pic_label, modi_need) {
  try {
    const data = {pic_label, modi_need };
    const response = await instance.post('我的请求地址', data); // 使用 instance 发起 POST 请求

    if (response.status === 200 && response.data) {
      const imageUrl = response.data.imageUrl; // 例如，如果API返回的是图片URL
      return imageUrl
    } 
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
}

export default reGenePicPOST;