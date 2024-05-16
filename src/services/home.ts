import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'

//获取banner
export const getHomeBanner = ( distributionSite = 1 ) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite
    }

  })
}

//获取分类
export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET'
  })
}

//获取热门推荐
export const getHomeHot = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET'
  })
}

//获取猜你喜欢
export const getHomeGoodsGuessLike = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}

