<script setup lang="ts">
import IndexTest from '@/page/home/component/IndexTest.vue'

definePage({
  style: {
    navigationBarTitleText: '首页',
  },
})

onLoad(() => {
  // uni.hideTabBar()
})
</script>

<template>
  <view class="flex flex-col gap-4">
    <view>首页</view>
    <index-test />

    <wd-button type="primary">wot-ui primary</wd-button>
    <wd-button type="primary" variant="soft">wot-ui primary</wd-button>
    <wd-button type="primary" variant="dashed">wot-ui primary</wd-button>
    <wd-button type="primary" variant="plain">wot-ui primary</wd-button>

    <wd-card> 这是一个卡片组件 </wd-card>
  </view>
</template>
