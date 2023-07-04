<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  BellFilled,
  Reading,
  Orange,
  Goods,
  Checked,
  Money,
  Operation,
  Tools,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
const token = ref("");
const username = ref("");
const userId = ref("");
const expireTime = ref("");
const accountType = ref("");

// username.value = window.localStorage.getItem("username")
//   ? (username.value = window.localStorage.getItem("username"))
//   : "";
// console.log(username.value);
const isLoggedIn = ref(false);


const resetLoginTimeout = () => {
  setTimeout(() => {
    logout();
  }, expireTime * 60 * 1000);
  ElMessage.error("登录信息过期，请重新登录")
};
const containerClass = ref("");
const setContainerClass = () => {
  if (window.innerWidth < 600) {
    containerClass.value = "small-container";
  } else if (window.innerWidth < 900) {
    containerClass.value = "medium-container";
  } else {
    containerClass.value = "large-container";
  }
};
const zdfw = () => {
  window.open("https://www.eqiyun.cn/serviceLogin");
};
const sthz = () => {
  window.open("http://116.147.35.211:8888/home/Index/index.html");
};
watch(isLoggedIn, (newValue) => {
  console.log("未过期")
  if (newValue) {
    resetLoginTimeout();
  }
});

onMounted(() => {
  setContainerClass();
  window.addEventListener("resize", setContainerClass);

  token.value = window.localStorage.getItem("token")
    ? (token.value = window.localStorage.getItem("token"))
    : "";
  username.value = window.localStorage.getItem("username")
    ? (username.value = window.localStorage.getItem("username"))
    : "";
  console.log(username.value);
  expireTime.value = window.localStorage.getItem("expireTime")
    ? (expireTime.value = window.localStorage.getItem("expireTime"))
    : "";
  userId.value = window.localStorage.getItem("userId")
    ? (userId.value = window.localStorage.getItem("userId"))
    : "";
    accountType.value = window.localStorage.getItem("accountType")
    ? (accountType.value = window.localStorage.getItem("accountType"))
    : "";



  console.log(accountType.value);
  console.log(expireTime.value);

  console.log(userId.value);
  console.log(token.value);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", setContainerClass);
});
const route = useRoute();
const router = useRouter();
// console.log()
const store = useStore();

const zhengce = async () => {
  router.push("/policy");
};
const zgsz = async () => {
  router.push("/turn");
};
const yysd = async () => {
  router.push("/mainbox");
};
const login = () => {
  isLoggedIn.value = true;
  router.push("/login");
};
const useCenter = () => {
  if(accountType.value==="ADMIN_ACCOUNT"){
    router.push("/useradmin")
  }
  else{
    router.push("/userweb")
  }
  // 
}
const Register = () => {
  router.push("/register")
}
const logout = () => {
 
  localStorage.clear();

  // exit();
  router.push("/login")
}
</script>

