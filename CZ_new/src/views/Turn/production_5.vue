<template>
  <div class="containerClass">
    <div class="main-main">
      <el-carousel indicator-position="" height="300px">
        <el-carousel-item v-for="item in imageurl" :key="item">
          <div class="carousel-caption">
            <p>江苏常州经济开发区智改数转 </p>
          </div>
          <img :src="item" />

        </el-carousel-item>
      </el-carousel>

      <div class="box">
        <!-- <h3>这是页面1</h3> -->
        <div class="search">
          <el-input v-model="searchText" placeholder="请输入搜索内容" class="custom-input"></el-input>

          <el-icon @click="handleIconClick">
            <Search />
          </el-icon>
        </div>
      </div>

      <div class="rectangle">
        <div class="text-container">
          <span class="centered-text"><el-button type="primary" plain style="border-radius: 3%;">经开区内</el-button></span>
          <span class="centered-text" ><el-button type="primary" plain >经开区外</el-button></span>
        </div>
        <div class="text-container">
         
        </div>
      </div>

      

      <!-- 下面是卡片区域 -->
      <div class="card-container"   style="margin-left: 20px;">
          <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <!-- <img src=" admin\src\assets\image\ZGSZ\1.jpg" class="image2" /> -->
                      <img src="@/assets/image/ZGSZ/1.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>
                <el-col :span="15">
                  <div class="grid-content">
                    <div style="padding: 10px">
                      <div class="title_1">
                        <span>常州祥明智能动力股份有限公司 </span>
                      </div>

                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
        </div>


        <!-- <div class="vertical-line"></div> -->


        <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <img src="@/assets/image/ZGSZ/2.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>

                <el-col :span="15">

                  <div class="grid-content">

                    <div style="padding: 10px">
                      <!-- 卡片标题 -->
                      <div class="title_1">
                        <span>常州市江山新型建筑材料有限公司 </span>
                      </div>
                      <!-- 卡片内容 -->
                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>

                    </div>

                  </div>

                </el-col>
                
              </el-row>
            </div>
        </div>

        <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <img src="@/assets/image/ZGSZ/1.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>
                <el-col :span="15">
                  <div class="grid-content">
                    <div style="padding: 10px">
                      <div class="title_1">
                        <span>常州祥明智能动力股份有限公司 </span>
                      </div>

                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
        </div>


        <!-- <div class="vertical-line"></div> -->


        <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <img src="@/assets/image/ZGSZ/2.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>

                <el-col :span="15">

                  <div class="grid-content">

                    <div style="padding: 10px">
                      <!-- 卡片标题 -->
                      <div class="title_1">
                        <span>常州市江山新型建筑材料有限公司 </span>
                      </div>
                      <!-- 卡片内容 -->
                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>

                    </div>

                  </div>

                </el-col>
                
              </el-row>
            </div>
        </div>

        <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <img src="@/assets/image/ZGSZ/1.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>
                <el-col :span="15">
                  <div class="grid-content">
                    <div style="padding: 10px">
                      <div class="title_1">
                        <span>常州祥明智能动力股份有限公司 </span>
                      </div>

                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
        </div>


        <!-- <div class="vertical-line"></div> -->


        <div class="card51 hover-effect">
            <div @click="RMQY1Click" target="_blank">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <div>
                      <img src="@/assets/image/ZGSZ/2.jpg" class="image2" />
                    </div>
                  </div>
                </el-col>

                <el-col :span="15">

                  <div class="grid-content">

                    <div style="padding: 10px">
                      <!-- 卡片标题 -->
                      <div class="title_1">
                        <span>常州市江山新型建筑材料有限公司 </span>
                      </div>
                      <!-- 卡片内容 -->
                      <div class="text1">
                        <span> 成立于1995年，以电机技术为核心，提供各类交流电机、
                          直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
                      </div>

                    </div>

                  </div>

                </el-col>
                
              </el-row>
            </div>
        </div>

   
      


        <!-- 根据需要重复 card51 的 div 来显示每个卡片 -->
        <!-- <div class="card51 hover-effect">
      卡片内容在此处
    </div> -->

      </div>

      <!-- <div class="card51 hover-effect">
    <div @click="RMQY1Click" target="_blank">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div>
              <img src="../../assets/image/banner/banner_index.png" class="image2" />
            </div>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content">
            <div style="padding: 10px">
              <div class="title_1" >
                <span>常州祥明智能动力股份有限公司 </span>
              </div>

              <div class="text1">
                <span>              成立于1995年，以电机技术为核心，提供各类交流电机、
                  直流无刷电机、直流有刷电机和精密风机，以及磁耦合泵、精密减速与传动、控制组件和软件等产品技术解决方案。</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div> -->


    </div>
  </div>
</template>


<script>

// import Header from "@/component/Header";
// import IframeVue from "./Iframe.vue";


