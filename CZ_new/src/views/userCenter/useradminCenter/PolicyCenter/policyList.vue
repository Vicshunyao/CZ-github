<template>
    <div>
        <el-card>
            <el-page-header content="新闻列表" icon="" title="新闻管理" />

            <el-table :data="tableData.slice( (query.page - 1) * query.page_size,
                  query.page * query.page_size)" style="width: 100%">
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="name" label="政策标题类别" width="180" />
                <el-table-column label="分类" prop="type" width="180">

                </el-table-column>

                <el-table-column label="更新时间">
                    <template #default="scope">
                        {{ formatTime.getTime(scope.row.createdTime) }}
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template #default="scope">

                        <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>

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
    <el-pagination
      :total="tableData.length"
      :current-page="query.page"
      :page-size="query.page_size"
      :page-sizes="[5, 10, 20, 50, 100]"
      layout=" total, sizes, prev, pager, next"
      background
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      @pagination="getpolicyList"
    ></el-pagination>

        <el-dialog v-model="dialogVisible" title="修改新闻" width="50%">
            <div>


                <el-divider>
                    <el-icon>
                        <star-filled />
                    </el-icon>
                </el-divider>
                <el-form ref="newsFormRef" :model="newsFormChange" :rules="newsFormRules" label-width="120px"
                    class="demo-ruleForm">
                    <!-- <el-form-item label="政策编号" prop="id">
                    <el-input v-model="newsFormChange.id" />
                </el-form-item> -->
                    <el-form-item label="政策名称类别" prop="name">
                        <el-input v-model="newsFormChange.name" />
                    </el-form-item>
                    <el-form-item label="政策标题" prop="title">
                        <el-input v-model="newsFormChange.title" />
                    </el-form-item>
                    <el-form-item label="类别" prop="type">
                        <el-select v-model="newsFormChange.type" class="m-2" placeholder="Select" style="width:100%">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="文档地址" prop=" documentOssUrl">
                        <el-upload :class="hideUploadEdit ? 'hide' : ''" :action="baseUrl + '/oss/upload/img'"
                            :multiple="false" :limit="1" list-type="picture-card" :on-success="handleAvatarSuccess"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>

                    </el-form-item>



                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">修改政策</el-button>
                    </el-form-item>
                </el-form>

                <div v-html="previewData.content" class="htmlcontent"></div>
            </div>
        </el-dialog>

    </div>
</template>
<script setup>
import policy from "@/api/policy";
import { ref, onMounted, reactive, computed } from "vue";
import axios from "axios";
import formatTime from "@/util/formatTime";
import { Star, Edit, Delete, StarFilled } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const tableData = ref([]);
const previewData = ref({});
const newsFormRef = ref();
const hideUploadEdit = ref(false);
const dialogImageUrl = reactive("");
const baseUrl = 'http://116.147.35.115:8888/api';
const listForm = reactive({
    pageNum: "10",
    pageSize: "100"


});
const query= reactive({
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
const handleCurrentChange =(val)=> {
      query.page = val;
    };
    const handleSizeChange=(val)=> {
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

    getpolicyList();
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
const handleDelete = async (item) => {
    // console.log(item)
    await axios.delete(`/adminapi/news/list/${item._id}`)
    await getTableData()
}

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