<template>
  <div>
    <div class="index">
      <div class="header">
        <div><img class="logo" src="@/assets/image/header/logo1.png" /></div>

        <div class="box" v-if="username === ''">
          <el-icon size="25" style="margin-right: 40px">
            <BellFilled />
          </el-icon>
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button @click="Register()">注册</el-button>
        </div>
        <div class="box" v-else>
          <el-icon size="25" style="margin-right: 40px">
            <BellFilled />
          </el-icon>
          <span style="margin-right: 20px;">{{ username }}</span>
          <el-button @click="logout()">退出登录</el-button>

        </div>
      </div>
      <div class="main">
        <div class="title">
          <span style="font-size: 40px; font-weight: 600; color: #eee">经开区工业互联网公共服务平台</span>
        </div>
        <div class="text" style="justify-content: center; margin-top: 10px">
          <span style="color: #eee">挖掘工业大数据核心价值，助力企业数字化转型</span>
        </div>
      </div>

      <div class="main-index">
        <div class="all-button">
          <div>
            <el-row :gutter="30">
              <el-col :span="6">
                <div class="button">
                  <div>
                    <div class="box-card" @click="zhengce()">
                      <div class="image1_1">
                        <el-icon size="80px">
                          <Reading />
                        </el-icon>
                      </div>
                      <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                      <div>
                        <div class="title_1"><span>政策动态 </span></div>

                        <div class="text1">
                          <span>Government Policy</span>
                        </div>
                      </div>

                      <!-- <span style="font-size: large; color: #050505">政策动态</span>
            <span style="font-size: large; color: #070707">Government policy</span> -->
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="button">
                  <div>
                    <div class="box-card" style="background-color: #3fad32" @click="zgsz()">
                      <div class="image1_1">
                        <el-icon size="80px">
                          <Orange />
                        </el-icon>
                      </div>
                      <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                      <div>
                        <div class="title_1"><span>智改数转 </span></div>

                        <div class="text1">
                          <span>Smart Turn</span>
                        </div>
                      </div>

                      <!-- <span style="font-size: large; color: #050505">政策动态</span>
            <span style="font-size: large; color: #070707">Government policy</span> -->
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="button">
                  <div>
                    <div class="box-card" style="background-color: #fa0d0d" @click="yysd()">
                      <div class="image1_1">
                        <el-icon size="80px">
                          <Goods />
                        </el-icon>
                      </div>
                      <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                      <div>
                        <div class="title_1"><span>应用商店 </span></div>

                        <div class="text1">
                          <span>App Store</span>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="button">
                  <div>
                    <div class="box-card" style="background-color: #f0508d" @click="zdfw()">
                      <div class="image1_1">
                        <el-icon size="80px">
                          <Checked />
                        </el-icon>
                      </div>
                      <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                      <div>
                        <div class="title_1"><span>诊断服务 </span></div>

                        <div class="text1">
                          <span>Diagnostic Service</span>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </el-col>


            </el-row>
          </div>

          <div>
            <el-row>
              <el-col :span="8">
                <div class="btn2">
                  <div class="box-card" style="background-color: #ff6838" @click="zjsb()">
                    <div class="image1_1">
                      <el-icon size="80px" style="text-align: center;">
                        <Money />
                      </el-icon>
                    </div>
                    <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                    <div>
                      <div class="title_1" style="text-align: center;"><span>资金申报</span></div>

                      <div class="text1" style="text-align: center;">
                        <span>Declaration of Funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="btn2">
                  <div class="box-card" style="background-color: #00f2f2" @click="sthz()">
                    <div class="image1_1">
                      <el-icon size="80px">
                        <Operation />
                      </el-icon>
                    </div>
                    <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                    <div>
                      <div class="title_1"><span>生态合作</span></div>

                      <div class="text1">
                        <span>Ecological Cooperation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="btn2">
                  <div class="box-card" style="background-color: #207dd4" @click="useCenter()">
                    <div class="image1_1">
                      <el-icon size="80px">
                        <Tools />
                      </el-icon>
                    </div>
                    <!-- <img src="../../assets/image/kfzfw/边缘计算.png" class="image1" /> -->
                    <div>
                      <div class="title_1"><span>用户中心</span></div>

                      <div class="text1">
                        <span>User Center</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  // padding-right: 0;
  // padding-left: 0;
  min-width: 1720px;
  // max-height: 1080px;
  min-height: 910px;
  width: auto;
  height: 100vh;

  // display: flex;
  background-attachment: fixed;
  // background-size: cover;
  background-position: center center;
  // background-repeat: no-repeat;
  background-image: url("@/assets/image/header/bg1.jpg");
  background-size: 100% 100%;
}

.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  overflow: auto;
  position: relative;
}

.box {
  position: absolute;
  display: flex;
  // width: 300px;
  height: 100px;
  right: 50px;
  // left: 80%;
  margin-left: 85%;
  justify-content: center;
  align-items: center;
  justify-content: end;
}

.logo {
  width: 180px;
  // height: 10px;
  margin-top: 1rem;
}

.small-container {
  max-width: 400px;
}

.medium-container {
  max-width: 800px;
}

.large-container {
  max-width: 1900px;
}


.main {
  // width: 1920px;
  display: flex;
  width: 100%;
  min-width: 1720px;
  // position: absolute;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  // transform-origin: top left;
  .title {
    font-size: 40px;
    height: 70px;
    width: 700px;
    padding-left: 600px;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
  }

  .text {
    display: flex;
    width: auto;
    margin-top: 10px;
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
    padding-left: 730px;
  }
}

.main-index {
  width: 100%;
  min-width: 1720px;
  // width: 1920px;
  // padding-bottom:100px ;
}

.all-button {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
}

.all-button .button {
  margin-left: 70px;
  padding: 40px;
}

