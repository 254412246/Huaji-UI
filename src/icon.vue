<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
import './svg'

export default {
  name: 'GuluIcon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>