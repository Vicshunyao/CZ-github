<template>
    <div class="all">
    
    <el-aside :width="$store.state.isCollapsed?'64px':'240px'">
        <div v-show="!$store.state.isCollapsed">
    <img src="../../assets/image/header/logo1.png" class="logo" />
    </div>
        <el-menu :collapse="$store.state.isCollapsed"
        :collapse-transition="false"
        :router="true"
        :default-active="route.fullPath">
            <el-menu-item index="/">
                <el-icon><home-filled /></el-icon>
                <span style="margin-left: 12px;">首页</span>
            </el-menu-item>
            <el-menu-item index="/yysd">
                <el-icon>
                    <avatar />
                </el-icon>
                <span style="margin-left: 12px;">工业互联网解决方案</span>
            </el-menu-item>
            <el-menu-item index="/app02" >
                <el-icon><Shop /></el-icon>
                <span style="margin-left: 12px;" @click="Riying()">标识解析</span>
            </el-menu-item>
            <el-menu-item index="/app03" @click="goYiJiangTai()" >
                <el-icon >
                 <TrendCharts />
                </el-icon>
                <span style="margin-left: 12px;">亿匠台</span>
            </el-menu-item>
            <el-menu-item index="/app04">
                <el-icon><List /></el-icon>
                <span style="margin-left: 12px;">其他应用</span>
            </el-menu-item>

            <!-- <el-sub-menu index="/user-manage" v-admin>
                <template #title>
                    <el-icon>
                        <user-filled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
                <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <message-box />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/addnews">创建新闻</el-menu-item>
                <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
            </el-sub-menu> -->

             <!-- <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
            </el-sub-menu> -->
        </el-menu>
    </el-aside>
    </div>
</template>
<script setup>
import {HomeFilled,Avatar,UserFilled,MessageBox,Reading,Pointer,TrendCharts,Shop,List} from '@element-plus/icons-vue'
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
const goYiJiangTai = async ()=>{
    const token = window.localStorage.getItem("token");
      if (token) {
        window.open("http://122.115.36.103/account/ssoLogin?token=" + token, "_blank");
      } else {
        window.open("http://122.115.36.103/account/ssoLogin", "_blank");
      }
   
};
const Riying = async ()=>{
    const creditCode = window.localStorage.getItem("creditCode");
    if (creditCode) {
        window.open("https://www.riyingcloud.com?creditCode=" + creditCode, "_blank");
        // console.log(this.creditCode);
      } else {
        window.open("https://www.riyingcloud.com", "_blank");
      }
      
   
};

</script>

<style lang="scss" scoped>
.all{
    display: flex;
    flex-direction: column;
}
.logo{
    margin-top: 20px;
    width: 238px;
    height: 120px;
   
    border-bottom: 0.1px groove black;
}
.el-aside {
  height: 100vh;

  .el-menu{
      height: clac(100vh -10px);
      overflow: hidden;
  }
}
</style>

