<template>
  <i class="vn-icon"></i>
</template>

<script>
export default {
  name: 'vn-icon',

  props: {
    src: {
      type: String,
      default: ''
    }
  },

  mounted: function () {
    const url = `url("${this.src}")`;

    this.$el.style.maskImage = url;
    this.$el.style.webkitMaskImage = url;
  }
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-icon {
    @include vueton.theme-prop(background-color, on-surface);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    width: 24px;
    height: 24px;
  }
}
</style>
