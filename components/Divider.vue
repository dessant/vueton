<template>
  <v-divider ref="self" v-bind="$attrs" class="vn-divider">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-divider>
</template>

<script>
export default {
  name: 'vn-divider'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-divider {
    border-color: var(--md-ref-palette-neutral90);
    opacity: 1;
  }

  & .v-theme--dark {
    & .vn-divider {
      border-color: var(--md-ref-palette-neutral20);
    }
  }

  & .vn-menu,
  & .vn-dialog {
    & .vn-divider {
      @include vueton.theme-prop(border-color, outline-variant, !important);
    }
  }
}
</style>
