import request from '../utils/request'

export async function login(data = {}) {
  const res = await request({
    url: 'users/wxlogin',
    method: 'POST',
    data
  })
  return res.data
}
