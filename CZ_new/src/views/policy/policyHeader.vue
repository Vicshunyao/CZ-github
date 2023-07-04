
<script setup>
import { useStore } from "vuex";
import { reactive, ref,provide,onMounted } from 'vue'
// const input = ref('')
import { Search } from '@element-plus/icons-vue'
import policy from '@/api/policy';
import router from '@/router';

const store = useStore();
const params =reactive({
  pageNum: "10",
    pageSize: "100",
    title:""


})
const data = ref([]);
const items = ref([]);
onMounted(() => {
      // 假设使用axios库进行数据请求
    //   axios.get('your-api-url').then(response => {
    //     data.value = response.data; // 将从后端获取的数组数据赋值给data
    //     store.commit('setData', data.value); // 将data.value传递给mutation
    //   }).catch(error => {
    //     console.error(error);
    //   });
    });
    
  
      
const SearchPageData = ref(['']);
const tableData = ref([]);
const tableData111 = ref([]);

// provide('SearchPageData', tableData);

const SearchPolicy = async()=>{ 
  const data = ref('Hello from parent');


  const res = await policy.policyList(params);
  data.value = res.data.records;
  store.commit('setData', data.value); 
  console.log(data.value)
  

  tableData.value =res.data.records

 
  // localStorage.setItem('SearchPageData.value', res.data.records);
  localStorage.setItem('tableData.value', SearchPageData.value);
  // console.log(data.value )
  // console.log(tableData.value )
  // SearchPageData.value =res.data.records;
  router.push('/search')

}
const handleChange=()=>{
  router.push('/policy01')
}



</script>

<template>
<el-header>
    <el-input size="large" v-model="params.title" @input="handleChange" placeholder="请输入您要查找的关键字" clearable style="width: 500px;"/>
    <el-button size="large" type="primary" :icon="Search" @click="SearchPolicy()">搜索</el-button>
</el-header>
</template>

<style lang='scss' scoped>
.el-header{
    background-color: rgb(255, 255, 255);
    width:100%;
    height: 85px;
    display: flex;
  justify-content: center;
  align-items: center;
}

</style>