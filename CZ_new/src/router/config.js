
import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd.vue'
import UserList  from '../views/user-manage/UserList.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import NewsEdit from '../views/news-manage/NewsEdit.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import ProductEdit from '../views/product-manage/ProductEdit.vue'
import NotFound from '../views/notfound/NotFound.vue'
import app01 from '../views/APP/AppView/app01.vue'
import app02 from '../views/APP/AppView/app02.vue'
import app03 from '../views/APP/AppView/app03.vue'
import app04 from '../views/APP/AppView/app04.vue'

const  routes = [
    {
        path:"/app01",
        component:app01
    },
    {
        path:"/app02",
        component:app02
    },
    {
        path:"/app03",
        component:app03
    },
    {
        path:"/app04",
        component:app04
    },



    // 
    {
        path:"/index",
        component:Home
    },
    {
        path:"/center",
        component:Center
    },
    {
        path:"/user-manage/adduser",
        component:UserAdd,
        requireAdmin:true
    },
    {
        path:"/user-manage/userlist",
        component:UserList,
        requireAdmin:true
    },

    {
        path:"/news-manage/addnews",
        component:NewsAdd
    },
    {
        path:"/news-manage/newslist",
        component:NewsList
    },
    {
        path:"/news-manage/editnews/:id",
        component:NewsEdit
    },

    {
        path:"/product-manage/addproduct",
        component:ProductAdd
    },
    {
        path:"/product-manage/productlist",
        component:ProductList
    },

    {
        path:"/product-manage/editproduct/:id",
        component:ProductEdit
    },
    {
        path:"/",
        redirect:"/index"
    },
    { 
        path:"/:pathMatch(.*)*",
        name:"Notfound",
        component:NotFound
    }
]

export default routes