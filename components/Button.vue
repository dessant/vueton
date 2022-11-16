<template>
  <v-btn class="vn-button" variant="outlined" rounded><slot></slot></v-btn>
</template>

<script>
export default {
  name: 'vn-button'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-button {
    height: 40px !important;
    padding-left: 24px;
    padding-right: 24px;

    &.vn-icon--start,
    &.vn-icon--end {
      & .vn-icon {
        width: 18px;
        height: 18px;
      }
    }

    &.vn-icon--start {
      padding-left: 16px;

      & .vn-icon {
        margin-right: 8px;
      }
    }

    &.vn-icon--end {
      padding-right: 16px;

      & .vn-icon {
        margin-left: 8px;
      }
    }

    & .v-btn__content {
      text-transform: initial;
      @include vueton.typography(label-large);
    }
  }
}
</style>
