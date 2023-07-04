<script setup>
import {ArrowRight} from '@element-plus/icons-vue'
</script>

<template>
<el-header class="header1">
       <span class="title">生产制造</span> 
    </el-header>
<el-main class="mainbox">
    <el-row  justify="space-evenly" class="row1">
      <router-link to="/mescloud" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >云MES</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">云MES是联通智造云推出的制造企业生产执行管理系统，通过APP收集与传递工单信息，对从订单下达开始到产品完成的整个产品生产过程进行优化的管理，对工厂发生的实时事件。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
    </el-card>
  </router-link>
  <router-link to="/workorder" style="text-decoration: none;">
      <el-card shadow="hover"> 
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >小工单</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">小工单是联通智造云针对制造业生产管理场景推出的一款轻量化小程序应用，实现生产过程、不良品和外协加工的数字化管理，工人绩效日结；解决生产进度不透明、外协加工难管控、工资核算效率低不准确等问题</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
        
  </el-row>
  
</el-main>
</template>

<style lang='scss' scoped>
.mainbox{
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}
.row1{
    margin-top: 60px;
}
.el-card {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 406px;
    height: 420px;
    
    transition: all .1s;
  }
  .el-card:hover{
    margin-top: -5px;
    border-top: 5px solid #409EFF;
   .button3{
    background-color: #409EFF;
    color: white;
   }
  }
  .button {
 border: none;
 color: white;
 padding: 12px 40px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 transition-duration: 0.1s;
 cursor: pointer;

}
.button3 {
 background-color: white; 
 color: black; 
 border: 1px solid #c1c1c1;
}

// .button3:hover {
//  background-color: #409EFF;
//  color: white;
// }
.header1{
    padding-left: 0;
    padding-right: 0%;
    padding-top: 0;
    width: auto;
    height: 400px;
    background-image: url('@/assets/product-center/4ffdaccf-4753-430a-8853-17c5e23c3e78.png');
    background-size: 100% 400px;
    display: flex;
    justify-content: center;
    align-items:center;
}
@media screen and (max-width: 768px) {
  .header1{
    width: auto;
    height: 200px;
    background-image: url('@/assets/product-center/4ffdaccf-4753-430a-8853-17c5e23c3e78.png');
    background-size: 100% 200px;
    display: flex;
    justify-content: center;
    align-items:center;
  }
}
.title {
    display: flex;
    font-size: 40px;
    font-weight: 900;
    color: #fff;

}
</style>