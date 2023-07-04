<template>
    <div>
        <div class="main">


            <el-page-header content="创建新闻" icon="" title="新闻管理" />
            <el-divider></el-divider>
            <el-form ref="newsFormRef" :model="newsForm" :rules="newsFormRules" label-width="120px" class="demo-ruleForm">
                <el-form-item label="政策名称类别" prop="name">
                    <el-input v-model="newsForm.name" />
                </el-form-item>
                <el-form-item label="政策标题" prop="title">
                    <el-input v-model="newsForm.title" />
                </el-form-item>
                <el-form-item label="类别" prop="type">
                    <el-select v-model="newsForm.type" class="m-2" placeholder="Select" style="width:100%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <!-- <el-form-item
                label="内容"
                prop="content"
            >
                <editor @event="handleChange" />
            </el-form-item> -->
                <el-form-item label="文档地址" prop=" documentOssUrl">
                    <el-upload :class="hideUploadEdit ? 'hide' : ''" :action="baseUrl + '/oss/upload/img'" :multiple="false"
                        :limit="1" list-type="picture-card" :on-success="handleAvatarSuccess"
                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>

                </el-form-item>



                <el-form-item>
                    <el-button type="primary" @click="submitForm()">添加政策</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import Policy from '@/api/policy'
import { ImageUpload } from "@/components/ImageUpload/index.vue";
import { ref, reactive } from "vue";
import editor from "@/components/editor/Editor";
import Upload from "@/components/upload/Upload";
import upload from '@/util/upload'
import { useRouter } from 'vue-router'
const router = useRouter()
const newsFormRef = ref();
const newsForm = reactive({
    title: "",
    name: "",
    documentOssUrl: "",
    type: "资金类",

});
const baseUrl = 'http://116.147.35.115:8888/api';
const hideUploadEdit = ref(false);
const dialogImageUrl = reactive("");
const dialogVisible = ref(false);
const newsFormRules = reactive({
    name: [{ required: true, message: "请输入标题类别", trigger: "blur" }],
    title: [{ required: true, message: "请输入标题", trigger: "blur" }],
    type: [{ required: true, message: "请选择分类", trigger: "blur" }],
    documentOssUrl: [{ required: true, message: "请上传文件", trigger: "blur" }]
});
const handleAvatarSuccess = (res) => {
    if (res.code) {
        hideUploadEdit.value = !hideUploadEdit.value;
        console.log(res);
        newsForm.documentOssUrl = res.data.url;
        console.log(newsForm.documentOssUrl );
    }
}
const handleRemove = (file, fileList) => {
    hideUploadEdit.value = hideUploadEdit.value;
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    // dialogVisible = true
}

//每次editor内容改变的回调
const handleChange = data => {
    // console.log(data)
    newsForm.content = data;
};
//新闻类别
const options = [
    {
        label: "资金类",
        value: "资金类"
    },
    {
        label: "荣誉类",
        value: "荣誉类"
    },

];

const handleUploadChange = (file) => {
    newsForm.cover = URL.createObjectURL(file);
    newsForm.file = file
}

const submitForm = () => {
    newsFormRef.value.validate(async (valid) => {
        if (valid) {
            console.log (newsForm)
         const res= await Policy.policyAdd(newsForm)
            console.log(res)
            
            // console.log(newsForm)
            //后台通信,
            // await upload("/adminapi/news/add", newsForm)
            router.push(`/policyList`)
        }
    })
}
</script>
<style lang="scss" scoped>
.main {
    margin-left: 30px;
    margin-top: 30px;
}

.el-form {
    margin-top: 50px;
}
</style>
