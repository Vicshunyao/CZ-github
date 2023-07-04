<script setup >
import { RouterView } from 'vue-router';
// import MainBoxHeader from './MainBoxHeader.vue';
// import MainBoxMain from './MainBoxMain.vue';
</script>

<template>
    
<el-container class="mainbox">
    <el-scrollbar height="100vh">
    <RouterView/>
</el-scrollbar>
</el-container>

</template>

<style lang='scss' scoped>
.mainbox{
    height: auto;
    width: auto;
    flex-direction: column;
}
</style>