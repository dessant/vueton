<template>
  <i class="vn-icon" aria-hidden="true"></i>
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

  methods: {
    setup: function () {
      const url = `url("${this.src}")`;

      this.$el.style.maskImage = url;
      this.$el.style.webkitMaskImage = url;
    }
  },

  mounted: function () {
    this.setup();
  }
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-icon {
    @include vueton.theme-prop(background-color, on-surface-variant);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    width: 24px;
    height: 24px;
  }
}
</style>
