import request from '../utils/request'

/**
 * 获取轮播图数据
 */
export async function getSwiper() {
  const res = await request({
    url: 'home/swiperdata'
  })
  return res.data.data
}

/**
 * 获取导航分类数据
 */
export async function getNavCats() {
  const res = await request({
    url: 'home/catitems'
  })
  return res.data.data
}

/**
 * 获取楼层数据
 */
export async function getFloor() {
  const res = await request({
    url: 'home/floordata'
  })
  return res.data.data
}
