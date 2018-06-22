import request from '../utils/request'

export async function create(data = {}) {
  const res = await request({
    url: 'my/orders/create',
    method: 'POST',
    data,
    header: {
      Authorization: wx.getStorageSync('token')
    }
  })
  return res.data
}

export async function getAllByType(type) {
  const res = await request({
    url: 'my/orders/all',
    method: 'GET',
    data: {
      type
    },
    header: {
      Authorization: wx.getStorageSync('token')
    }
  })
  return res.data.data
}
