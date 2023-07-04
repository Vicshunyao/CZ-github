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


            <!-- <el-menu-item index="/app01">
                <el-icon>
                    <avatar />
                </el-icon>
                <span>工业互联网解决方案</span>
            </el-menu-item> -->

            <el-sub-menu index="/turn01">
                <template #title>
                    <el-icon>
                        <Platform />
                    </el-icon>
                    <span style="margin-left: 12px;">智改数转</span>
                </template>
                <el-menu-item index="/zgsz/overview_1"><span style="margin-left: 20px;" >数据概览</span></el-menu-item>
                <el-menu-item index="/zgsz/platform_2"><span style="margin-left: 20px;" >平台类</span></el-menu-item>
                <el-menu-item index="/zgsz/storage_3"><span style="margin-left: 20px;" >仓储类</span></el-menu-item>
                <el-menu-item index="/zgsz/energy_4"><span style="margin-left: 20px;" >能源类</span></el-menu-item>
                <el-menu-item index="/zgsz/production_5"><span style="margin-left: 20px;" >生产类</span></el-menu-item>
                <!-- <el-menu-item index="/zgsz/finance_6" @click="jrpt()">金融平台</el-menu-item> -->
            </el-sub-menu>
            <el-menu-item index="/zgsz/finance_6">
                <el-icon><List/></el-icon><span style="margin-left: 12px;" @click="jrpt()">金融平台</span>
            </el-menu-item>

          
        </el-menu>
    </el-aside>
    </div>
</template>
<script setup>
import {HomeFilled,Avatar,UserFilled,MessageBox,Reading,Pointer,TrendCharts,Shop,List,Platform} from '@element-plus/icons-vue'
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
const jrpt =()=>{
    window.open("https://www.cz.i-industry.cn/#/");
}
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

