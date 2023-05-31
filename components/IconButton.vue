<template>
  <button
    class="vn-icon-button"
    :class="componentClasses"
    :title="on ? titleOn : title"
    :disabled="disabled"
    @click="toggleState"
    v-ripple
  >
    <span class="vn-icon-button__state"></span>
    <vn-icon :src="srcOn" v-if="on"></vn-icon>
    <vn-icon :src="src" v-else></vn-icon>
  </button>
</template>

<script>
import {Icon} from '../';

export default {
  name: 'vn-icon-button',

  components: {
    [Icon.name]: Icon
  },

  props: {
    src: {
      type: String,
      default: ''
    },
    srcOn: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleOn: {
      type: String,
      default: ''
    },
    on: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:on'],

  computed: {
    componentClasses: function () {
      return {
        'vn-icon-button--on': this.on
      };
    }
  },

  methods: {
    toggleState: function () {
      if (this.srcOn) {
        this.$emit('update:on', !this.on);
      }
    }
  }
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-icon-button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    & .vn-icon {
      z-index: 1;
    }

    & .vn-icon-button__state {
      position: absolute;
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 20px;
      opacity: 0;
      transition: opacity 15ms linear;
      @include vueton.theme-prop(background-color, on-surface-variant);
    }

    &:hover .vn-icon-button__state {
      opacity: var(--md-sys-state-hover-state-layer-opacity);
    }

    &:focus-visible {
      outline: none;

      & .vn-icon-button__state {
        opacity: var(--md-sys-state-focus-state-layer-opacity);
      }
    }
  }
}
</style>
