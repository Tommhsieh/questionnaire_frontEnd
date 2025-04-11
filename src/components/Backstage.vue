<script>
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            surveys: [
                { id: 1, title: "顧客服務滿意度調查", date: "2025-03-01" },
                { id: 2, title: "產品回饋問卷", date: "2025-03-05" },
                { id: 3, title: "市場調查問卷", date: "2025-03-10" }
            ]
        };
    },
    methods: {
        addSurvey() {
            alert("新增問卷功能尚未實作");
        },
        viewSurvey(index) {
            alert(`查看：${this.surveys[index].title}`);
        },
        editSurvey(index) {
            alert(`修改：${this.surveys[index].title}`);
        },
        deleteSurvey(index) {
            alert(`刪除：${this.surveys[index].title}`);
        }
    },
    components: {
        RouterLink
    }
};
</script>

<template>
<div class="container">
    <h2>問卷管理系統（後台）</h2>
    
    <div class="action-section">
        <!-- <button @click="addSurvey">新增問卷</button>
        <button @click="addSurvey">刪除問卷</button> -->
        <input type="text" id="search" placeholder="搜尋問卷">
        <button @click="addSurvey">查詢問卷</button>
    </div>

    <table class="survey-table">
        <thead>
            <tr>
                <th>問卷標題</th>
                <th>建立日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(survey, index) in surveys" :key="survey.id">
                <td>{{ survey.title }}</td>
                <td>{{ survey.date }}</td>
                <td>
                    <button @click="viewSurvey(index)" class="btn blue">查看</button>
                    <button @click="editSurvey(index)" class="btn yellow">修改</button>
                    <button @click="deleteSurvey(index)" class="btn red">刪除</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 900px;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.action-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
}

button {
    padding: 10px 15px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    min-width: 100px;
}

button:hover {
    background-color: #555;
}

.survey-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.survey-table th,
.survey-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

.survey-table th {
    background-color: #f4f4f4;
}

.btn {
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    margin: 0 5px;
}

.btn.blue {
    background-color: #3490dc;
}
.btn.blue:hover {
    background-color: #2779bd;
}

.btn.yellow {
    background-color: #fbbf24;
}
.btn.yellow:hover {
    background-color: #f59e0b;
}

.btn.red {
    background-color: #e3342f;
}
.btn.red:hover {
    background-color: #cc1f1a;
}
#search {
    margin: 0 10px 0 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 40%;
}

@media (max-width: 600px) {
    .action-section {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 80%;
        margin: 5px 0;
    }
}
</style>
