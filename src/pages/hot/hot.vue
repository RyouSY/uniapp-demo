<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="hotBanner"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in hotArr"
        class="text"
        :class="{ active: isActive === index }"
        @tap="isActive = index"
        :key="item.id"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) in hotArr"
      v-show="isActive === index"
      @scrolltolower="onScrolltolower"
      :key="item.id"
    >
      <view class="goods" >
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
       {{ item.finish ? '没有更多数据~' : '正在加载...' }}
       </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getHotRecommendAPI } from '@/services/hot'
import { ref } from 'vue';
import type { SubTypeItem } from '@/types/hot';

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

//页面数据
const props = defineProps<{type: string}>()
//确定展示哪个菜单的内容
const isActive = ref(0)
//页面banner
const hotBanner = ref('')
//当前页面数据
const hotArr = ref<(SubTypeItem & { finish?: boolean })[]>([])
//获取到页面的标题
const hotTitle = hotMap.find(v => v.type === props.type)
//设置页面标题
uni.setNavigationBarTitle({
  title: hotTitle.title
})
//获取对应页面的数据
const getHotData = async () => {
  const result = await getHotRecommendAPI(hotTitle.url)
  hotArr.value = result.result.subTypes
  hotBanner.value = result.result.bannerPicture
}
//获取分页数据
const onScrolltolower = async () => {
    const curData = hotArr.value[isActive.value]
    // 分页条件
    if (curData.goodsItems.page < curData.goodsItems.pages) {
      // 当前页码累加
      curData.goodsItems.page++
    } else {
      // 标记已结束
      curData.finish = true
      // 退出并轻提示
      return uni.showToast({ icon: 'none', title: '没有更多数据了~' })
    }

  curData.goodsItems.page++

  const result = await getHotRecommendAPI(hotTitle.url, {
    subType: curData.id,
    page: curData.goodsItems.page,
    pageSize: curData.goodsItems.pageSize
  })
  const newData = result.result.subTypes[isActive.value]
  curData.goodsItems.items.push(...newData.goodsItems.items)
}
onLoad(() => {
  getHotData()
})

</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
