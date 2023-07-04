<template>
  <div class="box">
    <Header></Header>
    <div class="banner">
      <div class="banner_content">
        <h1 class="h1title">{{ h1title }}</h1>
        <h3 class="h3content">{{ h3content }}</h3>
      </div>
    </div>
    <div class="b1">
      <div class="content_box1">
        <h3 class="d1_title">需求场景</h3>
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
      <div class="content_box4">
        <div class="content_box1" style="padding: 40px 0; background-size: cover">
          <h3 class="d1_title">产品效能</h3>
          <div class="d4">
            <div class="d4_item" v-for="item in d4data" :key="item">
              <span class="d4_span">{{ item.value }}</span>
              <div class="d4_content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Header from "@/component/Header";
// // import IframeVue from "./Iframe.vue";

// import Footer from "@/component/Footer";
export default {
  name: "app01",
//   components: { Header, Footer },
  data() {
    return {
      h1title: "综合能源监测",
      h3content:
        "综合能源监测系统是针对企业的综合用能（例如电、水、燃气、蒸汽）进行全面数字化监测，适用于全行业企业，并且满足工业企业用能管理基本需求。实时远程监测企业用能情况；有效助您降低用能成本",
      d1data: [
        {
          src: require("@/assets/image/appimage/3-1.png"),
          title: "节省用能成本",
          content:
            "工厂生产车间、办公室、生活区、冷库等地方的电、水、气、冷能耗消耗大，需要系统提供数据智能决策指导",
        },
        {
          src: require("@/assets/image/appimage/3-2.png"),
          title: "事故迅速发现并处理",
          content:
            "人工巡检效率低，需要系统远程在线监控设备诊断故障，及时预警/报警，避免意外停机影响产品质量而造成损失",
        },
        {
          src: require("@/assets/image/appimage/3-3.png"),
          title: "满足政府政策要求",
          content:
            "国家发展改革委办公厅多次发文，要求重点用能单位开展覆盖全部资源消耗的综合监测管控系统建设行内容",
        },
      ],
      d2data: [
        {
          src: require("@/assets/image/appimage/4-1.png"),
          title: "能耗监测",
          content:
            "将能源计量仪表/关键设备实现集中监测、历史趋势曲线、为能耗异常追溯提供查询的数据源",
        },
        {
          src: require("@/assets/image/appimage/4-2.png"),
          title: "告警追朔",
          content:
            "主要有能耗告警和参数告警两类告警，还支持对报警规则和范围进行设定和规划",
        },
        {
          src: require("@/assets/image/appimage/4-3.png"),
          title: "能效分析",
          content: "可按空间维度、时间维度、能源维度进行能效分析。 及时了解实时能耗状况",
        },
        {
          src: require("@/assets/image/appimage/4-4.png"),
          title: "能效对标",
          content: "班组对标、生产线对标、标杆值对标。通过对标数据，制定节能改进方向",
        },
        {
          src: require("@/assets/image/appimage/4-5.png"),
          title: "能耗预测",
          content:
            "根据预测结果提前做好能耗平衡利用措施或者为以后的能源使用计划做相关指导",
        },
        {
          src: require("@/assets/image/appimage/4-6.png"),
          title: "能精细化管理输入文本",
          content: "支持PDA对产品、库位、单据条码，以及人员工作牌、装箱单的条码扫描应用",
        },
      ],
      d3data: [
        {
          src: require("@/assets/image/appimage/5-1.png"),
          title: "轻量化，低成本",
          content: "SaaS云化产品，分3年支付服务费用，3年租金=20%*企业自投资部署费用",
        },
        {
          src: require("@/assets/image/appimage/5-2.png"),
          title: "快部署、易运维",
          content: "非侵入式施工，可带电安装，无风险，1周完工，远程运维，在线升级",
        },
        {
          src: require("@/assets/image/appimage/5-3.png"),
          title: "标准化，案例多",
          content:
            "标准服务、标准功能、标准资费，目前平台客户300+家，涵盖各行各业企业客户",
        },
        {
          src: require("@/assets/image/appimage/5-4.png"),
          title: "可持续发展",
          content: "系统支持新型能源管理，如光伏管理、储能管理等，对新能源的使用分析对比",
        },
      ],
      d4data: [
        {
          value: "20%",
          content: "延长设备寿命",
        },
        {
          value: "10%",
          content: "提升平均节能率",
        },
        {
          value: "10%",
          content: "降低人力维护成本",
        },
        {
          value: "10%",
          content: "提高设备利用率",
        },
      ],
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
  background-image: url("@/assets/image/appimage/appimg01.png");
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

  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
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
  min-width: 750px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
}
.d1_item {
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 56px 48px;
}
.itemimg {
  max-width: 100% !important;
  width: 80px;
  height: 80px;
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

  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
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

  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
  font-weight: 600;
  color: #2f3135;
  line-height: 22px;
  margin-top: 10px;
}
.d2_item_title {
  font-size: 18px;

  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
  font-weight: 600;
  color: #2f3135;
  line-height: 22px;
  margin-top: 10px;
  display: block;
}
.d2_item_content {
  margin-top: 10px;
  color: #73787f;

  font-family: "PingFangSC", "Microsoft YaHei", sans-serif;
  font-size: 14px;
  font-weight: 400;
}
.content_box3 {
  background-image: url("@/assets/image/appimage/5-bg.png");
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
.d4 {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
.d4_item {
  width: 300px;
  height: 202px;
  background: #ffffff;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.d4_span {
  font-size: 56px;
  font-family: BebasNeue-Regular, BebasNeue;
  font-weight: 400;
  color: #2f3135;
  line-height: 56px;
}
.d4_content {
  font-size: medium;
  text-align: center;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73787f;
  line-height: 16px;
  margin-top: 10px;
  display: block;
}
</style>
