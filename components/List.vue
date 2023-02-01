<template>
  <v-list ref="self" v-bind="$attrs" class="vn-list">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'vn-list'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-list {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
