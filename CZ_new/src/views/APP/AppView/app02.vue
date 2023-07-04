<template>
  <div>
    <div class="main-main">
      <el-carousel indicator-position="" height="450px">
        <el-carousel-item v-for="item in imageurl" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
     
     <div class="box">
     <h3>其他应用</h3>

        <el-row>
    <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
        <img
          src="@/assets/image/kernel/kernel.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>工业平台</span>
          <div class="bottom">
           <p>致力于为全国各大知名主机厂商提供优质的汽车零部件产品</p>
          </div>
        </div>
      </el-card></el-col>
    <el-col :span="6"><el-card :body-style="{ padding: '0px' }" @click="riying">
        <img
          src="@/assets/image/kfzfw/IIOT.jpeg"
          class="image"
        />
        <div style="padding: 14px">
          <span>日盈电子</span>
          <div class="bottom">
            <p>构建基于海量数据采集、汇聚、分析的服务体系</p>
          </div>
        </div>
      </el-card></el-col>
    <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
        <img
          src="@/assets/image/kfzfw/边缘开发.jpeg"
          class="image"
        />
        <div style="padding: 14px">
          <span>亿匠台</span>
          <div class="bottom">
          <p>开放式的工业创新能力共享服务平台，让企业与设计师实现共赢</p>
           
          </div>
        </div>
      </el-card></el-col>
    <el-col :span="6"><el-card :body-style="{ padding: '0px',}">
        <img
          src="@/assets/image/kfzfw/工业可视化资源监控.jpeg"
          class="image"
        />
        <div style="padding: 14px">
          <span>工业应用</span>
          <div class="bottom">
            <p>将科学技术、科研成果、实验成果、发明创造等工业化应用</p>
          </div>
        </div>
      </el-card></el-col>
  </el-row>
     <!--  -->
   
     
     </div>
    </div>
  </div>
</template>

<script>
// import Header from "@/component/Header";
// import IframeVue from "./Iframe.vue";
import { ArrowRight, Edit } from "@element-plus/icons-vue";
// import Footer from "@/component/Footer";
export default {
  components: { ArrowRight, Edit },
  name: "index",
  data() {
    return {
      imageurl: [
        require("@/assets/image/unicom/image02.png"),
        require("@/assets/image/unicom/image01.jpg"),
        require("@/assets/image/unicom/image02.png"),
        // require("@/assets/image/unicom/3.jpg"),
        // require("@/assets/image/unicom/5.jpg"),
        // require("@/assets/image/unicom/1.jpg"),
      ],
      activeName: "first",
      creditCode:""
    };
  },
  created() {
    
    window.localStorage.getItem("token")
      ? (this.token = window.localStorage.getItem("token"))
      : "";
    window.localStorage.getItem("username")
      ? (this.username = window.localStorage.getItem("username"))
      : "";
    window.localStorage.getItem("expireTime")
      ? (this.expireTime = window.localStorage.getItem("expireTime"))
      : "";
    window.localStorage.getItem("userId")
      ? (this.userId = window.localStorage.getItem("userId"))
      : "";
    console.log(this.username);
    window.localStorage.getItem("creditCode")
      ? (this.creditCode = window.localStorage.getItem("creditCode"))
      : "";
    console.log(this.creditCode);
  
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    riying(){
      // const creaditCode = window.localStorage.getItem("creaditCode");
      
      if (this.creditCode) {
        window.open("https://www.riyingcloud.com?creditCode=" + this.creditCode, "_blank");
        // console.log(this.creditCode);
      } else {
        window.open("https://www.riyingcloud.com", "_blank");
      }
     

    }
    // navigatorGo(val) {
    //   this.$router.push(val);
    // },
  },
};
</script>

<style lang="scss" scoped>
.el-carousel{
    // width: 1500px;
    width: auto;
}
.box{
    margin-top: 50px;
    // width: 1450px;
    width: 100%;
    margin-left: 30px;
}
.box h3{
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
}

 .el-card {
    width: 300px;
    padding:0  5px;
    margin-right: 30px;
    border-radius: 5%;
    box-shadow: 0 0 30px #505050;
    cursor: pointer;
    &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: 0 1.5rem 2.5rem rgba(14, 15, 19, 0.1),
        0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
    }
 }
 .el-card span{
    display: block;
    text-align: center;
    font-weight: 800;
    margin-bottom: 5px;
 }
 .el-card p{
    text-align:center;
 }
 
 .image{
    width: 300px;
    height: 200px;

}
.main-main {
  width: 100%;
  height: 100%;
  min-height: 1000px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// .bg .tabs /deep/ .el-tabs__active-bar{
//     background-color: #229922 !important;   //切换活动项的长条颜色
// }
.bg {
  //   background: url('../assets/image/unicom/bgimg.png');
  background: url("@/assets/image/unicom/bgimg.png") no-repeat;
  min-height: 600px;
  height: auto;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .tabs {
    margin: auto;
    width: 80%;

    .body {
      display: flex;
      margin: 0;
      padding: 0;
      font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
      .aside {
        border-right: 1px solid #cfcfc4;
        .aside-box {
          padding-bottom: 0.75rem;
          padding-right: 2rem !important;
          padding-top: 2.75rem;
          border-right-width: 1px;
          background-repeat: no-repeat;
          width: 240px;
          height: 100%;
          display: flex;
          position: relative;
          .aside-txt {
            margin: 0;
            padding: 0;
            font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
            .aside-title {
              font-size: 1.875rem;
              line-height: 2.25rem;
              word-break: break-all;
              .hover {
                color: inherit;
                text-decoration: none;
              }
            }
            .aside-content {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              --tw-text-opacity: 1;
              color: rgba(115, 120, 127, var(--tw-text-opacity));
              word-break: break-all;
              margin-top: 1rem;
              margin-bottom: 1.25rem;
            }
            .hover2 {
              --tw-text-opacity: 1;
              color: rgba(255, 255, 255, var(--tw-text-opacity));
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              background-color: #0b81b8;
              justify-content: center;
              align-items: center;
              height: 36px;
              display: flex;
              margin-top: 1rem;
              text-decoration: none;
            }
          }
        }
      }
      .main {
        flex-wrap: wrap;
        flex: 1 1 0%;
        display: flex;
        list-style: none;
        .li-main {
          padding-top: 2.75rem !important;
          padding: 1.25rem;
          flex-basis: 28%;
          display: list-item;
          text-align: -webkit-match-parent;
          .li-mian-title {
            font-size: 1.125rem;
            line-height: 1.75rem;
            word-break: break-all;
            font-weight: inherit;
            display: block;
            margin-block-start: 1.33em;
            margin-block-end: 1.33em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            .a-title {
              color: inherit;
              text-decoration: none;
              cursor: pointer;
            }
          }
          .li-content {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            --tw-text-opacity: 1;
            color: rgba(115, 120, 127, var(--tw-text-opacity));
            font-size: 0.875rem;
            line-height: 1.25rem;
            word-break: break-all;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }
          .a-more {
            --tw-text-opacity: 1;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            background-color: #0b81b8;
            justify-content: center;
            align-items: center;
            height: 36px;
            width: 25px;
            display: flex;
            margin-top: 1rem;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
