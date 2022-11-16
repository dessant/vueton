<template>
  <v-progress-linear class="vn-linear-progress" max="1"></v-progress-linear>
</template>

<script>
export default {
  name: 'vn-progress'
};
</script>

<style lang="scss">
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
