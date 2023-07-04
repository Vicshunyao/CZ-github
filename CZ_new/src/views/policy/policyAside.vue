<script setup>
import {Plus} from '@element-plus/icons-vue'
</script>

<template>
<el-aside>
<el-menu unique-opened
        active-text-color="#ffd04b"
        background-color="#337ecc"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff" router>
    <el-sub-menu index="1">
          <template #title>
            <el-icon><Plus /></el-icon>
            <span>资金类</span>
          </template>
            <el-menu-item index="/country">国家级</el-menu-item>
            <el-menu-item index="/province">省级</el-menu-item>
            <el-menu-item index="/city">市级</el-menu-item>
            <el-menu-item index="/local">区级</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Plus /></el-icon>
            <span>荣誉类</span>
          </template>
            <el-menu-item index="ry-1">制造业单项冠军</el-menu-item>
            <el-menu-item index="ry-2">专精特新</el-menu-item>
            <el-menu-item index="ry-3">中小企业公共服务示范平台</el-menu-item>
            <el-menu-item index="ry-4">小型微型企业创业创新示范基地</el-menu-item>
            <el-menu-item index="ry-5">企业技术中心</el-menu-item>
            <el-menu-item index="ry-6">省级新技术新产品</el-menu-item>
            <el-menu-item index="ry-7">质量标杆</el-menu-item>
            <el-menu-item index="ry-8">智能制造类</el-menu-item>
            <el-menu-item index="ry-9">绿色制造类</el-menu-item>
            <el-menu-item index="ry-10">工业互联网类</el-menu-item>
            <el-menu-item index="ry-11">首台（套）重大装备</el-menu-item>
            <el-menu-item index="ry-12">信息安全类</el-menu-item>
            <el-menu-item index="ry-13">电子信息和软件服务业类</el-menu-item>
            <el-menu-item index="ry-14">信息消费类项目</el-menu-item>
            <el-menu-item index="ry-15">工业设计中心</el-menu-item>
            <el-menu-item index="ry-16">服务型制造</el-menu-item>
            <el-menu-item index="ry-17">工程研究中心</el-menu-item>
            <el-menu-item index="ry-18">服务业集聚区</el-menu-item>
            <el-menu-item index="ry-19">服务业领军企业</el-menu-item>
            <el-menu-item index="ry-20">两业融合示范企业</el-menu-item>
            <el-menu-item index="ry-21">重点物流企业</el-menu-item>
            <el-menu-item index="ry-22">信用管理示范企业</el-menu-item>
            <el-menu-item index="ry-23">省级产教融合型试点企业</el-menu-item>
        </el-sub-menu>
</el-menu>
</el-aside>
</template>

<style lang='scss' scoped>
.el-aside {
    width: 250px;
}
.el-menu {
    width: 250px;
    max-height: 100vh;
}
.el-menu-item{
  // height: 100vh;
}
</style>