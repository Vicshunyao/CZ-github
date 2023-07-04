import request from '@/util/request'
export default class {
    static MessEdit(params) {
        return request({
            url: '/message/edit',
            method: 'post',
            data: params,
           

        })
    }
    static MessAdd(params) {
        return request({
            url: '/message/add',
            method: 'post',
            data: params,
           

        })
    }
    static MessDele(params) {
        return request({
            url: '/message/delete',
            method: 'post',
            params,
           
           

        })
    }
    static MessList() {
        return request({
            url: '/message/list',
            
         
           

        })
    }
 
   

}
