<template>
    <div class="app-container">
        <div class="new">
            <h3>企业认证审批中心</h3>
            <el-divider></el-divider>
            <!-- <el-button @click="getenterpriseList()">测试</el-button> -->
            <el-table :data="enterpriseList" @selection-change="handleSelectionChange" style="width: 100%">
                <el-table-column type="selection" width="55" align="center" />
                <!-- <el-table-column label="用户编号" width="55" align="center" prop="userId" /> -->
                <el-table-column label="公司名称" align="center" prop="industry" />
                <el-table-column label="公司地址" align="center" prop="address" />
                <!-- <el-table-column label="企业规模" align="center" prop="mass" /> -->
                <el-table-column label="联系方式" align="center" prop="contactPhone" />
                <el-table-column label="法人" align="center" prop="legalPerson" />
                <el-table-column label="所处街道" align="center" prop="street" />
                <!-- <el-table-column label="固定电话" align="center" prop="fixedTelephone" /> -->
                <!-- <el-table-column label="社会信用码" align="center" prop="creditCode" /> -->
                <el-table-column label="认证状态" align="center" prop="authRemark" />
                <el-table-column label="营业证图" align="center" prop="licenseImgUrl">
                    <template #default="{ row }">
                        <img :src="row.addressDetailed" style="height:30px" />
                    </template>
                </el-table-column>
                <!-- <el-table-column label="公司网址" align="center" prop="websiteUrl" /> -->
                <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                    <template slot-scope="scope" #default="{ scope, row }">
                        <el-button size="mini" type="text" icon="el-icon-edit" @click="getById(scope.row)">查看详情</el-button>
                        <el-button size="mini" type="text" icon="el-icon-edit"
                            @click="handleUpdate(scope.row)">修改</el-button>

                        <!-- <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.row)"
                  v-hasPermi="['company:company:remove']"
                  >删除</el-button
                > -->
                    </template>
                </el-table-column>
            </el-table>

            <!-- 查看入住企业信息对话框 -->
            <el-dialog :title="title" :visible.sync="open" width="90%" append-to-body>
                <div>
                    <el-row :gutter="15">
                        <!-- 左侧 -->
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-form :model="detailCompany" :rules="rules" ref="ruleForm" label-width="120px"
                                    class="demo-ruleForm">
                                    <el-form-item label="企业编号:" prop="industry">
                                        {{ detailEnterprise.userId }}
                                    </el-form-item>
                                    <el-form-item label="企业地址:">
                                        {{ detailEnterprise.address }}
                                    </el-form-item>

                                    <el-form-item label="所属行业:" prop="addressDetailed">
                                        {{ detailEnterprise.businessLicensePath }}
                                    </el-form-item>
                                    <el-form-item label="企业规模:" prop="creditCode">
                                        {{ detailEnterprise.mass }}
                                    </el-form-item>
                                    <el-form-item label="联系人姓名" prop=" legalPerson">
                                        {{ detailEnterprise.contactName }}
                                    </el-form-item>
                                    <el-form-item label="联系人邮箱" prop="contactPhone">
                                        {{ detailEnterprise.contactEmail }}
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                        <!-- 右侧 -->
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-form :model="detailCompany" :rules="rules" ref="ruleForm" label-width="120px"
                                    class="demo-ruleForm">
                                    <el-form-item label="企业名称 :" prop="industry">
                                        {{ detailEnterprise.industry }}
                                    </el-form-item>
                                    <el-form-item label="企业创建日期">
                                        {{ detailEnterprise.auditUserName }}
                                    </el-form-item>

                                    <el-form-item label="企业税务码:" prop="addressDetailed">
                                        {{ detailEnterprise.contactAddress }}
                                    </el-form-item>
                                    <el-form-item label="统一信用码 :" prop="creditCode">
                                        {{ detailEnterprise.creditCode }}
                                    </el-form-item>
                                    <el-form-item label="法人代表" prop=" legalPerson">
                                        {{ detailEnterprise.legalPerson }}
                                    </el-form-item>
                                    <el-form-item label="联系人手机号" prop="contactPhone">
                                        {{ detailEnterprise.contactPhone }}
                                    </el-form-item>
                                    <el-form-item label="企业固定电话" prop="fixedTelephone">
                                        {{ detailEnterprise.fixedTelephone }}
                                    </el-form-item>
                                    <el-form-item label="营业证图">
                                        <template slot-scope="scope">
                                            <!-- <img
                          :src="detailEnterprise.addressDetailed"
                          width="70px"
                          height="30px"
                        /> -->
                                        </template>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-form ref="form" :model="updatastatus" label-width="80px">
                    <!-- <el-form-item label="认证评价">
          <el-select v-model=" updatastatus.authRemark" placeholder="请选择认证评价">
            <el-option label="认证成功" value="认证成功"></el-option>
            <el-option label="认证失败" value="认证失败"></el-option>
          </el-select>
        </el-form-item>
              <el-form-item label="认证评价" prop="remark">
                <el-input v-model=" updatastatus.authRemark" type="textarea" placeholder="请输入内容" />
              </el-form-item> -->
                </el-form>
                <el-button size="mini" type="text" icon="el-icon-s-check" @click="handleCheck">认证</el-button>
                <!-- <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm">确 定</el-button>
              <el-button @click="cancel">取 消</el-button>
            </div> -->
            </el-dialog>

            <!-- 修改入住企业信息对话框 -->
            <el-dialog :title="title" :visible.sync="secondopen" width="90%" append-to-body>
                <div>
                    <el-row :gutter="15">
                        <el-col :span="10">
                            <div class="grid-content bg-purple">
                                <el-form :model="upadata" :rules="rules" ref="ruleForm" label-width="140px"
                                    class="demo-ruleForm">
                                    <el-form-item label="企业编号:" prop="userId">
                                        <el-input v-model="upadata.userId"></el-input>
                                    </el-form-item>

                                    <!-- <el-form-item label="创建账号 :"> {{ renzheng.userId }} </el-form-item> -->

                                    <el-form-item label="企业地址:" prop="address">
                                        <el-input v-model="upadata.address"></el-input>
                                    </el-form-item>
                                    <el-form-item label="所属行业:" prop="region">
                                        <el-input type="textarea" v-model="upadata.businessLicensePath"></el-input>
                                    </el-form-item>
                                    <el-form-item label="企业规模 :" prop="mass">
                                        <el-input v-model="upadata.mass"></el-input>
                                    </el-form-item>
                                    <el-form-item label="联系人姓名" prop="contactName">
                                        <el-input v-model="upadata.contactName"></el-input>
                                    </el-form-item>
                                    <el-form-item label="联系人邮箱" prop="contactEmail">
                                        <el-input v-model="upadata.contactEmail"></el-input>
                                    </el-form-item>

                                    <el-form-item label="所属街镇乡道:" prop="street">
                                        <el-input type="textarea" v-model="upadata.street"></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple" style="width: 150px"></div>
                        </el-col>
                        <!-- 右侧 -->
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-form :model="upadata" :rules="rules" ref="ruleForm" label-width="120px"
                                    class="demo-ruleForm">
                                    <el-form-item label="企业名称 :" prop="industry">
                                        <el-input v-model="upadata.industry"></el-input>
                                    </el-form-item>
                                    <el-form-item label="企业创建日期">
                                        <el-input v-model="upadata.auditUserName"></el-input>
                                    </el-form-item>

                                    <el-form-item label="企业税务码:" prop="addressDetailed">
                                        <el-input v-model="upadata.contactAddress"></el-input>
                                    </el-form-item>
                                    <el-form-item label="统一信用码 :" prop="creditCode">
                                        <el-input v-model="upadata.creditCode"></el-input>
                                    </el-form-item>
                                    <el-form-item label="法人代表" prop=" legalPerson">
                                        <el-input v-model="upadata.legalPerson"></el-input>
                                    </el-form-item>
                                    <el-form-item label="联系人手机号" prop="contactPhone">
                                        <el-input v-model="upadata.contactPhone"></el-input>
                                    </el-form-item>
                                    <el-form-item label="企业固定电话" prop="fixedTelephone">
                                        <el-input v-model="upadata.fixedTelephone"></el-input>
                                    </el-form-item>
                                    <el-form-item label="注册类型 :">
                                        <el-input v-model="upadata.auditRemark"></el-input>
                                    </el-form-item>
                                    <!-- <el-form-item label="营业证图">
                      <imageUpload v-model="upadata.addressDetailed" />
                    </el-form-item> -->
                                </el-form>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog> -->

                <div style="text-align: center; width: 1000px">
                    <el-button size="large" style="text-align: center; width: 100px" @click="handleConcel">取消</el-button>

                    <el-button size="large" style="text-align: center; width: 100px" type="primary"
                        @click="subUpdate">修改认证</el-button>
                </div>

                <!-- <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm">确 定</el-button>
              <el-button @click="cancel">取 消</el-button>
            </div> -->
            </el-dialog>
        </div>
    </div>
