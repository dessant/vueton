<template>
  <v-progress-linear
    ref="self"
    v-bind="$attrs"
    class="vn-linear-progress"
    max="1"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-progress-linear>
</template>

<script>
export default {
  name: 'vn-linear-progress'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-linear-progress {
    border-radius: 3px;
    height: 6px !important;

    & .v-progress-linear__background {
      opacity: 0.24;
    }
  }
}
</style>
