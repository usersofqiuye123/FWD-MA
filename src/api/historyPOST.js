import axios from "../utils/request"

axios.post("http://", qs.stringify({
      user_id: "",
      token:"",
      label:""
    }))
      .then(res => {
        console.log(res.data);
        // 返回一个表单
      })