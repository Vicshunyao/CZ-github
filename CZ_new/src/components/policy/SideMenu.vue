
<template>
    <div class="all">
    <div v-show="!$store.state.isCollapsed">
    <img src="../../assets/image/header/logo1.png" class="logo" />
    </div>
    <el-aside :width="$store.state.isCollapsed?'64px':'240px'">

        <el-menu :collapse="$store.state.isCollapsed"
        :collapse-transition="false"
        :router="true"
        :default-active="route.fullPath">
            <el-menu-item index="/">
                <el-icon><home-filled /></el-icon>
                <span style="margin-left: 12px;">首页</span>
            </el-menu-item>
            <el-menu-item index="/policy01">
                <el-icon><List/></el-icon><span style="margin-left: 12px;">政策汇编</span>
            </el-menu-item>
            <el-menu-item index="/Request">
                <el-icon><Edit/></el-icon><span style="margin-left: 12px;">政策申报</span>
            </el-menu-item>
            <el-menu-item index="/policy02" @click="xglj()">
                <el-icon><Link/></el-icon><span style="margin-left: 12px;">相关链接</span>
            </el-menu-item>
           
          
        </el-menu>
    </el-aside>
    </div>
</template>
<script setup>
import {HomeFilled,Avatar,UserFilled,MessageBox,Reading,Pointer,List,Edit,Link} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
import {useStore } from 'vuex'
const route = useRoute()
// console.log()
const store = useStore()
const vAdmin = {
    mounted(el){
        // console.log(el)
        if(store.state.userInfo.role!==1){
            el.parentNode.removeChild(el)
        }
    }
}
const xglj=()=>{
    window.open("http://jkq.changzhou.gov.cn/")
}
</script>

<style lang="scss" scoped>
.all{
    display: flex;
    flex-direction: column;
}
.logo{
    margin-top: 20px;
    width: 200px;
    height: 100px;
}
.el-aside {
  height: 100vh;

  .el-menu{
      height: 100vh;
  }
}
</style>

