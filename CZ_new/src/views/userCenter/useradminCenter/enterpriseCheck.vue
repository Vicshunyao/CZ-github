<template>
    <div>
        <el-card>
            <el-page-header content="新闻列表" icon="" title="新闻管理" />

            <el-table :data="tableData.slice((query.page - 1) * query.page_size,
                query.page * query.page_size)" style="width: 100%">
                <el-table-column prop="name" label="企业名称" width="180" />
                <el-table-column prop="address" label="企业地址" width="180" />
                <el-table-column prop="contactName" label="联系人" width="180" />
                <el-table-column label="认证情况" prop="type" width="180">
                    <template #default="scope">
                        {{ categoryFormat(scope.row.auditStatus) }}
                    </template>
                </el-table-column>

                <el-table-column label="更新时间">
                    <template #default="scope">
                        {{ formatTime.getTime(scope.row.createdTime) }}
                    </template>
                </el-table-column>
                <el-table-column label="营业证图">
                    <template #default="scope">

                        <img :src="scope.row.businessLicensePath" style="height:30px" />

                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template #default="scope">

                        <el-button circle :icon="Star" @click="getById(scope.row)"></el-button>

                        <el-popconfirm title="你确定要删除吗?" confirmButtonText="确定" cancelButtonText="取消"
                            @confirm="handleDelete(scope.row)">
                            <template #reference>
                                <el-button circle :icon="Delete" type="danger"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!-- <el-pagination
      v-model:currentPage="currentPage"
      :pageSize="pageSize"
      :total="totalData"
      @current-change="handleCurrentChange"
    ></el-pagination> -->
        <el-pagination :total="tableData.length" :current-page="query.page" :page-size="query.page_size"
            :page-sizes="[5, 10, 20, 50, 100]" layout=" total, sizes, prev, pager, next" background
            @current-change="handleCurrentChange" @size-change="handleSizeChange"
            @pagination="getpolicyList"></el-pagination>

        <el-dialog v-model="dialogVisible" title="企业信息详情" width="80%">
            <div>


                <el-divider>
                    <el-icon>
                        <star-filled />
                    </el-icon>
                </el-divider>

                <el-row :gutter="15">
                    <!-- 左侧 -->
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-form :model="FindList" :rules="rules" ref="ruleForm" label-width="120px"
                                class="demo-ruleForm">
                                <el-form-item label="企业编号:" prop="industry">
                                    {{ FindList.id }}
                                </el-form-item>
                                <el-form-item label="企业地址:">
                                    {{ FindList.address }}
                                </el-form-item>

                                <el-form-item label="所属行业:" prop="addressDetailed">
                                    {{ FindList.businessScope }}
                                </el-form-item>
                                <el-form-item label="企业规模:" prop="creditCode">
                                    {{ FindList.registerMoney }}
                                </el-form-item>

                                <el-form-item label="联系人邮箱" prop="contactPhone">
                                    {{ FindList.contactEmail }}
                                </el-form-item>
                                <el-form-item>

                                    <el-button type="primary" @click="CheckInfo()">认证企业</el-button>

                                </el-form-item>
                            </el-form>
                        </div>
                    </el-col>
                    <!-- 右侧 -->
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-form :model="detailCompany" :rules="rules" ref="ruleForm" label-width="120px"
                                class="demo-ruleForm">
                                <el-form-item label="企业名称 :">
                                    {{ FindList.name }}
                                </el-form-item>
                                <el-form-item label="企业创建日期">
                                    {{ FindList.registerDateYear }}
                                </el-form-item>
                                <el-form-item label="联系人姓名" prop=" legalPerson">
                                    {{ FindList.contactName }}
                                </el-form-item>

                                <el-form-item label="统一信用码 :" prop="creditCode">
                                    {{ FindList.creditCode }}
                                </el-form-item>



                                <el-form-item label="营业证图">
                                    <template #default="scope">
                                        <img :src="FindList.businessLicensePath" style="height:80px" />
                                    </template>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-col>
                </el-row>







                <div v-html="previewData.content" class="htmlcontent"></div>
            </div>
        </el-dialog>

    </div>
