<script scoped>
export default {

    data() {
        return {
            activeMenu: 'pain-points',// 默认选中的菜单项
            tooltipContent: '点击跳转到网站',
            showPhone: false,
            showWebsiteUrl: false,
            phoneNumber: '123-456-7890',
            websiteUrl: 'https://your-website.com'
        };
    },
   


    methods: {
        // goToOtherRoute() {
        //   // 在点击卡片时触发的方法
        //   this.$router.push('/yysd/jygl/ccy'); // 替换为你想要跳转的路由路径
        // },
        // goToOtherRoute1() {
        //   // 在点击长方形时触发的方法
        //   this.$router.push('/other-route'); // 替换为您要跳转的路由路径
        // },
        handleMenuSelect(index) {
            // 处理菜单项选择事件
            this.activeMenu = index;
            const section = document.getElementById(index);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        redirectToWebsite() {
            window.location.href = this.websiteUrl;
        },
        showPhoneNumber() {
            this.showPhone = true;
        },
        hidePhoneNumber() {
            this.showPhone = false;
        },
        showWebsite() {
            this.showWebsiteUrl = true;
        },
        hideWebsite() {
            this.showWebsiteUrl = false;
        }

    },

};
</script>

<template>
    <el-header class="header1">
        <div class="title-box">
            <div>
                <span class="title">综合能源监测</span>
            </div>
            <div class="title-text">
                <p>综合能源监测系统针对企业的综合用能（例如电、水、燃气、蒸汽）进行全面数字化监测，适用于全行业企业，并且满足工业企业用能管理基本需求。实时远程监测企业用能情况；有效助您降低用能成本。</p>
            </div>
            <el-button type="primary" style="margin-top: 30px;">相关文档</el-button>
        </div>
    </el-header>
    <el-main class="mainbox">
        <!-- <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    style="justify-content: center;"
    >
        <el-menu-item index="1" style="margin-right: 50px;">需求场景</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
        <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
        <el-menu-item index="4" style="margin-right: 50px;">产品效能</el-menu-item>
    </el-menu> -->

        <el-affix :offset="0">
            <div class="sticky-menu">
                <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect"
                    style="justify-content: center;">
                    <el-menu-item index="1" style="margin-right: 50px;">需求场景</el-menu-item>
                    <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
                    <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
                    <el-menu-item index="4">产品效能</el-menu-item>
                </el-menu>
            </div>
        </el-affix>

        <div class="no1" id="1">
            <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">需求场景</span>
            <div class="box1">
                <div class="box1-1">
                    <img src="@/assets/product-center/3-1.png" />
                    <h1 class="box1-1-title">节约用能成本</h1>
                    <p class="box1-1-text">工厂生产车间、办公室、生活区、冷库等地方的电、水、气、冷能耗消耗大，需要系统提供数据智能决策指导</p>
                </div>
                <div class="box1-1">
                    <img src="@/assets/product-center/3-2.png" />
                    <h1 class="box1-1-title">事故迅速发现并处理</h1>
                    <p class="box1-1-text">人工巡检效率低，需要系统远程在线监控设备诊断故障，及时预警/报警，避免意外停机影响产品质量而造成损失</p>
                </div>
                <div class="box1-1-last">
                    <img src="@/assets/product-center/3-3.png" />
                    <h1 class="box1-1-title">满足政府政策要求</h1>
                    <p class="box1-1-text">国家发展改革委办公厅多次发文，要求重点用能单位开展覆盖全部资源消耗的综合监测管控系统建设行内容</p>
                </div>
            </div>

        </div>
        <div class="no2" id="2">
            <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">产品功能</span>
            <div class="box2">
                <div class="box2-2">
                    <img class="box2-2-img" src="@/assets/product-center/4-1.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">能耗监测</h1>
                        <p class="box2-2-text">将能源计量仪表/关键设备实现集中监测、历史趋势曲线、为能耗异常追溯提供查询的数据源</p>
                    </div>
                </div>
                <div class="box2-2">
                    <img class="box2-2-img" src="@/assets/product-center/4-2.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">告警追朔</h1>
                        <p class="box2-2-text">主要有能耗告警和参数告警两类告警，还支持对报警规则和范围进行设定和规划</p>
                    </div>
                </div>
                <div class="box2-2-last">
                    <img class="box2-2-img" src="@/assets/product-center/4-3.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">能效分析</h1>
                        <p class="box2-2-text">可按空间维度、时间维度、能源维度进行能效分析。 及时了解实时能耗状况</p>
                    </div>
                </div>

            </div>
            <div class="box2">
                <div class="box2-2">
                    <img class="box2-2-img" src="@/assets/product-center/4-4.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">能效对标</h1>
                        <p class="box2-2-text">班组对标、生产线对标、标杆值对标。通过对标数据，制定节能改进方向</p>
                    </div>
                </div>
                <div class="box2-2">
                    <img class="box2-2-img" src="@/assets/product-center/4-5.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">能耗预测</h1>
                        <p class="box2-2-text">根据预测结果提前做好能耗平衡利用措施或者为以后的能源使用计划做相关指导</p>
                    </div>
                </div>
                <div class="box2-2-last">
                    <img class="box2-2-img" src="@/assets/product-center/4-6.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box2-2-title">能精细化管理输入文本</h1>
                        <p class="box2-2-text">支持PDA对产品、库位、单据条码，以及人员工作牌、装箱单的条码扫描应用。</p>
                    </div>
                </div>

            </div>

        </div>

        <div class="no3" id="3">
            <span style="margin-top: 60px;font-size: 25px;font-weight: 800;color: #fff;margin-bottom: 20px;">核心优势</span>
            <span style="color: #fff;">完善、成熟的多行业解决方案，帮助客户轻松快速进行只能决策</span>
            <div class="box3">
                <div class="box3-3">
                    <img class="box3-3-img" src="@/assets/product-center/5-1.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box3-3-title">轻量化，低成本</h1>
                        <p class="box3-3-text">SaaS云化产品，分3年支付服务费用，3年租金=20%*企业自投资部署费用</p>
                    </div>
                </div>
                <div class="box3-3">
                    <img class="box3-3-img" src="@/assets/product-center/5-2.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box3-3-title">快部署、易运维</h1>
                        <p class="box3-3-text">非侵入式施工，可带电安装，无风险，1周完工，远程运维，在线升级</p>
                    </div>
                </div>


            </div>
            <div class="box3">
                <div class="box3-3">
                    <img class="box3-3-img" src="@/assets/product-center/5-3.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box3-3-title">标准化，案例多</h1>
                        <p class="box3-3-text">标准服务、标准功能、标准资费，目前平台客户300+家，涵盖各行各业企业客户</p>
                    </div>
                </div>
                <div class="box3-3">
                    <img class="box3-3-img" src="@/assets/product-center/5-4.png" />
                    <div style="margin-left: 20px ;">
                        <h1 class="box3-3-title">可持续发展</h1>
                        <p class="box3-3-text">系统支持新型能源管理，如光伏管理、储能管理等，对新能源的使用分析对比</p>
                    </div>
                </div>


            </div>

        </div>
        <div class="no4" id="4">
            <span style="font-size: 30px;margin-top: 40px;">产品效能</span>
            <div class="box4">
                <div class="box4-4">
                    <span class="no4-text1">20%</span>
                    <span class="no4-text2">延长设备寿命</span>
                </div>
                <div class="box4-4">
                    <span class="no4-text1">10%</span>
                    <span class="no4-text2">提升平均节能率</span>
                </div>
                <div class="box4-4">
                    <span class="no4-text1">10%</span>
                    <span class="no4-text2">降低人力维护成本</span>
                </div>
                <div class="box4-4-last">
                    <span class="no4-text1">10%</span>
                    <span class="no4-text2">提高设备利用率</span>
                </div>
            </div>
        </div>

        <div class="area" >
        <el-tooltip content="tooltipContent" placement="left" width="190" trigger="hover" 
    height="220" popper-class="white-tooltip" effect="light">
            <template #content style="background-color:#ffffff;">
          <el-button @mouseenter="showPhoneNumber" @mouseleave="hidePhoneNumber" type="primary">咨询电话</el-button>
          <el-button @mouseenter="showWebsite" @mouseleave="hideWebsite" @click="redirectToWebsite" type="primary">咨询网站</el-button>
          <div v-if="showPhone" class="tooltip-text">{{ phoneNumber }}</div>
          <div v-if="showWebsiteUrl" class="tooltip-text">{{ websiteUrl }}</div>
        </template>
            <div style="display:flex;flex-direction:column;justify-content:center;align-items:center">
        <img src="@/assets/product-center/area-img.png"/>
        <div style="width: 20px;">
        <span style="font-size: 15px;">咨询申请</span>
    </div>
</div>
</el-tooltip>
    </div>

      


    </el-main>
</template>

<style lang='scss' scoped>
.drag-area {
    position: fixed;
    height: 150px;
    right: 20px;
    top: 80%;
    z-index: 6666;
    padding: 13px;
    width: fit-content;
    opacity: 1;

    border-radius: 8px;
    box-shadow: 0px 2px 15px 0px rgba(9, 41, 77, 0.15);
    cursor: move;
    user-select: none;
    text-align: center;

    .btnn {
        display: flex;
        flex-direction: column;
        // background-color: rgba(55, 94, 246, 0.1);
        // font-size: 18px;
        color: #090909;
        user-select: none;
        border: none;
        height: 110px;
        // margin: auto;

    }

    .wenzi {
        font-size: 16px;
    }

    .beijingtu {
        display: block;
        width: 30px;
        height: 100%;
        color: transparent;
        background: url("@/assets/image/icon.png") no-repeat;
    }
}

.cemian {
    border: none;
}

.my-popover-content {
    // margin-top: 3px;
    height: 63px !important;
}


.header1 {
    padding-left: 0;
    padding-right: 0%;
    padding-top: 0;
    width: auto;
    height: 400px;
    background-image: url('@/assets/product-center/monitor.png');
    background-size: 100% 400px;
    display: flex;
    // justify-content: center;
    align-items: center;

    @media screen and(max-width:768px) {
        height: 250px;
        background-size: 100% 250px;

    }
}

.title-box {
    margin-left: 100px;

    @media screen and(max-width:768px) {
        margin-left: 50px;
    }
}

.title {
    display: flex;
    font-size: 40px;
    font-weight: 900;
    color: #000;

    @media screen and(max-width:768px) {
        font-size: 20px;
        font-weight: 600;
    }
}

.title-text {
    font-size: 20px;
    width: 400px;
    margin-top: 10px;

    @media screen and(max-width:768px) {
        font-size: 10px;
        width: 350px;

    }
}

.mainbox {
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
}

.no1 {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 500px;

    @media screen and(max-width:768px) {
        height: 450px;
    }
}

.box1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 70px;
}

