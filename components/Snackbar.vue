<template>
  <v-snackbar ref="self" v-bind="$attrs" class="vn-snackbar">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'vn-snackbar'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-snackbar {
    margin: initial;
    margin-inline-end: initial;

    & .v-snackbar__wrapper {
      margin: 8px;
      left: initial !important;
      right: initial !important;
      transform: initial !important;

      min-width: 304px;
      @include vueton.theme-prop(background-color, inverse-surface);
      box-shadow: 0 3px 5px -1px #0000001f, 0 4px 4px 0 #00000014,
        0 1px 12px 0 #0000000f !important;
      border-radius: 24px !important;

      & .v-snackbar__content {
        @include vueton.theme-prop(color, inverse-on-surface);
      }

      & .v-snackbar__actions {
        display: flex;
        column-gap: 8px;
        margin-inline-end: 4px;

        & .vn-button {
          &.v-btn--variant-text:hover {
            & .v-btn__overlay {
              opacity: var(--md-sys-state-hover-state-layer-opacity);
            }
          }
        }
      }

      & .vn-icon-button {
        & .vn-icon {
          @include vueton.theme-prop(background-color, inverse-on-surface);
        }

        & .vn-icon-button__state {
          @include vueton.theme-prop(background-color, inverse-on-surface);
        }
      }
    }
  }

  & .v-theme--dark {
    &.vn-snackbar {
      & .v-snackbar__wrapper {
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.01),
          0 4px 4px 0 rgba(0, 0, 0, 0.03), 0 1px 12px 0 rgba(0, 0, 0, 0.03) !important;
      }
    }
  }
}
</style>
