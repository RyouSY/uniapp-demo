<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresh"
    :refresher-triggered="isTriggered"
    >
    <PageSkeleton v-if="isLoding" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerItem" />
      <!-- 分类 -->
      <CategoryPanel :list="categoryItem" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotItem" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from './componetes/CustomNavbar.vue'
import CategoryPanel from './componetes/CategoryPanel.vue'
import HotPanel from './componetes/HotPanel.vue'
import PageSkeleton from './componetes/PageSkeleton.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home'
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { useGetGuessApi } from '@/composables/useGetGuess'


const bannerItem = ref<BannerItem[]>([])
const categoryItem = ref<CategoryItem[]>([])
const hotItem = ref<HotItem[]>([])

const { onScrolltolower, guessRef } = useGetGuessApi()

const isTriggered = ref(false)
const isLoding = ref(true)

//获取首页banner
const getHomeBannerData = async () => {
  const result = await getHomeBanner()
  bannerItem.value = result.result
}

//获取首页分类
const getHomeCategoryData = async () => {
  const result = await getHomeCategory()
  categoryItem.value = result.result
}

//获取首页热门推荐
const getHomeHotData = async () => {
  const result = await getHomeHot()
  hotItem.value = result.result
}


//下拉刷新数据
const onRefresh = async () => {
  isTriggered.value = true
  guessRef.value?.reset()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getHomeGoodsGuessLikeData()])
  isTriggered.value = false
  uni.showToast({
    icon: 'none',
    title: '刷新成功~'
  })
}

//生命周期函数，当页面加载时调用
onLoad( async () => {
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoding.value = false
})

</script>

<style lang="scss">
page{
  background: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
}
</style>