.box1-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin-right: 90px;

    @media screen and(max-width:768px) {
        width: 200px;
        margin-right: 30px;
    }

}

.box1-1-title {
    margin-top: 20px;

    @media screen and(max-width:768px) {
        font-size: 13px;

    }
}

.box1-1-text {
    margin-top: 40px;

    @media screen and(max-width:768px) {
        font-size: 10px;
        width: 150px;
        height: 150px;
    }
}

.box1-1-last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;

    @media screen and(max-width:768px) {
        width: 200px;
    }
}

.no2 {
    background-color: #eee;
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and(max-width:768px) {
        height: 650px;
    }
}

.box2 {
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    @media screen and(max-width:768px) {
        flex-direction: column;

    }
}

.box2-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 450px;
    margin-right: 20px;

    @media screen and(max-width:768px) {
        width: 600px;
        margin-top: 20px;
    }
}

.box2-2-img {
    width: 50px;
    height: 50px;
}

.box2-2-title {
    margin-bottom: 10px;
}

.box2-2-text {
    font-size: 14px;
}

.box2-2-last {
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    width: 450px;

    @media screen and(max-width:768px) {
        width: 600px;
        margin-top: 20px;
    }
}

.no3 {
    background-image: url('@/assets/product-center/5-bg.png');
    height: 450px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and(max-width: 768px) {
        height: 500px;
    }
}

