
<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left:10px;">江苏常州经济开发区公共服务平台用户中心</span>
        </div>
        <!-- <el-icon style="margin-right: 20px;"><Search/></el-icon>
    <el-icon style="margin-right: 20px;"><Setting/></el-icon>
    <el-icon style="margin-right: 20px;"><Menu/></el-icon> -->
        <div class="right">
        
        <div class="icon0"><el-icon :size="15"  color="black"> <Grid /></el-icon></div>
        <div class="icon0"><el-icon :size="15"  color="black"> <Setting /></el-icon></div>
            <div class="icon1"> <el-avatar :size="30" :src="avatarUrl" /></div>
            <div class="text1">   <span>{{username}} </span> </div>
            
         <div class="icon1"> <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="black">
                        <user />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown> </div>
           
        </div>
    </el-header>
</template>
<script setup>
import { useStore } from "vuex";
import {computed,ref,onMounted} from 'vue'

import {useRouter} from 'vue-router'
import { Menu ,User,Tools,Grid,Search,Setting } from "@element-plus/icons-vue";
const store = useStore();
const router = useRouter()
const handleCollapsed = () => {
  store.commit("changeCollapsed");
};
const username = ref("");
onMounted(() => {
 
 

  username.value = window.localStorage.getItem("username")
    ? (username.value = window.localStorage.getItem("username"))
    : "";
  console.log(username.value);

  
});
const avatarUrl = computed(
  () =>
    store.state.userInfo.avatar
      ? 'http://localhost:3000'+store.state.userInfo.avatar
      : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`
);

const handleCenter = ()=>{
    router.push("/userweb")
}

const handleLogout = ()=>{
    localStorage.clear();
    localStorage.removeItem("token")
    store.commit("clearUserInfo")
    router.push("/login")
}
</script>

<style lang="scss" scoped>
.el-header{
    background-color: #ffffff;
    color:rgb(0, 0, 0);
    width:100%;
    height: 59px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1px black solid;

}

.left,.right{
    display: flex;
}

.left{
    i{
        margin:auto;
        cursor: pointer;
    }
}
.right{
    flex-direction: row;
    justify-items: flex-end;
    .icon0{
     
        margin-right: 20px;
        height: 50px;
        width: 40px;
        line-height: 55 px;
    }
    .icon1{
        margin-top: 10px;
        margin-right: 20px;
        height: 50px;
        width: 40px;
        line-height: 55 px;
    }
    .text1{
        font-size: 18px;
        // margin-top: 10px;
        line-height: 55px;
        margin-right: 25px;
    }
    // width: 400px;
    .el-dropdown{
        margin:auto;
    }
}
</style>
