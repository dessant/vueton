<template>
  <v-card ref="self" v-bind="$attrs" class="vn-card">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-card>
</template>

<script>
export default {
  name: 'vn-card'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-card {
  }
}
</style>
