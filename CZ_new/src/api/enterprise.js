import request from '@/util/request'

// 查询入住企业信息列表
export function listCompany(query) {
  return request({
    url: '/company/company/list',
    method: 'get',
    params: query
  })
}
// 查询企业认证信息
export function listEnterprise(query) {
  return request({
    url: '/enterprise/list',
    method: 'get',
    params: query
  })
}
// 根据用户编号查询企业认证信息
export function getEnterpriseById(query) {
  return request({
    url: '/enterprise/listEnterpriseByUserId?userId=' + query,
    method: 'post',
    // params: query
  })
}


// 修改认证企业状态
export function updateEnterprise(data) {
    return request({
      url: '/enterprise/updateEnterprise',
      method: 'post',
      data: data
    })
  }

// 查询入住企业信息详细
export function getCompany(companyId) {
  return request({
    url: '/company/company/' + companyId,
    method: 'get'
  })
}

// 新增入住企业信息
export function addCompany(data) {
  return request({
    url: '/company/company',
    method: 'post',
    data: data
  })
}

// 修改入住企业信息
export function updateCompany(data) {
  return request({
    url: '/company/company',
    method: 'put',
    data: data
  })
}

// 删除入住企业信息
export function delCompany(companyId) {
  return request({
    url: '/company/company/' + companyId,
    method: 'delete'
  })
}

// 导出入住企业信息
export function exportCompany(query) {
  return request({
    url: '/company/company/export',
    method: 'get',
    params: query
  })
}