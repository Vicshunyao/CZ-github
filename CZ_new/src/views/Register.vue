<template>
  <div class="login">
    <div class="login_left">
      <div class="title" @click="navigatorGo('/')"></div>
      <div class="login_bg"></div>
    </div>
    <div class="login_right">
      <div class="login_title">江苏常州经济开发区<br />工业互联网公共服务平台</div>
      <div class="login_en_title">
        " Industrial Internet of Things Public Service Platform"
      </div>
      <!-- <div class="login_en_title">"5g + edge calculation"Industrial Internet platform</div> -->
      <div class="main">
        <div class="form">
          <el-form ref="form" :model="params" :rules="rules">
            <el-form-item prop="accountName">
              <el-input v-model="params.accountName" placeholder="账号名称">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="creditCode">
              <el-input v-model="params.creditCode" placeholder="请输入统一社会信用码">
                <el-icon :size="20">
                  <Edit />
                </el-icon>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="enterpriseName">
              <el-input v-model="params.enterpriseName" placeholder="请输入企业名称">
                <el-icon>
                  <User />
                </el-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-lock"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item prop="contactName">
              <el-input v-model="params.contactName" placeholder="联系人姓名">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="phoneNumber">
              <el-input v-model="params.phoneNumber" placeholder="手机号">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
           
            <el-form-item prop="password">
              <el-input v-model="params.password" placeholder="请输入密码" show-password>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <!-- <div class="code">
              <el-input v-model="code" auto-complete="off" placeholder="验证码" style="width: 63%"
                @keyup.enter.native="handleLogin">
                <i slot="prefix" icon-class="validCode" class="el-input__icon input-icon"></i>
              </el-input>
              <div class="login-code">
                <img :src="codeUrl" @click="getCode" class="login-code-img" />
              </div>
            </div> -->


          </el-form>

          <div class="save_pwd">
            <span class="no_account">已有账号,<span @click="handleLogin">去登录</span></span>
            <!-- <span class="sms_login" v-if="!loginBySms" @click="changeToSmsLogin">验证码登录</span> -->
            <span class="sms_login" v-if="loginBySms" @click="changeToPwdLogin">密码登录</span>
          </div>
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
import commonApi from "@/api/common.js";
import register from "@/api/register";
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
// import { encrypt, decrypt } from '@/utils/jsencrypt'
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
    const contactNameReg = /^(?!\d+$).*/;
    
    const contactNameValidator = (rule, value, callback) => {
      if (!contactNameReg.test(value)) {
        callback(new Error("用户名不符合，请重新输入"));
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
       
        password: "",
        phoneNumber: "",
        contactName:"",
        accountName: "",
        // accountType: "ENTERPRISE_ACCOUNT",
        enterpriseName: "",
        creditCode: "",

      },
      rules: {
        accountName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: contactNameValidator, trigger: "blur" },
        ],
        creditCode: [{
          required: true, message: "请输入统一信用码", trigger: "blur"
        }],
        contactName:[
        { required: true, message: "请输入联系人姓名", trigger: "blur" }
        ],
        enterpriseName:[
        { required: true, message: "请输入企业名称", trigger: "blur" }
        ],
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
          // const res = await register.register(this.params);
          const { code, msg } = await register.register(this.params);
          // console.log(res);
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
// *{
//   margin: 0;
//   padding: 0px;
// }
.code {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.login-code-img {
  margin-left: 15px;
  height: 38px;
}

.login {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url("../assets/image/login/login_bg.png");
  // background-size: 100% 100%;

  .login_left {
    position: relative;
    width: 65%;
    height: 100%;

    .title {
      position: absolute;
      top: 23px;
      left: 30px;
      display: block;
      width: 150px;
      height: 80px;
      background: url("../assets/image/header/logo1.png");
      background-size: 100% 100%;
      cursor: pointer;
    }

    .login_bg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 742px;
      height: 564px;
      background: url("../assets/image/login/login_left_bg.png") no-repeat center center;
      background-size: 100% 100%;
    }
  }

  .login_right {
    width: 35%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 4px 8px rgba(0, 0, 0, 0.1);

    .login_title {
      margin: 150px 110px 15px 110px;
      color: #191938;
      font-size: 30px;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
      width: 360px;
    }

    .login_en_title {
      font-size: 12px;
      color: #333;
      text-align: center;
      width: 560px;
    }

    .main {
      margin-left: 90px;
      margin-top: 20px;
      // margin: 30px 0 17px 0;
    }

    .form {
      width: 338px;
      margin-left: 40px;
      // margin: 0 auto;
      margin-top: 65px;

      .choice {
        padding-left: 50px;
        padding-top: 13px;
        padding-bottom: 10px;
        // height: 50px;
        // line-height: 35px;
      }

      .pwd {
        margin: 30px 0 17px 0;
      }

      .sms {
        margin: 30px 0 17px 0;
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

      .verifyCode {
        width: 260px;
      }

      .save_pwd {
        margin-bottom: 30px;
        overflow: hidden;

        .no_account {
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;

          span {
            color: #0f5ceb;
          }
        }

        .sms_login {
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          color: #0f5ceb;
          float: right;
          margin-right: 20px;
        }
      }

      .btn {
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: rgb(0, 169, 255);
        color: #fff;
        box-shadow: 0px 4px 6px 4px rgba(0, 169, 255, 0.2);
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
}
</style>