.button .box-card {
  // border: 3px solid #39812e;
  box-shadow: 0 0 10px rgba(255, 255, 255), 0 0.4rem 0.5rem 0.1rem rgb(0, 0, 0, 0.5);

  color: #ddd;
  background-color: "#1818BC";
  display: flex;
  flex-direction: column;
  justify-content: center;

  // align-content: center;
  width: 320px;
  height: 190px;
  border-radius: 5%;

  &:hover {
    box-shadow: 0 0 2.5rem rgba(255, 255, 255),
      0 0.3rem 0.5rem -0.5rem rgba(255, 255, 255, 0.5) !important;
    transform: translate3d(0, -3px, 3px);
  }

  //   background-color: #ffffff;
  // margin-left: 30px;
  background-color: #1818bc;
  border-color: #1818bc;

  display: flex;
  // justify-items: center;
  // align-items: bottom;

  justify-content: center;
  // padding: 0px 35px 10px 35px;
  // padding-bottom: 10px;
  // align-content: center;

  // margin-right: 100px;
  cursor: pointer;

  .title_1 {
    // width: 240px;
    // padding-top: 50px;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    padding-bottom: 10px;

    color: rgb(255, 255, 255);
    // font-family: Georgia, "Times New Roman", Times, serif;
    // font-style: normal;
  }

  .text1 {
    width: 240px;
    line-height: 23px;
    color: rgb(255, 255, 255);
    // text-indent: 30px;
    font-weight: 100;
    font-size: 16px;
    margin-bottom: 8px;
    // font-family: "Arial,sans-serif";
    // font-family: Georgia, "Times New Roman", Times, serif;
    // font-style: Georgia;

    text-align: center;
  }

  .img {
    width: 82px;
    margin-left: 75px;
    margin-top: 20px;
  }

  .image1_1 {
    margin: auto;
    // background-color: #0f5ceb;
    width: 85px;
    height: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .image1_2 {
    margin: auto;

    // background-color: #0f5ceb;
    width: 80px;
    height: 80px;
  }

  .image1_3 {
    margin: auto;

    // background-color: #0f5ceb;
    width: 80px;
    height: 80px;
  }

  // &:hover {
  // transform: translate3d(0, -3px, 0);
  // box-shadow: 0 1.5rem 2.5rem rgba(22, 28, 45, 0.1),
  //   0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
  // border-bottom: 2px solid rgb(12, 68, 180);
  // }
}

.btn2 .box-card {
  box-shadow: 0 0 10px rgba(255, 255, 255), 0 0.4rem 0.5rem 0.1rem rgb(0, 0, 0, 0.5);
  color: #ddd;
  border-radius: 5%;
  background-color: "#1818BC";
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-content: center;
  width: 380px;
  height: 190px;

  &:hover {
    box-shadow: 0 0 2.5rem rgba(255, 255, 255),
      0 0.3rem 0.5rem -0.5rem rgba(255, 255, 255, 0.5) !important;
    transform: translate3d(0, -3px, 3px);
  }

  //   background-color: #ffffff;
  // margin-left: 30px;

  display: flex;
  // justify-items: center;
  // align-items: bottom;

  justify-content: center;
  // padding: 0px 35px 10px 35px;
  // padding-bottom: 10px;
  // align-content: center;

  // margin-right: 100px;
  cursor: pointer;

  .title_1 {
    width: 300px;
    // padding-top: 50px;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    padding-bottom: 10px;

    color: rgb(255, 255, 255);
    // font-family: Georgia, "Times New Roman", Times, serif;
    // font-style: normal;
  }

  .text1 {
    width: 300px;
    line-height: 23px;
    color: rgb(255, 255, 255);
    // text-indent: 30px;
    font-weight: 100;
    font-size: 16px;
    margin-bottom: 8px;
    // font-family: "Arial,sans-serif";
    // font-family: Georgia, "Times New Roman", Times, serif;
    // font-style: Georgia;

    text-align: center;
  }

  .img {
    width: 82px;
    margin-left: 75px;
    margin-top: 20px;
  }

  .image1_1 {
    margin: auto;
    // background-color: #0f5ceb;
    width: 85px;
    height: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .image1_2 {
    margin: auto;

    // background-color: #0f5ceb;
    width: 80px;
    height: 80px;
  }

  .image1_3 {
    margin: auto;

    // background-color: #0f5ceb;
    width: 80px;
    height: 80px;
  }

  // &:hover {
  // transform: translate3d(0, -3px, 0);
  // box-shadow: 0 1.5rem 2.5rem rgba(22, 28, 45, 0.1),
  //   0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
  // border-bottom: 2px solid rgb(12, 68, 180);
  // }
}

// .all-button .button :nth-child(0){
//     // background-color: #b7b04e;

// }

.all-button .btn2 {
  margin-top: 40px;
  padding-left: 50px;
  // padding: 80px;
}

.row {
  flex-direction: row;
}

.el-aside {
  display: flex;
  width: 190px;
}

.button1 {
  width: 240px;
  height: 150px;

  &:hover {
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
  }
}

.button2 {
  width: 300px;
  height: 150px;

  &:hover {
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
  }
}
</style>
