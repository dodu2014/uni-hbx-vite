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
  <view>
    <view>首页</view>
    <index-test />
  </view>
</template>
