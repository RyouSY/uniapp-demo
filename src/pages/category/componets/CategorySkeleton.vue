<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-220 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view scroll-y="true" class="primary primary">
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-855 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-812 sk-text">美食</text>
          </view>
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-871 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-426 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-623 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-53 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-623 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-167 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-303 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary secondary">
          <view is="components/XtxSwiper" class="banner banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper circular="true" interval="3000" current="0" autoplay="false">
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-9412-414 sk-text">钱包/胸包</text>
              <navigator class="more sk-transparent sk-text-30-8824-670 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-6 sk-text">轻松出行复古经典老花时尚女式钥匙包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-647 sk-text">88.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-43 sk-text">别致优雅男式新潮头层牛皮钥匙包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-723 sk-text">106.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-204 sk-text">女式复古蜥蜴纹质感牛皮钱包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-947 sk-text">104.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-737 sk-text">自我态度男式多功能多层格局休闲胸包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-540 sk-text">146.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-989 sk-text">一包在手想走就走男士风琴多卡位便携卡包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-14 sk-text">121.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-801 sk-text">休闲潮流运动男士胸包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-893 sk-text">136.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-67 sk-text">品质在内格调在外头层真皮防消磁钥匙卡包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-33 sk-text">80.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-991 sk-text">超能装多功能出行胸包</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-540 sk-text">49.00</text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-9412-443 sk-text">女式靴子</text>
              <navigator class="more sk-transparent sk-text-30-8824-7 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style scoped>
 .sk-transparent {
     color: transparent !important;
   }
 .sk-text-14-2857-220 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 36.7991rpx;
     position: relative !important;
   }
 .sk-text {
     background-origin: content-box !important;
     background-clip: content-box !important;
     background-color: transparent !important;
     color: transparent !important;
     background-repeat: repeat-y !important;
   }
 .sk-text-14-2857-855 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-812 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-871 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-426 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-623 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-53 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-167 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-14-2857-303 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 34.3458rpx;
     position: relative !important;
   }
 .sk-text-27-9412-414 {
     background-image: linear-gradient(transparent 27.9412%, #EEEEEE 0%, #EEEEEE 72.0588%, transparent 0%) !important;
     background-size: 100% 59.5794rpx;
     position: relative !important;
   }
 .sk-text-30-8824-670 {
     background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
     background-size: 100% 59.5794rpx;
     position: relative !important;
   }
 .sk-text-14-2857-6 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-opacity {
     opacity: 0 !important;
   }
 .sk-text-14-2857-647 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-43 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-723 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-204 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-947 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-737 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-540 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-989 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-14 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-801 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-893 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-67 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-14-2857-33 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 31.8925rpx;
     position: relative !important;
   }
 .sk-text-14-2857-991 {
     background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
     background-size: 100% 29.4393rpx;
     position: relative !important;
   }
 .sk-text-27-9412-443 {
     background-image: linear-gradient(transparent 27.9412%, #EEEEEE 0%, #EEEEEE 72.0588%, transparent 0%) !important;
     background-size: 100% 59.5794rpx;
     position: relative !important;
   }
 .sk-text-30-8824-7 {
     background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
     background-size: 100% 59.5794rpx;
     position: relative !important;
   }
 .sk-image {
     background: #EFEFEF !important;
   }
 .sk-pseudo::before, .sk-pseudo::after {
       background: #EFEFEF !important;
       background-image: none !important;
       color: transparent !important;
       border-color: transparent !important;
     }
 .sk-pseudo-rect::before, .sk-pseudo-rect::after {
       border-radius: 0 !important;
     }
 .sk-pseudo-circle::before, .sk-pseudo-circle::after {
       border-radius: 50% !important;
     }
 .sk-container {
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     overflow: hidden;
     background-color: transparent;
   }
</style>
