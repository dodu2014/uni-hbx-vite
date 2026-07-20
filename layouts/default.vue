<script lang="ts" setup></script>

<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared',
  },
}
</script>

<template>
  <view class="border-t-warn-6 bg-red pt-3">
    <slot />
  </view>
</template>
