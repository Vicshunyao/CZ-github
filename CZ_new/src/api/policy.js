import request from '@/util/request'
export default class {
    static policyList(data) {
        return request({
            url: "/policy/list",
            method: 'post',
            data: data
        })
    }
    static policyAdd(data) {
        return request({
            url: "/policy/add",
            method: 'post',
            data: data
        })
    }
    static policyFind(data) {
        return request({
            url: "/policy/find",
            method: 'post',
            data: data
        })
    }
    static policyUpdate(data) {
        return request({
            url: "/policy/update",
            method: 'post',
            data: data
        })
    }
    static policyRemove(data) {
        return request({
            url: "/policy/remove",
            method: 'post',
            data: data
        })
    }
    static policyDelete(query) {
        return request({
            url: "/policy/delete?id=" +query,
            method: 'post',
           
        })
    }
    static policySearch(query) {
        return request({
            
                url: '/policy/listPolicyByParams?params=' + query,
                method: 'post',
                // params: query
              })
            
    }

}