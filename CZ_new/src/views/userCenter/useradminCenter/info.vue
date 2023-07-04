<template>
    <div>
       
        <h3>管理员信息</h3>
        <el-divider />
       <div class="main">
        <div class="info">

        <el-form  :model="formInline" class="demo-form-inline">
    <el-form-item label="用户名称:" >
              <el-input v-model="formInline.user" placeholder="用户名称" clearable />
    </el-form-item>
    <el-form-item label="用户昵称:">
              <el-input v-model="formInline.user" placeholder="用户昵称" clearable />
    </el-form-item>
    <el-form-item label="手机号码:">
              <el-input v-model="formInline.user" placeholder="手机号码" clearable />
    </el-form-item>

    <el-form-item label="创建日期:">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
   
  </el-form>
</div>
       </div>
    

    </div>
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})
</script>

<style lang="scss" scoped>

h3{
    font-size:26px;
    margin-top:60px;
    margin-left:60px;

}
.main{
    font-size:16px;
    width:1300px;
    height:700px;
    margin-left:60px;
    margin-top:40px;
    border-radius:5%;
    box-shadow: 0 0 10px rgb(138, 135, 135);
    overflow:hidden;
}
.el-form-item__label {
  font-size: 19px;
}
.el-form-item--default {
    --font-size: 20px;
    // --el-form-label-font-size: var(--font-size);
    // margin-bottom: 18px;
}
.info{
    margin-top:100px;

    margin:100px   auto 0 100px;
    width:600px;
    // text-align:center;
}

</style>