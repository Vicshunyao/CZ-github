
<template>

    <el-container>
        <SideMenu/>
        <el-container direction="vertical">
            <TopHeader/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import TopHeader from '../components/policy/TopHeader'
import SideMenu from '../components/policy/SideMenu'
</script>

<style lang="scss" scoped>
.el-main{
    overflow: auto;
    height: calc(100vh - 60px);
}
</style>
