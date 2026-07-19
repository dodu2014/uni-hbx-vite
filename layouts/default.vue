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
  <view page="2332" class="border-t-warn-6 bg-warn-4 pt-3">
    <slot />
  </view>
</template>
