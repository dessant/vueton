<template>
  <v-app ref="self" v-bind="$attrs" class="vn-app">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'vn-app'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-app {
  }
}
</style>
