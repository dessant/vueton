<template>
  <v-card-text ref="self" v-bind="$attrs" class="vn-card-text">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-card-text>
</template>

<script>
export default {
  name: 'vn-card-text'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-card-text {
  }
}
</style>