.box3 {
    display: flex;
    flex-direction: row;
    margin-top: 70px;

    // flex-direction:column;
    @media screen and(max-width: 768px) {
        flex-direction: column;
        margin-top: 20px;
    }
}

.box3-3 {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    width: 550px;
    margin-right: 100px;

    @media screen and(max-width: 768px) {
        margin-top: 20px;

    }
}

.box3-3-last {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 550px;

}

.box3-3-img {
    width: 70px;
    height: 70px;

    @media screen and(max-width: 768px) {
        width: 50px;
        height: 50px;
    }
}

.box3-3-title {
    margin-bottom: 10px;
    color: #fff;
}

.box3-3-text {
    font-size: 14px;
    color: #fff;
}

.no4 {
    background-color: #fff;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.box4 {
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
}

.box4-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 150px;

    @media screen and(max-width: 768px) {
        margin-right: 50px;
    }
}

.box4-4-last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.no4-text1 {
    font-size: 60px;
}

.no4-text2 {
    font-size: 20px;
    color: #777;
}

::v-deep .el-tooltip__popper {
    background-color: #fff;
}

.area {
    position: fixed;
    height: 120px;
    right: 30px;
    top: 75%;
    z-index: 6666;
    padding: 20px;
    width: fit-content;
    opacity: 1;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 15px 0 rgba(9, 41, 77, .15);
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>