</template>
<script setup>
import qiye from "@/api/qiye";
import policy from "@/api/policy";
import { ref, onMounted, reactive, computed } from "vue";
import axios from "axios";
import formatTime from "@/util/formatTime";
import { Star, Edit, Delete, StarFilled } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import { ElMessage } from "element-plus";
const router = useRouter()
const tableData = ref([]);
const previewData = ref({});
const newsFormRef = ref();
const hideUploadEdit = ref(false);
const dialogImageUrl = reactive("");
const baseUrl = 'http://116.147.35.115:8888/api';
const listForm = reactive({
    pageNum: "10",
    pageSize: "100",
    name: "",


});
const categoryFormat = auditStatus => {
    const arr = ["待审核", "认证成功", "认证失败"];
    return arr[auditStatus];
};

const FindId = reactive({
    name: ""

})
const FindList = reactive({
})
const checkForm = reactive({
    id: "",
    auditRemark: "",
    auditStatus: 1


});
const CheckInfo = async () => {
    console.log(checkForm)
    const res = await qiye.enterpriseUpadteAudit(checkForm);
    console.log(res);
    ElMessage.success("认证成功")
    dialogVisible.value = false;
    findList();
}
const findList = async () => {
    const res = await qiye.enterpriseList(listForm)
    console.log(res)
    tableData.value = res.data.records

}
const getById = async (item) => {
    FindId.id = item.id;
    checkForm.id = item.id


    dialogVisible.value = true;
    const res = await qiye.enterpriseFindById(FindId);
    console.log(res.data)
    Object.assign(FindList, res.data)

}

const query = reactive({
    page: 1,
    page_size: 10,
});
const newsFormChange = reactive({
    id: "",
    title: "",
    name: "",
    documentOssUrl: "",
    type: "资金类",

});
const handleCurrentChange = (val) => {
    query.page = val;
};
const handleSizeChange = (val) => {
    query.page = 1;
    query.page_size = val;
};
const newsFormRules = reactive({
    name: [{ required: true, message: "请输入标题类别", trigger: "blur" }],
    title: [{ required: true, message: "请输入标题", trigger: "blur" }],
    type: [{ required: true, message: "请选择分类", trigger: "blur" }],
    documentOssUrl: [{ required: true, message: "请上传文件", trigger: "blur" }]
});
const dialogVisible = ref(false);
onMounted(() => {

    findList();
});


const getpolicyList = async () => {
    const res = await policy.policyList(listForm);
    console.log(res.data.records)
    tableData.value = res.data.records;
}
// 上传信息
const handleAvatarSuccess = (res) => {
    if (res.code) {
        hideUploadEdit.value = !hideUploadEdit.value;
        console.log(res);
        newsFormChange.documentOssUrl = res.data.url;
        console.log(newsFormChange.documentOssUrl);
    }
}
const handleRemove = (file, fileList) => {
    hideUploadEdit.value = hideUploadEdit.value;
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    // dialogVisible = true
}

//格式化分类信息
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
//开关回调

const handleSwitchChange = async item => {
    // console.log(item)
    await axios.put(`/adminapi/news/publish`, {
        _id: item._id,
        isPublish: item.isPublish
    });

    await getTableData();
};

//預覽回調
const handlePreview = data => {
    // console.log(data)
    previewData.value = data;
    dialogVisible.value = true;
};

//删除回调


//编辑回调
const handleEdit = (item) => {
    // newsFormChange.title=item.title;
    // newsFormChange.id =item.id;
    // newsFormChange.name =item.name;
    Object.assign(newsFormChange, item)
    console.log(item);
    // console.log(newsFormChange);
    //跳转到/news-manage/editnews/:id
    dialogVisible.value = true;
    // router.push(`/policyChange`)
}
// 政策修改
const submitForm = () => {
    newsFormRef.value.validate(async (valid) => {
        if (valid) {
            console.log(newsFormChange);
            const res = await policy.policyUpdate(newsFormChange);
            console.log(res)

            getpolicyList();
            dialogVisible.value = false;
        }

    })

    //    const res = policy.policyUpdate(newsFormChange);

}
</script>
<style lang="scss" scoped>
.el-table {
    margin-top: 50px;
}

::v-deep .htmlcontent {
    img {
        max-width: 100%;
    }
}
</style>
