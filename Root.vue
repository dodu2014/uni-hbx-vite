<script setup lang="ts">
defineOptions({
  name: 'Root',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <view>
    <ku-root-view />
  </view>
</template>