</template>
  
<script>
import qiye from "@/api/qiye";
import ImageUpload from "@/components/ImageUpload/index.vue";
import {
    listCompany,
    getCompany,
    delCompany,
    addCompany,
    updateCompany,
    exportCompany,
    listEnterprise,
    getEnterpriseById,
    updateEnterprise,
} from "@/api/enterprise";

export default {
    name: "enterprise",
    components: {
        ImageUpload,
    },

    // //////////////////////////////////////
    data() {
        return {
            // 遮罩层
            loading: true,
            // 选中数组
            ids: [],
            // 非单个禁用
            single: true,
            // 非多个禁用
            multiple: true,
            // 显示搜索条件
            showSearch: true,
            // 总条数
            total: 0,
            // 入住企业信息表格数据
            companyList: [],
            // 弹出层标题
            title: "",
            // 是否显示弹出层
            open: false,
            // 是否显示第二个弹出层
            secondopen: false,
            // 删除标志字典
            delFlagOptions: [],
            // 查询参数
            enterpriseList: [],
            // 编号查询

            enterpriseId: "",
            // 详细信息
            detailEnterprise: [],
            // 显示信息
            detailCompany: {
                userId: "",
                address: "",
                auditUserName: "",
                addressDetailed: "",
                industry: "",
                creditCode: "",
                mass: "",
                contactName: "",
                contactAddress: "",
                contactEmail: "",
                legalPerson: "",
                fixedTelephone: "",
                businessLicensePath: "",
                street: "",
                auditData: "",
                auditRemark: "",
                auditStatus: "",
                authRemark: "",
            },
            queryParams: {
                pageSize: null,
                userId: null,
                industry: null,
                address: null,
                authRemark: null,
            },
            // 认证修改
            updatastatus: {
                userId: "",
                address: "",
                auditUserName: "",
                addressDetailed: "",
                industry: "",
                creditCode: "",
                mass: "",
                contactName: "",
                contactAddress: "",
                contactEmail: "",
                legalPerson: "",
                fixedTelephone: "",
                businessLicensePath: "",
                street: "",
                auditData: "",
                auditRemark: "",

                authRemark: "认证成功",
                auditStatus: "1",
            },
            // 信息修改
            upadata: {},
            // 表单参数
            form: {},
            // 表单校验

            rules: {
                contactName: [
                    { required: true, message: "请输入联系人姓名", trigger: "blur" },
                    { min: 1, max: 10, message: "长度在 1到 10个字符", trigger: "blur" },
                ],
                // region: [{ required: true, message: "请选择所属行业", trigger: "blur" }],
                userId: [{ required: true, message: "请输入企业编号", trigger: "blur" }],
                industry: [{ required: true, message: "请输入企业名称", trigger: "blur" }],
                legalPerson: [{ required: true, message: "请输入法人代表", trigger: "blur" }],
                createdDate: [{ required: true, message: "请输入创建时间", trigger: "blur" }],
                address: [{ required: true, message: "请输入企业地址", trigger: "blur" }],
                creditCode: [{ required: true, message: "请输入信用代码", trigger: "blur" }],
                // addressDetailed: [
                //   { required: true, message: "请输入企业详情地址", trigger: "blur" },
                // ],
                mass: [{ required: true, message: "请输入企业规模", trigger: "blur" }],
                contactEmail: [{ required: true, message: "请输入联系人邮箱", trigger: "blur" }],
                contactPhone: [
                    { required: true, message: "请输入联系人电话", trigger: "blur" },
                    { min: 6, max: 18, message: "长度在 6-11 个字符", trigger: "blur" },
                ],
                fixedTelephone: [{ required: true, message: "请输入固定电话", trigger: "blur" }],
                street: [{ required: true, message: "请输入街道地址", trigger: "blur" }],
                // zhizhao: [{ required: true, message: "请上传营业执照", trigger: "blur" }],

                resource: [{ required: true, message: "请选择活动资源", trigger: "blur" }],
                desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
            },

            currentRow: null,
        };
    },
    // /////////////////////////////////////////////////////

    created() {
        // /////////////////////////////
        this.getenterpriseList();
        // ////////////////////////////////
    },
    methods: {
        getList() {
            // this.loading = true;
            listCompany(this.queryParams).then((response) => {
                this.companyList = response.rows;
                this.total = response.total;
                this.loading = false;
                console.log(response.rows);
                console.log(response);
            });
        },
        // 企业数据信息查询
        getenterpriseList() {
            this.loading = true;
            listEnterprise(this.queryParams).then((response) => {
                this.enterpriseList = response.data;

                // this.companyList = response.rows;
                // this.total = response.total;
                this.loading = false;
                // console.log(response.data);
                // console.log(response.data);
                console.log(response.data[0].userId);
                // console.log(this.enterpriseList.industry)
            });
        },
        // 根据用户编号查询用户详细信息
        getById(row) {
            // console.log(row.userId);
            const enterpriseId = row.userId || this.ids;
            console.log(enterpriseId);
            getEnterpriseById(enterpriseId).then((response) => {
                this.updatastatus.userId = response.data.userId;
                this.detailEnterprise = response.data;
                console.log(response);
                this.open = true;
            });
        },
        /** 搜索按钮操作 */
        handleQuery() {
            this.queryParams.pageNum = 1;
            this.getenterpriseList();
        },
        /** 重置按钮操作 */
        resetQuery() {
            this.resetForm("queryForm");
            this.handleQuery();
        },
        // 多选框选中数据
        handleSelectionChange(selection) {
            this.ids = selection.map((item) => item.userId);

            this.single = selection.length !== 1;
            this.multiple = !selection.length;
            // console.log(this.ids)
        },
        // 修改按钮
        handleUpdate(row) {
            // this.reset();
            const enterpriseId = row.userId || this.ids;
            console.log(enterpriseId);
            getEnterpriseById(enterpriseId).then((response) => {
                // this.updatastatus.userId=response.data.userId;
                // this.detailEnterprise=response.data;
                this.upadata = response.data;
                console.log(response.data);
                this.secondopen = true;
                this.title = "修改认证企业信息";
            });
        },
        // 提交按钮
        subUpdate() {
            this.$refs["ruleForm"].validate((valid) => {
                updateEnterprise(this.upadata).then((response) => {
                    // this.msgSuccess("认证成功");
                    this.$confirm("此操作将修改该企业信息, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                    })
                        .then(() => {
                            this.secondopen = false;
                            this.$message({
                                type: "success",
                                message: "修改成功!",
                            });
                        })
                        .catch(() => {
                            this.$message({
                                type: "info",
                                message: "已取消修改",
                            });
                        });
                    // console.log(this.updatastatus.userId);
                    console.log(response);
                    // this.open = false;
                });
            });
        },
        // 认证按钮
        handleCheck() {
            this.$refs["form"].validate((valid) => {
                updateEnterprise(this.updatastatus).then((response) => {
                    // this.msgSuccess("认证成功");
                    this.$confirm("此操作将认证该企业, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                    })
                        .then(() => {
                            this.open = false;
                            this.$message({
                                type: "success",
                                message: "认证成功!",
                            });
                        })
                        .catch(() => {
                            this.open = false;
                            this.$message({
                                type: "info",
                                message: "已取消认证",
                            });
                        });
                    console.log(this.updatastatus.userId);
                    console.log(response);
                    // this.open = false;
                });
            });
        },
        // 取消按钮
        handleConcel() {
            this.secondopen = false;
        },

        // /////////////////////////////////////////////////////////////////////////
    },
};
</script>
  