import { ArrowRight, Edit, ElInput, Search } from "@element-plus/icons-vue";
// import Footer from "@/component/Footer";
export default {
  components: { ArrowRight, Edit,  Search },
  name: "index",
  data() {
    return {
      imageurl: [
        require("@/assets/image/banner/banner_index.png"),
        require("@/assets/image/banner/product.png"),
        require("@/assets/image/banner/bannera.png"),
        // require("@/assets/image/unicom/3.jpg"),
        // require("@/assets/image/unicom/5.jpg"),
        // require("@/assets/image/unicom/1.jpg"),
      ],
      activeName: "first",
      searchText: ''
    };
  },
  mounted() {
  window.addEventListener('resize', () => {
    this.containerClass = this.getContainerClass();
  });
},

  computed: {
  containerClass() {
    if (window.innerWidth < 600) {
      return 'small-container';
    } else if (window.innerWidth < 900) {
      return 'medium-container';
    } else {
      return 'large-container';
    }
  }
},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // navigatorGo(val) {
    //   this.$router.push(val);
    // },
    handleIconClick() {
      // 在这里执行你想要的操作
      console.log('Icon clicked');

    },

  },

};
</script>

<style lang="scss" scoped>
.small-container {
  max-width: 400px;
}

.medium-container {
  max-width: 800px;
}

.large-container {
  max-width: 1400px;
}

.el-carousel .el-carousel__container img {
  object-fit: cover !important;
  width: 100% !important;
  height: 100% !important;
}

// .vertical-line {
//   border-left: 1px solid #000; /* 设置直线的样式 */
//   height: 100%; /* 设置直线的高度，使其与卡片元素等高 */
//   margin: 0 10px; /* 调整直线与卡片之间的间距 */
// }

.el-icon {
  // position: absolute;
  height: 21px;
  width: 40px;
  top: 19px;
  right: 40px;
  transform: translateY(-50%);
  background-color: #0C5DAA;
  /* 添加蓝色背景颜色 */
  color: white;
  /* 设置文本颜色为白色 */
  padding: 5px;
  /* 调整图标内边距 */
  border-radius: 20%;
  /* 添加圆角效果 */
}

.rectangle {
  display: flex;
  flex-direction: row;
  // max-width: 800px;
  // min-width: 600px;
  width: 1400px;
  height: 50px;
  background-color: #409EFF;
  display: inline-block;
  margin-right: 0px;
  margin-bottom: 10px;
}

.text-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered-text {
  font-size: 18px;
  color: #ffffff;
  width: 600px;
  margin-left: 300px;
}

.card-container {
  width: 1400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

}

.card51 {
  position: relative;
  margin-bottom: 50px;
  background-color: #ffffff;
  display: flex;

  margin-left: 50px; 
  width: 550px;
  height: 230px;
  /* border: 1.5px solid rgb(180, 179, 179); */
  // margin-right: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */

}

.title_1 {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  // width: 200px; 
  font-size: 20px;
  font-weight: 550;
  text-align: center;
  margin-top: 30px;
  color: #000;
  padding-bottom: 20px;
  /* margin-bottom: 15px; */
  white-space: nowrap;
  overflow: ellipsis;
  text-overflow: ellipsis;
  

}

.text1 {
  margin-left: 15px;
  margin-top: 1px;
  color: #000;
  margin-left: 20px;

  /* font-family: "Arial,sans-serif"; */
  // font-family: Georgia, "Times New Roman", Times, serif;
  text-indent: 30px;
  font-style: Georgia;
  font-family: Noto Sans SC;
  font-size: 15px;
font-weight: 400;
}

.image2 {
  /* border-radius: 50%; */
  /* padding:30px; */
  width: 160px;
  height: 160px;
  margin-top: 30px;
  margin-left: 30px;
}

.hover-effect:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 1.5rem 2.5rem rgba(22, 28, 45, 0.1),
    0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
  /* border-bottom: 2px solid rgb(12, 68, 180); */
}

.search {
  display: flex;
  flex-direction: row;
  width: auto;
  flex-wrap: nowrap;
  justify-content: flex-end;
  // display: inline-block;
}

.custom-input {
  padding-top: 0px;
  padding-bottom: 20px;
  width: 200px;
  /* 调整搜索框的宽度 */
  // margin-left: 1000px;
  // margin-right: 20px;

}

.carousel-caption {
  position: absolute;
  bottom: 125px;
  left: 200px;
  right: 0;
  // background-color: rgba(254, 254, 254, 0.496);
  color: #000000;
  padding: 10px;
}

.carousel-caption p {
  font-size: 40px;
  font-weight: 1000;
}

.el-carousel {
  // width: 1450px;
  width: 100%;
}

.box {
  margin-top: 10px;
  // width: 1450px;
  width: 100%;
  margin-left: 5px;
}

.box h3 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
}


.el-card {
  width: 300px;
  padding: 0 5px;
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

.el-card span {
  display: block;
  text-align: center;
  font-weight: 800;
  margin-bottom: 5px;
}

.el-card p {
  text-align: center;
}

.image {
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
}</style>
