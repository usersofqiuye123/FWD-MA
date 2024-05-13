import axios from "../utils/request"

axios.post("http://", qs.stringify({
      user_id: "",
      token:"",
      label:"",
      modification:""
    }))
      .then(res => {
        console.log(res.data);
        // 返回重新生成的文字
      })