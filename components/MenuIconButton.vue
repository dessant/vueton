<template>
  <vn-icon-button
    ref="self"
    v-bind="$attrs"
    class="vn-menu-icon-button"
    @keydown.down="focusMenuItem('first', {openMenu: true})"
    @keydown.up="focusMenuItem('last', {openMenu: true})"
    @keydown.home="focusMenuItem('first')"
    @keydown.end="focusMenuItem('last')"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </vn-icon-button>
</template>

<script>
import {IconButton} from '../';
import {addRecentPointerEventListener} from '../utils/app';

export default {
  name: 'vn-menu-icon-button',

  components: {
    [IconButton.name]: IconButton
  },

  props: {
    menuRef: {
      type: String,
      default: ''
    },
    menuListRef: {
      type: String,
      default: ''
    }
  },

  data: function () {
    return {
      menu: null,
      menuList: null
    };
  },

  computed: {
    isMenuOpen: function () {
      return this.menu.modelValue;
    }
  },

  methods: {
    setup: function () {
      this.menu = this.$root.$refs[this.menuRef].$refs.self;
      this.menuList = this.$root.$refs[this.menuListRef]?.$refs.self;

      this.$el.addEventListener('focusout', this.hideMenuOnFocusOut);
      this.menu.contentEl.addEventListener('focusout', this.hideMenuOnFocusOut);

      addRecentPointerEventListener();

      window.addEventListener('pointerdown', this.hideMenuOnOutsideClick, {
        capture: true,
        passive: true
      });
    },

    showMenu: function () {
      this.menu.$emit('update:modelValue', true);
    },

    hideMenu: function () {
      this.menu.$emit('update:modelValue', false);
    },

    focusMenuItem: function (location, {openMenu = false} = {}) {
      if (openMenu && !this.isMenuOpen) {
        this.showMenu();
      } else {
        this.menuList?.focus(location);
      }
    },

    hideMenuOnFocusOut: async function (ev) {
      await this.$nextTick();

      if (
        this.isMenuOpen &&
        document.hasFocus() &&
        !window.recentPointerEvent &&
        // menu button is not receiving focus
        this.$el !== ev.relatedTarget &&
        // menu content is not receiving focus
        !this.menu.contentEl.contains(ev.relatedTarget) &&
        // menu button is not currently focused
        document.activeElement !== this.$el &&
        // menu content is not currently focused
        !this.menu.contentEl.contains(document.activeElement)
      ) {
        this.hideMenu();
      }
    },

    hideMenuOnOutsideClick: function (ev) {
      if (this.isMenuOpen) {
        const eventPath = ev.composedPath();

        if (
          !eventPath.includes(this.$el) &&
          !eventPath.includes(this.menu.contentEl)
        ) {
          this.hideMenu();
        }
      }
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
  & .vn-menu-icon-button {
  }
}
</style>
