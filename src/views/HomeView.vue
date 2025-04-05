<script>
import {RouterLink,RouterView} from 'vue-router'
import Header from './Header.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        RouterLink,
        RouterView,
        Header,
    }
}
</script>

<template>
    <RouterLink to="Backstage" >後台</RouterLink>
    <RouterView/>
</template>

<style lang="scss" scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    text-align: center;
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