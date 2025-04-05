<script>
import {RouterLink} from 'vue-router'

export default {
    data() {
        return {
    
        };
    },
    methods: {
    },
    components:{
        RouterLink
    }
    };
    </script>

<template>
<div class="container mx-auto p-5">
    <h2 class="text-2xl font-bold mb-5">問卷管理系統</h2>
    <button @click="addSurvey" class="bg-green-500 text-white px-4 py-2 rounded mb-3">新增問卷</button>
    <button @click="addSurvey" class="bg-green-500 text-white px-4 py-2 rounded mb-3">刪除問卷</button>
    <button @click="addSurvey" class="bg-green-500 text-white px-4 py-2 rounded mb-3">查詢問卷</button>
    <RouterLink to="/">前台</RouterLink>
    <table class="w-full border-collapse border border-gray-300">
    <thead>
        <tr class="bg-gray-100">
        <th class="border p-2">問卷標題</th>
        <th class="border p-2">建立日期</th>
        <th class="border p-2">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(survey, index) in surveys" :key="survey.id" class="text-center">
        <td class="border p-2">{{ survey.title }}</td>
        <td class="border p-2">{{ survey.date }}</td>
        <td class="border p-2">
            <button @click="viewSurvey(index)" class="bg-blue-500 text-white px-2 py-1 rounded mr-2">查看</button>
            <button @click="editSurvey(index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">修改</button>
            <button @click="deleteSurvey(index)" class="bg-red-500 text-white px-2 py-1 rounded">刪除</button>
        </td>
        </tr>
    </tbody>
    </table>
</div>
</template>

<style lang="scss" scoped>
    table {
    width: 100%;
    border-collapse: collapse;
    }
    th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    }
    th {
    background-color: #f4f4f4;
    }
</style>
