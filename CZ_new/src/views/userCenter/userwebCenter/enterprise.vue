<template>
    <div>
        <el-breadcrumb separator="/" style="margin: 20px 30px;">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户中心</a></el-breadcrumb-item>
            <el-breadcrumb-item>企业信息</el-breadcrumb-item>

        </el-breadcrumb>
        <h3>企业详情信息</h3>
        <el-divider />
        <div class="main">
            <div class="info">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content ep-bg-purple">

                            <el-form ref="qiyeFormRef" :rules="qiyeFormRules" :model="form" label-width="180px">
                                <el-form-item label="企业名称：" prop="name">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="统一社会信用码：" prop="creditCode">
                                    <el-input v-model="form.creditCode
                                        " />
                                </el-form-item>
                                <el-form-item label="法人：" prop="contactName">
                                  
                                    <el-input v-model="form.contactName" />
                                </el-form-item>
                                <el-form-item label="注册类型：" prop="type">
                                    <el-input v-model="form.type
                                        " />
                                </el-form-item>
                                <el-form-item label="注册资金：" prop="registerMoney">
                                    <el-input v-model="form.registerMoney
                                        " />
                                </el-form-item>
                                <el-form-item label="认证情况：" >
                                   
                        {{categoryFormat(form.auditStatus)}}
                   
                                   
                                </el-form-item>
                            </el-form>
                        </div>

                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content ep-bg-purple-light">
                            <el-form ref="qiyeFormRef" :rules="qiyeFormRules" :model="form" label-width="180px">
                                <el-form-item label="注册地址：" prop="address">
                                    <el-input v-model="form.address" />
                                </el-form-item>
                                <el-form-item label="所属街道：" prop="street">
                                    <el-input v-model="form.street
                                        " />
                                </el-form-item>
                                <el-form-item label="注册日期：" prop="registerDateYear">
                                    <el-input v-model="form.registerDateYear" />
                                </el-form-item>
                                <el-form-item label="经营范围：" prop="businessScope">
                                    <el-input v-model="form.businessScope
                                        " />
                                </el-form-item>
                                <el-form-item label="营业执照：" prop="businessLicensePath">
                                    <img :src="form.businessLicensePath" style="width: 300px;height: 100px;" v-show="form.businessLicensePath"/>
                                    <el-upload :class="hideUploadEdit ? 'hide' : ''" :action="baseUrl + '/oss/upload/img'"
                                        :multiple="false" :limit="1" list-type="picture-card"
                                        :on-success="handleAvatarSuccess" :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                </el-form-item>
                            </el-form>


                        </div>
                    </el-col>
                </el-row>
             

       
                <div v-if="auditStatus=== 0 ">
                    <el-button style="width:200px;text-align:center;margin-left:300px;height:30px;"
                    @click="qiyeRest">重置</el-button><el-button style="width:200px;text-align:center;margin-left:30px;height:30px;" type="success"
                        @click="qiyeUPdate">认证</el-button></div>
                        <div v-else>
                    <el-button style="width:200px;text-align:center;margin-left:300px;height:30px;"
                    @click="qiyeRest">重置</el-button> <el-button style="width:200px;text-align:center;margin-left:30px;height:30px;" type="primary"
                        @click="qiyeUPdate">修改</el-button></div>

            </div>
        </div>
    </div>
</template>

<script setup>
import qiye from '@/api/qiye'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { reactive, onMounted } from 'vue'
const form = reactive({

    name: "",
    address: "",
    creditCode: "",
    contactName: "",
    type: "",
    registerMoney: "",
    
    street: "",
    registerDateYear: "",
    businessScope: "",
    businessLicensePath: ""
})
const categoryFormat =auditStatus => {
  const arr = ["待审核", "认证成功", "认证失败"];
  return arr[auditStatus ];
};
const qiyeFormRef = ref();
const hideUploadEdit = ref(false);
const dialogImageUrl = reactive("");
const dialogVisible = ref(false);
const qiyeFormRules = reactive({
    name: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
    address: [{ required: true, message: "请输入企业地址", trigger: "blur" }],
    type: [{ required: true, message: "请输入企业类型", trigger: "blur" }],
    contactName: [{ required: true, message: "请输入联系人姓名", trigger: "blur" }],
    registerMoney: [{ required: true, message: "请输入注册资金", trigger: "blur" }],
    creditCode: [{ required: true, message: "请输入统一信用码", trigger: "blur" }],
    street: [{ required: true, message: "请输入街道", trigger: "blur" }],
    registerDateYear: [{ required: true, message: "请输入注册年份", trigger: "blur" }],
    businessScope: [{ required: true, message: "请输入经营范围", trigger: "blur" }],
    businessLicensePath: [{ required: true, message: "请上传营业执照", trigger: "blur" }],
});
const handleAvatarSuccess = (res) => {
    if (res.code) {
        hideUploadEdit.value = !hideUploadEdit.value;
        console.log(res);
        form.businessLicensePath = res.data.url;
        console.log(form.businessLicensePath);
        console.log(form)
    }
}
const handleRemove = (file, fileList) => {
    hideUploadEdit.value = hideUploadEdit.value;
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    // dialogVisible = true
}
const FindForm = reactive({
    creditCode: ""
});
const qiyeRest = () => {
    form.value = ['']
}
const auditStatus =ref("")

const qiyeUPdate =  () => {

    qiyeFormRef.value.validate(async (valid) => {
        if (valid) {
            const res = await qiye.enterpriseUpadte(form);
            console.log(res);
            ElMessage.success("修改成功")
        }
        else{
            ElMessage.error("请完整填写信息")
        }
    })
   
    
}
const imageUrl = ref('')
const baseUrl = 'http://116.147.35.115:8888/api';
const qiyeInfo = async () => {
    const res = await qiye.enterpriseInfo(FindForm);
    console.log(res.data)
    Object.assign(form, res.data)
    // form.name = res.data.name;
    // console.log(form)

}
onMounted(() => {


    FindForm.creditCode = window.localStorage.getItem("creditCode")
        ? (FindForm.creditCode = window.localStorage.getItem("creditCode"))
        : "";
        auditStatus.value = window.localStorage.getItem("auditStatus")
        ? (auditStatus.value = window.localStorage.getItem("auditStatus"))
        : "";
        console.log(auditStatus.value)
    qiyeInfo();

});

const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
</script>

<style lang="scss" scoped>
.main {
    font-size: 16px;
    width: 1300px;
    height: 700px;
    margin-left: 60px;
    margin-top: 40px;
    border-radius: 5%;
    box-shadow: 0 0 10px rgb(138, 135, 135);
    overflow: hidden;
}

.el-form-item--default {
    --font-size: 18px;
    font-weight: 800px;
    // --el-form-label-font-size: var(--font-size);
    // margin-bottom: 18px;
}

.info {


    margin: 60px auto 0 100px;
    width: 900px;
    // text-align:center;
}

h3 {
    font-size: 26px;
    margin-top: 60px;
    margin-left: 60px;

}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>