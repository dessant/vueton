<template>
  <v-card-actions ref="self" v-bind="$attrs" class="vn-card-actions">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-card-actions>
</template>

<script>
export default {
  name: 'vn-card-actions'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-card-actions {
  }
}
</style>
