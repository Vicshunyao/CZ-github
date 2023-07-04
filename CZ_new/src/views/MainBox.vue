
<template>

    <el-container>
    <div class="side">  <SideMenu/></div>
       
        <el-container direction="vertical">
            <TopHeader/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import TopHeader from '../components/mainbox/TopHeader'
import SideMenu from '../components/mainbox/SideMenu'
</script>

<style lang="scss" scoped>
.side{
    // width: 200px; /* 宽度根据实际情况进行定义 */
  background-color: #ffffff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* 设置右侧阴影 */
}

.el-main{
    padding: 0 1px ;
    margin: 0;
    overflow: auto;
    height: calc(100vh - 60px);
}
</style>
