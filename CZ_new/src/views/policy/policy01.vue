<script setup >
import MainHeader from './policyHeader.vue'
import MainAside from './policyAside.vue'

</script>

<template>
<div class="common-layout">
    <el-container class="main-layout">
      <MainHeader/>
    <el-container style="background-color: #eee;"><br/></el-container>
      <el-container class="aside-main">
        <MainAside/>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<style lang='scss' scoped>
.main-layout {
    flex-direction: column;
}
.aside-main {
    flex-direction: row;
}
</style>