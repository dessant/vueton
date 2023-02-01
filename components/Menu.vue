<template>
  <v-menu ref="self" v-bind="$attrs" class="vn-menu">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-menu>
</template>

<script>
export default {
  name: 'vn-menu'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-menu {
    & .v-overlay__content {
      max-width: calc(100vw - 48px) !important;
      border-radius: 16px;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      overflow: hidden;

      & .v-list {
        padding-top: 0;
        padding-bottom: 0;
        box-shadow: none;
        @include vueton.theme-prop(background-color, menu-surface);

        & .v-list-item {
          padding-left: 0;
          padding-right: 0;
          @include vueton.theme-prop(color, on-surface);

          & .v-list-item__prepend {
            margin-left: 12px;
          }

          & .v-list-item-title {
            padding-left: 12px;
            padding-right: 36px;
            @include vueton.typography(body-large);
            letter-spacing: 0.15px;
          }

          & .v-list-item__append {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
