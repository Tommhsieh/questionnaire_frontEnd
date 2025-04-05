<script>
import {RouterLink,RouterView} from 'vue-router'
export default{
    data(){
        return{
            
        }
    },
    components:{
        RouterLink,
        RouterView
    }
}

</script>

<template>
    <RouterLink to="/Backstage" class="nav-link">後台 </RouterLink>
    <RouterLink to="/Frontstage" class="nav-link">前台 </RouterLink>
</template>

<style scoped>
    .header {
    background-color: #333;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    }

    .nav-link {
    color: black;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    }

    .nav-link:hover {
    background-color: #555;
    color: white;
    }
</style>