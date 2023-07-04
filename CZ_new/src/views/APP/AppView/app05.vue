<template>
  <div class="box">
    <!-- <Header></Header> -->
    <div class="banner">
      <div class="banner_content">
        <h1 class="h1title">{{ h1title }}</h1>
        <h3 class="h3content">{{ h3content }}</h3>
      </div>
    </div>
    <div class="b1">
      <div class="content_box1">
        <h3 class="d1_title">企业痛点</h3>
        <div class="d1">
          <div class="d1_item" v-for="item in d1data" :key="item">
            <img :src="item.src" class="itemimg" />
            <div class="d1_item_title">
              <strong style="font-weight: bolder">{{ item.title }}</strong>
            </div>
            <div class="d1_item_content">
              <span class="span_item_content">{{ item.content }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="content_box2">
        <div class="content_box1" style="padding: 40px 0; background-size: cover">
          <h3 class="d1_title">产品功能</h3>
          <p>&nbsp;</p>
          <div class="d2">
            <div class="d2_item" v-for="item in d2data" :key="item">
              <img :src="item.src" class="d2itemimg" />
              <div class="d2_right">
                <div class="d2_right_content">
                  <div class="d2_item_title">{{ item.title }}</div>
                  <div class="d2_item_content">
                    <span>{{ item.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content_box3">
        <div class="content_box1" style="padding: 40px 0; background-size: cover">
          <div class="d3_title">
            <h3 class="d1_title" style="color: white">核心优势</h3>
            <span class="d3_span_title"
              >完善、成熟的多行业解决方案，帮助客户轻松快速进行智能决策</span
            >
          </div>
          <div class="d3">
            <div class="d3_item" v-for="item in d3data" :key="item">
              <img :src="item.src" class="d3itemimg" />
              <div class="d3_right">
                <div class="d3_right_content">
                  <div class="d3_item_title">{{ item.title }}</div>
                  <div class="d3_item_content">
                    <span>{{ item.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="content_box4">
                <div class="content_box1" style="padding: 40px 0;background-size: cover;">
                    <h3 class="d1_title">产品效能</h3>
                    <div class="d4">
                        <div class="d4_item" v-for="item in d4data" :key="item">
                            <span class="d4_span">{{ item.value }}</span>
                            <div class="d4_content">{{ item.content }}</div>
                        </div>
                    </div>
                </div>
            </div> -->
    </div>
  </div>
</template>

<script>
// import Header from "@/component/Header";
// // import IframeVue from "./Iframe.vue";

// import Footer from "@/component/Footer";

export default {
  name: "app02",
//   components: { Header, Footer },
  data() {
    return {
      h1title: "空压站云智控",
      h3content:
        "空压机云智控是联通智造云打造的空压机智能化控制系统，通过采集企业动力车间的空压机、冷干机、余热回收机运行数据，对采集数据进行运算，按需动态调整设备启停，实现站内设备智能化控制，降低企业用能成本",
      d1data: [
        {
          src: require("@/assets/appimage/7-1.png"),
          title: "空压站频繁启停",
          content: "空压站启停频繁，空载率高了造成浪费",
        },
        {
          src: require("@/assets/appimage/7-2.png"),
          title: "人工操作效率低",
          content: "人工手动启停操作不及时，且人工点检繁琐效率低",
        },
        {
          src: require("@/assets/appimage/7-3.png"),
          title: "动力车间影响生产",
          content: "供气压力与用气压力不匹配，影响生产车间",
        },
        {
          src: require("@/assets/appimage/7-4.png"),
          title: "空压站用电占比高",
          content: "空压机以75KW为例，每天工作12小时，一年约30万用电量",
        },
      ],
      d2data: [
        {
          src: require("@/assets/appimage/4-1.png"),
          title: "全类型设备监控",
          content:
            "空压机、后处理、附属设备、仪器仪表、阀门、冷干机、吸干机、水泵、风机、余热回收机、流量计、电表等设备",
        },
        {
          src: require("@/assets/appimage/4-2.png"),
          title: "智能化控制",
          content:
            "根据企业的实际生产需要的用气情况，淡旺季、昼夜或白天因素，智能控制整个站房的启停，以最大化节能；或预设计划，减少人工操作失误",
        },
        {
          src: require("@/assets/appimage/4-3.png"),
          title: "整站节能",
          content:
            "由于压力带越广能耗越高；智控系统通过窄带恒压技术，减少设备压差，恒定压力，减少车间无效能耗",
        },
      ],
      d3data: [
        {
          src: require("@/assets/appimage/5-1.png"),
          title: "快部署、易运维",
          content: "标准化组件，非侵入式安装，上线周期短（1周），远程云边端同步升级。",
        },
        {
          src: require("@/assets/appimage/5-2.png"),
          title: "精细化、专业化",
          content: "通过窄带恒压、边缘计算、AI算法自主调参等技术，实现设备动态决策。",
        },
        {
          src: require("@/assets/appimage/5-3.png"),
          title: "高效节能",
          content: "边缘服务器的智能化控制，AI智能大脑，按需动态调整设备启停。",
        },
        {
          src: require("@/assets/appimage/5-4.png"),
          title: "适用广",
          content: "市场上90%品牌的空压机设备都可以直接对接采集数据。",
        },
      ],
      // d4data:[
      //     {
      //         value:'20%',
      //         content:'延长设备寿命',
      //     },
      //     {
      //         value:'10%',
      //         content:'提升平均节能率',
      //     },
      //     {
      //         value:'10%',
      //         content:'降低人力维护成本',
      //     },
      //     {
      //         value:'10%',
      //         content:'提高设备利用率',
      //     },
      // ]
    };
  },
};
</script>

<style scoped>
.box {
  margin: 0 auto;
  padding: 0;
  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
}
.h3content {
  font-size: 14px;
  line-height: 23px;
}
.banner {
  background-image: url("@/assets/appimage/appimg01.png");
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  justify-content: center;
}
.banner_content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  display: block;
}
.h1title {
  width: 1200px;
  text-align: left;
  font-size: 36px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.h3content {
  align-self: flex-start;
  display: block;
  font-size: 14px;
  color: rgb(0, 0, 0);
  margin-top: 16px;
  font-weight: 400;
  text-align: left;
  max-width: 360px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.b1 {
  margin: 0 auto;
  padding: 0;
  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
  display: block;
}

.content_box1 {
  width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
  display: block;
}
.d1_title {
  text-align: center;
  font-family: PingFang SC;
  font-weight: 600;
  color: #2f3135;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 40px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.d1 {
  display: flex;
  row-gap: 0;
  column-gap: 0;
  flex-wrap: wrap;
}
.d1_item {
  box-sizing: border-box;
  padding: 68px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
}
.itemimg {
  max-width: 100% !important;
  width: 48px;
  height: 48px;
  display: initial;
  vertical-align: middle;
  border-style: solid;
  overflow-clip-margin: content-box;
  overflow: clip;
  box-sizing: border-box;
  border-width: 0;
}
.d1_item_title {
  text-align: center;
  font-family: PingFang SC;
  font-weight: 500;
  color: #2d2f34;
  font-size: 18px;
  line-height: 18px;
  margin: 16px 0;
  display: block;
}
.d1_item_content {
  font-family: PingFang SC;
  font-weight: 500;
  color: #2d2f34;
  font-size: 18px;
  line-height: 18px;
  margin: 16px 0;
  display: block;
}
.span_item_content {
  color: #2f3135;
  font-size: 14px;
  text-align: center;
}
.content_box2 {
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: #f0f0f0;
}
.d2 {
  margin-bottom: 40px;
  display: flex;
  row-gap: 70px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.d2_item {
  box-sizing: border-box;
  width: 380px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.d2itemimg {
  max-width: 100% !important;
  width: 60px;
  height: 60px;
  display: initial;
  vertical-align: middle;
  border-style: solid;
  box-sizing: border-box;
  border-width: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
}
.d2_right {
  box-sizing: border-box;
  padding-left: 16px;
  width: calc(100% - 60px);
  border-width: 0;
  border-style: solid;
  display: block;
}
.d2_right_content {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #2f3135;
  line-height: 22px;
  margin-top: 10px;
}
.d2_item_title {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #2f3135;
  line-height: 22px;
  margin-top: 10px;
  display: block;
}
.d2_item_content {
  margin-top: 10px;
  color: #73787f;
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 14px;
  font-weight: 400;
}
.content_box3 {
  background-image: url("@/assets/appimage/5-bg.png");
  width: 100%;
  margin: 0 auto;
  display: block;
}
.d3_title {
  margin-bottom: 50px;
  text-align: center;
  display: block;
}
.d3_span_title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
}
.d3 {
  display: flex;
  row-gap: 72px;
  column-gap: 128px;
  flex-wrap: wrap;
}
.d3_item {
  box-sizing: border-box;
  width: 536px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.d3itemimg {
  max-width: 100% !important;
  width: 60px;
  height: 60px;
  display: initial;
  border-style: solid;
  box-sizing: border-box;
  border-width: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
}
.d3_right {
  box-sizing: border-box;
  padding-left: 16px;
  width: calc(100% - 60px);
  display: block;
}
.d3_right_content {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 18px;
  display: block;
}
.d3_item_title {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 18px;
  display: block;
}
.d3_item_content {
  width: 460px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 26px;
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
.content_box4 {
  width: 100%;

  margin: 0 auto;
  display: block;
}
/* .d4{
    width: 1200px;
    display: flex;
    margin: 0 auto;
}
.d4_item{
    width: 300px;
    height: 202px;
    background: #ffffff;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.d4_span{
    font-size: 56px;
    font-family: BebasNeue-Regular, BebasNeue;
    font-weight: 400;
    color: #2f3135;
    line-height: 56px;
}
.d4_content{
    font-size: medium;
    text-align: center;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73787f;
    line-height: 16px;
    margin-top: 10px;
    display: block;
} */
</style>
