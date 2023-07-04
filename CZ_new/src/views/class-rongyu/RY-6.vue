<script setup>
import policy from "@/api/policy";
import formatTime from "@/util/formatTime";
import { ref, onMounted, reactive, computed, watch } from "vue";

const listForm = reactive({
  pageNum: "10",
  pageSize: "100"


});
const tableData1 = ref([]);
const array1 = ref([]);
const array11 = ref([]);
const array12 = ref([]);
const array13 = ref([]);
const array14 = ref([]);

onMounted(() => {

  getpolicyList();
 
 
});
const getpolicyList = async () => {
  const res = await policy.policyList(listForm);
  console.log(res.data.records)
  tableData1.value = res.data.records;
array1.value=  res.data.records.filter((item, index) => {
              return item.type == '荣誉类';})
              array11.value=  res.data.records.filter((item, index) => {
              return item.name == '省级新技术新产品';})    
              array12.value=  res.data.records.filter((item, index) => {
              return item.name == '省级';})    

}
const openFile = (row) => {
  const fileUrl = row.documentOssUrl;
  // console.log(fileUrl);
  window.open(fileUrl, '_blank');

};
// 定义要根据的变量
const conditionVariable = ref(true);

// 使用computed属性将原始数组分成两个数组
const dividedArrays = computed(() => {
  const result1 = [];
  const result2 = [];

  for (let i = 0; i < tableData1.value.length; i++) {
    const item = tableData1.value[i];
    if (item.type === '资金类') {
      console.log(item)
      result1.push(item);
    } else {
      result2.push(item);
    }
  }

  return [result1, result2];
});

// 监听条件变量的变化，更新分割后的数组
watch(
  () => conditionVariable.value,
  (newValue) => {
    if (newValue) {
      [array1.value, array2.value] = dividedArrays.value;
    } else {
      [array2.value, array1.value] = dividedArrays.value;
    }
  }
);


//  const divideArrayByCondition = () => {
 
  

//     console.log(array1.value)

// };



const tableData = [
  {
    date: '2022-10-24',
    name: '关于组织2023年度江苏省工业与信息产业转型升级专项资金项目申报入库的通知',
  },
  {
    date: '2022-04-13',
    name: '关于组织推荐中央财政支持第三批重点“小巨人”企业的通知',
  },
  {
    date: '2023-02-20',
    name: '关于开展省级战略性新兴产业融合集群发展示范申报的通知',
  },
  {
    date: '2022-01-17',
    name: '关于组织申报2022年省级现代化服务业发展专项资金项目的通知',
  },
  {
    date: '2023-02-20',
    name: '关于组织申报2023年省级战略性新兴产业发展专项资金项目的通知',
  },
  {
    date: '2022-01-30',
    name: '《关于促进产业高质量发展的若干政策》的通知',
  },
  {
    date: '2023-01-20',
    name: '关于印发《常州市推进新能源之都建设政策措施》的通知',
  },
  {
    date: '2022-06-20',
    name: '关于印发《常州市制造业企业智能化改造和数字化转型专项贷款贴息奖励实施细则（试行）》的通知',
  },
  {
    date: '2022-08-06',
    name: '关于印发《常州市中小微企业发展专项资金实施细则》的通知',
  },
  {
    date: '2022-10-10',
    name: '关于印发《常州市重大项目设备投入奖励实施办法（修订）》的通知',
  },
  {
    date: '2022-08-23',
    name: '关于印发常州市“智改数转数字贷”风险补偿资金管理实施意见（试行）的通知',
  },
  {
    date: '2020-07-27',
    name: '关于印发常州市工业互联网转型资金实施细则的通知',
  },
  {
    date: '2022-04-24',
    name: '关于组织2022年度常州市节能及发展循环经济专项资金项目申报的通知',
  },
  {
    date: '2023-03-13',
    name: '市政府办公室关于印发《关于促进创新发展的若干政策》系列实施细则的通知',
  },
  {
    date: '2022-06-30',
    name: '印发《关于在全市智能化改造和数字化转型中推进“十链突破、百企领航、千景应用”的实施方案》的通知',
  },
  {
    date: '2022-09-03',
    name: '关于印发《常州经开区关于促进制造业“智改数转”的行动方案（2022-2024年）》的通知',
  },
  {
    date: '2021-07-30',
    name: '关于印发《常州经开区推进高质量发展若干政策（修订）》的通知',
  },]
</script>

<template>
 
  <el-table :data="array11" @row-click="openFile">
    <el-table-column prop="title" label="文件名称" width="870" />
    <el-table-column label="日期">
      <template #default="scope">
        {{ formatTime.getTime(scope.row.createdTime) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang='scss' scoped>
.el-table {
  width: 980px;
}
</style>