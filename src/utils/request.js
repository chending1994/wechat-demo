import wepy from 'wepy'

const baseUrl = 'http://localhost:8888/api/public/v1/'

export default (params = {}) => {
  params.url = `${baseUrl}${params.url}`
  return wepy.request(params)
}