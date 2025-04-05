<script>

export default {
    data(){
        return{

        }
    },
}
</script>
<template>
    <div class="container">
        <h2>問卷首頁（前台）</h2>
        <div class="filter-section">
        <div class="inputBox">
            <label for="start-date">起始日期：</label>
            <input type="date" id="startDate">
        </div>
        <div class="inputBox">
            <label for="end-date">結束日期：</label>
            <input type="date" id="endDate">
        </div>
        </div>
        <div class="search-section">
        <div class="inputBox">
            <input type="text" id="search" placeholder="搜尋問卷">
            <button @click="filterSurveys">搜尋</button>
        </div>
        </div>
        <ul class="survey-list" id="surveyList">
        <li class="survey-item" data-date="2025-03-01" data-title="顧客服務滿意度調查">
            顧客服務滿意度調查 (2025-03-01)
        </li>
        <li class="survey-item" data-date="2025-03-05" data-title="產品回饋問卷">
            產品回饋問卷 (2025-03-05)
        </li>
        <li class="survey-item" data-date="2025-03-10" data-title="市場調查問卷">
            市場調查問卷 (2025-03-10)
        </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
}

label {
    white-space: nowrap;
    font-size: 14px;
}

.inputBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    width: 100%;
}

.inputBox label {
    margin-right: 10px;
    font-size: 16px;
}

.inputBox input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
}

#search {
    margin: 0 10px 0 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
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

.search-section .inputBox {
    justify-content: center;
    margin-top: 20px;
}

.container {
    max-width: 900px;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.filter-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.filter-section input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
}

.survey-list {
    margin-top: 20px;
    list-style: none;
    padding: 0;
}

.survey-item {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.survey-item span {
    font-size: 14px;
    color: #777;
}

@media (max-width: 600px) {
    .filter-section {
    flex-direction: column;
    align-items: center;
    }

    .filter-section input {
    width: 90%;
    }

    .inputBox {
    flex-direction: column;
    align-items: center;
    }

    #search {
    width: 70%;
    }

    button {
    width: 80%;
    margin-top: 10px;
    }
}

</style>