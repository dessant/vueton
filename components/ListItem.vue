<template>
  <v-list-item ref="self" v-bind="$attrs" class="vn-list-item">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: 'vn-list-item'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-list-item {
    padding: 0 !important;
    max-width: initial;
    @include vueton.theme-prop(color, on-surface);

    & .v-list-item__prepend {
      margin-left: 16px;
    }

    & .v-list-item-title {
      padding-left: 16px;
      padding-right: 24px;
      @include vueton.typography(body-large);
      letter-spacing: 0.15px;
    }

    & .v-list-item__append {
      margin-right: 12px;
    }

    & .v-list-item__overlay {
      transition: opacity 15ms linear;
    }
  }
}
</style>
