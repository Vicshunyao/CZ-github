<script setup >
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = ( ) => {
  console.log(key, keyPath)
}
</script>

<template>
    <el-header>
    <div class="header-box">
    <div class="nav">
        <a href="/diagnosis">
  <img style="width: 130px;height: 38px;" src="@/assets/product-center/308c14a6-48c5-4f95-a2f7-85f7842881f7.png"/>
</a>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    
  >
  
    <el-sub-menu index="1">
      <template #title>数字化转型诊断</template>
      <el-menu-item index="1-1">离散行业</el-menu-item>
      <el-menu-item index="1-2">流程行业</el-menu-item>
      <el-menu-item index="1-3">生产服务业</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>解决方案</template>
      <el-menu-item index="2-1">覆铜板行业生产管理</el-menu-item>
      <el-menu-item index="2-2">汽车行业只能物流</el-menu-item>
      <el-menu-item index="2-3">CNC加工智能刀具管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>产品</template>
      <el-menu-item index="2-1">覆铜板行业生产管理</el-menu-item>
      <el-menu-item index="2-2">汽车行业只能物流</el-menu-item>
      <el-menu-item index="2-3">CNC加工智能刀具管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>客户案例</template>
      <el-menu-item index="2-1">覆铜板行业生产管理</el-menu-item>
      <el-menu-item index="2-2">汽车行业只能物流</el-menu-item>
      <el-menu-item index="2-3">CNC加工智能刀具管理</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="5">合作咨询</el-menu-item>
    <el-menu-item index="6">云上商城</el-menu-item>
    <el-menu-item index="7">云镝智慧</el-menu-item>
  </el-menu>
</div>
<div class="control-table">
    <el-button>登录</el-button>
    <el-button type="primary">注册</el-button>
</div>
</div>
</el-header>
</template>

<style lang='scss' scoped>
.el-header {
    width: auto;
    height: 60px;
    padding-left: 0;
    padding-right: 0;
}
.header-box{
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: center;
    align-items: center;
}
.nav{
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 60px;
    justify-content:start;
    align-items: center;
}
.el-menu {
    width: 1200px;
    border-bottom: none;
}
.control-table {
justify-content: end;
}
</style>