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
                <div class="id">
                  <el-input placeholder="手机号码" @keyup.enter.native="login" v-model="username">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                  </el-input>
                </div>
                <div class="pwd" v-if="!loginBySms">
                  <el-input placeholder="请输入密码" @keyup.enter.native="handleLogin" v-model="password" type="password">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    <i slot="suffix" class="el-input__icon el-icon-view"></i>
                  </el-input>
                </div>
                <div class="code">
                  <el-input v-model="code" auto-complete="off" placeholder="验证码" style="width: 63%"
                    @keyup.enter.native="handleLogin">
                    <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
                  </el-input>
                  <div class="login-code">
                    <img :src="codeUrl" @click="getCode" class="login-code-img" />
                  </div>
                </div>
  
            
                <div class="save_pwd">
                  <span class="no_account">没有账号,<span @click="handleRegister">去注册</span></span>
                  <!-- <span class="sms_login" v-if="!loginBySms" @click="changeToSmsLogin">验证码登录</span> -->
                  <span class="sms_login" v-if="loginBySms" @click="changeToPwdLogin">密码登录</span>
                </div>
                <div class="btn" @click="handleLogin">登录</div>
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
    name: "",
    data() {
      return {
        activeName: "ADMIN_ACCOUNT",
        password: "",
        username: "",
        verifyCode: "",
        code: "",
        checked: true,
        loginBySms: false,
        userId: "",
        shenfen: "",
        uuid: "",
        accountType: "SYSTEM_ADMIN_ACCOUNT",
        codeUrl: "",
        data: {
          token: "",
        },
        expireTime: "",
      };
    },
  
    created() {
      this.getCode();
      this.getCookie();
      window.localStorage.getItem("token")
        ? (this.token = window.localStorage.getItem("token"))
        : "";
      window.localStorage.getItem("username")
        ? (this.username = window.localStorage.getItem("username"))
        : "";
      window.localStorage.getItem("expireTime")
        ? (this.expireTime = window.localStorage.getItem("expireTime"))
        : "";
      window.localStorage.getItem("accountType")
        ? (this.accountType = window.localStorage.getItem("accountType"))
        : "";
      console.log(this.username);
      console.log(this.accountType);
      // console.log(this.username);
    },
    mounted() { },
    methods: {
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
      handleClick(tab, event) {
        console.log(tab, event);
        console.log(tab.props);
        this.accountType = tab.props.name;
        console.log(this.accountType);
      },
      navigatorGo(val) {
        this.$router.push(val);
      },
      handleRegister() {
        this.$router.push("/register");
      },
      async sendSmsVerifyCode() {
        const phoneNumberReg = /^1\d{10}$/;
        if (!phoneNumberReg.test(this.username)) {
          this.$message.warning("请输入有效手机号");
          return;
        }
        const params = {
          phoneNumber: this.username,
          smsType: "LOGIN_ACCOUNT",
        };
        const { code, msg } = await register.getSmsVerifyCode(params);
        if (code === 200) {
          this.$message.success("验证码发送成功,请注意查收");
        } else {
          this.$message.warning(msg);
        }
      },
      changeToSmsLogin() {
        this.loginBySms = true;
      },
      changeToPwdLogin() {
        this.loginBySms = false;
      },
      handleLogin() {
        if (!this.username) return this.$message.warning("请输入手机号码!");
        // if (this.loginBySms) {
        //   if (!this.verifyCode) return this.$message.warning('请输入验证码!')
        //   const {data, code, msg} = await commonApi.loginByVerifyCode({phoneNumber: this.username, verifyCode: this.verifyCode,accountType:this.accountType})
        //   if (code === 200) {
        //     const {token , userId } = data
        //     localStorage.clear()
        //     localStorage.setItem('token', token)
        //     localStorage.setItem('userName', this.username)
        //     localStorage.setItem('userId',userId)
        //     console.log(userId);
        //     console.log(token);
        //     console.log(data.accountType)
  
        //     await this.$router.push('/index');
        //   } else {
        //     this.$message.warning(msg)
        //   }
        //   return
        // }
        if (!this.password) return this.$message.warning("请输入密码!");
  
        //   const {data, code, msg} = await commonApi.login({username: this.username, password: this.password, accountType:this.accountType,code:this.code,uuid:this.uuid})
        // const { token,userId, accountType} =data
        commonApi
          .loginAdmin({
            username: this.username,
            password: this.password,
            
            code: this.code,
            uuid: this.uuid,
          })
          .then((res) => {
            console.log(res);
            if (res.code === 500) {
              this.$message.warning(res.msg);
            }
            if (res.code === 200) {
              localStorage.clear();
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("userName", this.username);
              localStorage.setItem("userId", res.data.userId);
              localStorage.setItem("accountType", res.data.accountType);
              localStorage.setItem("expireTime", res.data.expireTime);
             
              this.$router.push("/");
              console.log(this.accountType)
              // this.$router.push('/index');
              // this.$router.go(-1);
              if (this.accountType ==="ADMIN_ACCOUNT") {
                this.$router.push("/");
                console.log(res.data);
              } else {
                this.$router.push("/useradmin");
              }
            }
          })
          .catch((error) => {
            // 失败
            console.log(error.message); // 打印错误信息
            console.log(error.response); // 打印响应数据
            this.$message.warning(error.response.data.message);
            this.getCode();
          });
        // console.log(this.error.message); // 打印错误信息
        //   console.log(this.error.response.data.status); // 打印响应数据
        //   this.$message.warning(this.error.response.data.message)
  
        // .catch(error => {
  
        //   // 失败
  
        //   console.log(error.message); // 打印错误信息
        //   console.log(error.response.data.status); // 打印响应数据
        //   this.$message.warning(error.response.data.message)
        // });
  
        // if (code === 200) {
        //   localStorage.clear()
        //   localStorage.setItem('token', token)
        //   localStorage.setItem('userName', this.username)
        //   localStorage.setItem('userId',userId)
        //   localStorage.setItem('accountType',accountType)
        //   // this.$router.go(-1);
        //   if(accountType==="ENTERPRISE_ACCOUNT"){
        //     await this.$router.push('/MyMessage');
        //   }else{
        //     await this.$router.push('/index');
  
        //   }
  
        // }
        //  else {
        //   this.$message.warning(msg)
        // }
        // if(error.response.data.status==="500"){
        //       console.log(msg)
        //       this.$message.warning(error.response.data.message)
        //     }
  
        // if(code===500){
        //   this.$message.warning(msg)
        //   console.log(msg)
        // }
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
        width:560px;
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
  