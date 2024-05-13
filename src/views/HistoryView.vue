<template>
  <div class="container">
    <nav class="navbar">
      <ul>
        <li><a @click="goToHomePage">主页</a></li>
        <li>退出登录</li>
        <li></li>

      </ul>
    </nav>
    <div class="user-info">
      <img src="../components/img/touxiang.jpg" alt="User Avatar" width="50" height="50">
      <h2>{{ userName }}</h2>
      
    </div>
    <div class="history-container">
      <table class="history-table">
        <thead>
          <tr>
            <th>时间</th>
            <th>文件</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in historyRecords" :key="record.id">
            <td>{{ record.time }}</td>
            <td>{{ record.file }}</td>
            <td>
              <button @click="deleteRecord(record.id)">
                <i class="fa fa-trash" style="font-size: 22px; color: #8b9793 "></i><!-- 删除图标 -->
              </button>
              <button @click="editRecord(record)">
                <i class="fa fa-edit" style="font-size: 22px; color: #8b9793"></i> <!-- 编辑图标 -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'History',
    data() {
      // 尝试从localStorage中获取用户名  
      const storedUsername = localStorage.getItem('username');
      // 如果localStorage中有用户名，则使用它；否则使用默认值（例如 "John Doe"）  
      const userName = storedUsername || "John Doe";

      return {
        userName: userName,
        historyRecords: [
          { id: 1, time: "2022-01-01 10:00:00", file: "product-image.jpg" },
          { id: 2, time: "2022-01-02 11:30:00", file: "product-doc.pdf" },
          { id: 3, time: "2022-01-03 14:45:00", file: "product-poster.jpg" },
          { id: 3, time: "2022-01-03 10:15:00", file: "sales-report.pdf" },
          { id: 4, time: "2022-01-04 12:45:00", file: "user-manual.pdf" },
          { id: 5, time: "2022-01-05 09:30:00", file: "project-plan.pdf" },
          { id: 6, time: "2022-01-06 14:15:00", file: "meeting-notes.pdf" },
          { id: 7, time: "2022-01-07 11:00:00", file: "annual-report.pdf" },
          { id: 8, time: "2022-01-08 16:30:00", file: "product-catalog.pdf" },
          { id: 9, time: "2022-01-09 13:45:00", file: "training-material.pdf" },
          { id: 10, time: "2022-01-10 08:15:00", file: "handbook.pdf" },
          { id: 11, time: "2022-01-11 15:00:00", file: "workflow-diagram.pdf" },
          { id: 12, time: "2022-01-12 17:30:00", file: "case-study.pdf" },
          { id: 13, time: "2022-01-13 10:45:00", file: "whitepaper.pdf" },
          { id: 14, time: "2022-01-14 12:15:00", file: "industry-report.pdf" },
          { id: 15, time: "2022-01-15 09:45:00", file: "research-paper.pdf" },
          { id: 16, time: "2022-01-16 14:30:00", file: "promotion-kit.pdf" },
          { id: 17, time: "2022-01-17 11:15:00", file: "brochure.pdf" },
          { id: 18, time: "2022-01-18 16:00:00", file: "product-update.pdf" },
          { id: 19, time: "2022-01-19 13:15:00", file: "security-guidelines.pdf" },
          { id: 20, time: "2022-01-20 08:45:00", file: "training-schedule.pdf" },
          { id: 21, time: "2022-01-21 15:30:00", file: "contract-draft.pdf" },
          { id: 22, time: "2022-01-22 18:00:00", file: "presentation-slides.pdf" } 
        ]
      };
    },
    methods: {
      goToHomePage() {
        this.$router.push({ name: 'Homepage' });
      },
     
      openUploadModal() {
        // TODO: Implement the upload modal functionality
      },
      openEditModal(username) {
        // 打开编辑用户信息的模态框的逻辑  
      },
      deleteRecord(id) {
        // 从历史记录中删除记录的逻辑  
        this.historyRecords = this.historyRecords.filter(record => record.id !== id);
      },
      editRecord(record) {
        // 编辑记录的逻辑  
        // 可以打开编辑模态框并传入记录数据  
      },  
    },
  }
</script>
<style scoped>
    .container {
        background-color: #fae4d3;
        padding: 20px;
    }

    .navbar {
        background-color: #e87722;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 30px;
    }

    .navbar ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

      .navbar ul li {
        display: inline-block;
        margin-right: 10px;
      }

  .user-info {
    text-align: center;
    margin-top: 60px;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .history-container {
    max-height: 762px; /* 设置最大高度，超出部分将显示滚动条 */
    overflow-y: auto; /* 启用垂直滚动条 */
  } 

  .history-table {
    margin-top: 20px;
    width: 100%;
  }

    .history-table th,
    .history-table td {
      padding: 10px;
      text-align: left;
    }

    .history-table th {
        background-color: #f3bb90;
    }

    .history-table tr:nth-child(even) {
        background-color: #f3bb90;
    }

    .history-table tr:hover {
        background-color: #d1d6d4;
        cursor: pointer;
    }
    button {
        margin-right: 10px; /* 设置右边距，根据需要调整 */
        background-color: white; /* 初始背景色为白色，如果需要的话 */
    }

        /* 最后一个按钮不需要右边距 */
        button:last-child {
            margin-right: 0;
        }

</style>

