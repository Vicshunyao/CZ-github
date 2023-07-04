<template>
  <div class="register">
    <div class="logo" @click="navigatorGo('/')"></div>
    <div class="form">
      <div class="title">
        <div class="left">工业互联网公共服务平台账号注册</div>
        <div class="right">
          已有账号,<span @click="handleLogin">去登录<i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
      <div class="kind">
        <div class="body">
          <!-- <span class="title2">企业注册</span> -->
          <el-form ref="form" :model="params" :rules="rules">
            <el-form-item prop="phoneNumber">
              <el-input v-model="params.phoneNumber" placeholder="手机号">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input v-model="params.enterprise" placeholder="请输入企业名称">
                <el-icon>
                  <User />
                </el-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-lock"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="params.allcode" placeholder="请输入统一社会信用码">
                <el-icon :size="20">
                  <Edit />
                </el-icon>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="params.password" placeholder="请输入密码" show-password>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <div class="code">
              <el-input v-model="code" auto-complete="off" placeholder="验证码" style="width: 63%"
                @keyup.enter.native="handleLogin">
                <i slot="prefix" icon-class="validCode" class="el-input__icon input-icon"></i>
              </el-input>
              <div class="login-code">
                <img :src="codeUrl" @click="getCode" class="login-code-img" />
              </div>
            </div>

            <!-- <el-select v-model="params.accountType" placeholder="请选择登录身份" prop="accountType">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
            <!-- <el-radio v-model="params.accountType" label="ENTERPRISE_ACCOUNT" value="ENTERPRISE_ACCOUNT">企业账户</el-radio> -->

            <!-- <el-form-item prop="verifyCode">
                  <div class="verify">
                    <el-input
                      v-model="params.verifyCode"
                      placeholder="验证码"
                      class="verifyCode"
                    >
                      <i slot="prefix" class="el-input__icon el-icon-bank-card"></i>
                    </el-input>
                    <div class="btn1" @click="sendSmsVerifyCode">发送验证码</div>
                  </div>
                </el-form-item> -->
          </el-form>

          <div class="btn" @click="handleRegister">注册</div>
          <el-icon :size="30" color="black">
                        <user />
                    </el-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Edit, User } from "@element-plus/icons-vue";
import register from "@/api/register.js";
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
export default {
  data() {
    const phoneNumberReg = /^1\d{10}$/;
    const phoneNumberValidator = (rule, value, callback) => {
      if (!phoneNumberReg.test(value)) {
        callback(new Error("手机号码无效，请重新输入"));
      } else {
        callback();
      }
    };
    return {
      activeName: "ENTERPRISE_ACCOUNT",
      baseUrl: window.baseUrl,
      code: "",
      uuid: "",
      codeUrl: "",
      options: [
        {
          value: "PERSONAL_ACCOUNT",
          label: "个人账户",
        },
      ],
      options1: [
        {
          value: "PERSONAL_ACCOUNT",
          label: "个人账户",
        },
        {
          value: "ENTERPRISE_ACCOUNT",
          label: "企业账户",
        },
        {
          value: "GOVERNMENT_ACCOUNT",
          label: "政府账户",
        },
        {
          value: "ADMIN_ACCOUNT",
          label: "管理员账户",
        },
      ],
      params: {
        verifyCode: "",
        password: "",
        phoneNumber: "",
        accountType: "ENTERPRISE_ACCOUNT",
        enterprise: "",
        allcode: ""
      },
      rules: {
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: phoneNumberValidator, trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verifyCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        accountType: [{ required: true, message: "请选择登录身份", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getCode();
    this.getCookie();
    window.localStorage.getItem("token")
      ? (this.token = window.localStorage.getItem("token"))
      : "";
    window.localStorage.getItem("expireTime")
      ? (this.expireTime = window.localStorage.getItem("expireTime"))
      : "";
    console.log(this.token);
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.params.accountType = tab.name;
      console.log(this.params.accountType);
    },
    navigatorGo(val) {
      this.$router.push(val);
    },
    getCode() {
      getCodeImg().then((res) => {
        this.codeUrl = "data:image/gif;base64," + res.img;
        this.uuid = res.uuid;
        console.log(this.uuid);
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      // const rememberMe = Cookies.get('rememberMe')
      // this.loginForm = {
      //   username: username === undefined ? this.loginForm.username : username,
      //   password: password === undefined ? this.loginForm.password : decrypt(password),
      //   rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      // };
    },

    handleLogin() {
      this.$router.push("/login");
    },
    async sendSmsVerifyCode() {
      const phoneNumberReg = /^1\d{10}$/;
      if (!phoneNumberReg.test(this.params.phoneNumber)) {
        this.$message.warning("请输入有效手机号");
        return;
      }
      const params = {
        phoneNumber: this.params.phoneNumber,
        smsType: "REGISTER_ACCOUNT",
      };
      const { code, msg } = await register.getSmsVerifyCode(params);
      if (code === 200) {
        this.$message.success("验证码发送成功,请注意查收");
      } else {
        this.$message.warning(msg);
      }
    },
    handleRegister() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const { code, msg } = await register.register(this.params);
          if (code === 200) {
            this.$message.success(msg);

            await this.$router.push("/login");
          } else {
            this.$message.warning(msg);
          }
        } else {
          this.$message.warning(msg);
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/image/login/login_bg.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;

  .logo {
    position: absolute;
    top: 23px;
    left: 30px;
    display: block;
    width: 150px;
    // height: 30px;
    height: 66px;
    background: url("../assets/image/header/logo1.png") no-repeat center center;
    // background: url("../assets/image/header/logo.png") no-repeat center center;
    background-size: 100% 100%;
    cursor: pointer;
  }

  .code {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .login-code-img {
    margin-left: 15px;
    height: 38px;
  }

  .form {
    width: 1000px;
    height: auto;
    margin: 0 auto;
    margin-top: 58px;
    background-color: #fff;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 65px;
      border-bottom: 1px solid #d8d8d8;
      padding: 0 33px;

      .left {
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #191938;
      }

      .right {
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;

        span {
          color: #0f5ceb;
        }
      }
    }

    .kind {
      width: 450px;
      // padding: 50px auto;
      margin-left: 300px;

      .title2 {
        font-size: 16px;
        align-items: center;
        // margin-top: 3px;
        display: block;
        padding-bottom: 10px;
      }

      .body {
        padding: 30px 0;
        padding-bottom: 60px;
        width: 375px;
        margin: 0 auto;
      }
    }
  }

  .btn {
    margin-top: 15px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: rgb(0, 169, 255);
    color: #fff;
    box-shadow: 0px 4px 6px 4px rgba(0, 169, 255, 0.2);
    border-radius: 3px;
    cursor: pointer;
  }

  .verifyCode {
    width: 260px;
  }

  .verify {
    width: 380px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btn1 {
    // top: -45px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    // margin-left: 250px;
    background-color: rgb(0, 169, 255);
    color: #fff;
    // box-shadow: 0px 4px 6px 4px rgba(0, 169, 255, 0.2);
    border-radius: 3px;
    cursor: pointer;
  }
}
</style>
<style>
.hide .el-upload--picture-card {
  display: none;
}
</style>
