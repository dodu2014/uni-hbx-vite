<script setup lang="ts">
onLaunch(() => {
  console.log(`【APP】onLaunch`)

  // #ifdef APP
  plus.device.setWakelock(true)
  // #endif
})

onShow(() => {
  console.log(`【APP】onShow`)
})

onHide(() => {
  console.log(`【APP】onHide`)
})
</script>

<style lang="scss">
@use '@wot-ui/ui/styles/theme/index.scss' as *;

@import '@/style/variable.scss';
@import '@/style/global.scss';
@import '@/style/font/uhv.scss';
</style>
