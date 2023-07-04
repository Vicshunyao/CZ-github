<template>
    <div>
       
        <h3>账号设置</h3>
        <el-divider />
       <div class="main">
        <div class="info">

        <el-form  :model="formInline" class="demo-form-inline" label-width="120px">
            <el-row :gutter="20">
    <el-col :span="18">  <el-form-item label="手机号码:" >
              <el-input v-model="formInline.user" placeholder="手机号码" clearable />
    </el-form-item></el-col>
    <!-- <el-col :span="6"> <el-link>修改</el-link></el-col> -->
  </el-row>
  
   
    
        <el-row :gutter="20">
    <el-col :span="18">  <el-form-item label="密码:" >
              <el-input v-model="formInline.password" placeholder="密码"  />
    </el-form-item></el-col>
    <el-col :span="6"> <el-link @click="dialogVisible = true">修改</el-link></el-col>
  </el-row>
  
   
  </el-form>
</div>
       </div>
       <el-dialog
    v-model="dialogVisible"
    title="  密码修改"
    width="30%"
    :before-close="handleClose"
  >
  <el-form :model="form" label-width="120px">
    <el-form-item label="新密码:">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="确认新密码:">
      <el-input v-model="form.password_repeat" />
    </el-form-item>
    <el-form-item >
      <el-button type="primary" style="width:200px" @click="changePassword">修改</el-button>
    </el-form-item>
    </el-form>
  </el-dialog>

    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ref ,onMounted} from 'vue'
import { ElMessageBox } from 'element-plus'
const username = ref("");
onMounted(() => {
 
 

  username.value = window.localStorage.getItem("username")
    ? (username.value = window.localStorage.getItem("username"))
    : "";
  console.log(username.value);
  formInline.user=username.value
  
});
const dialogVisible = ref(false)

const handleClose = () => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
        dialogVisible.value = false
    })
    .catch(() => {
      // catch error
    })
}
const form =reactive({
    password:"",
    password_repeat:""
})
const changePassword =()=>{
    ElMessageBox.confirm('确认修改密码?')
    .then(() => {
        dialogVisible.value = false
    })
    .catch(() => {
      // catch error
    })
}
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
    --font-size: 16px;
    // --el-form-label-font-size: var(--font-size);
    // margin-bottom: 18px;
}
.info{
    // margin-top:100px;

    margin:100px   auto 0 100px;
    width:600px;
    // text-align:center;
}

</style>