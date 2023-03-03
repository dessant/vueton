<template>
  <v-dialog ref="self" v-bind="$attrs" class="vn-dialog">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'vn-dialog'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-dialog {
    & .v-overlay__scrim {
      @include vueton.theme-prop(background-color, scrim);
    }

    & .v-overlay__content {
      max-width: min(calc(100% - 48px), 560px);
      border-radius: 28px;
      overflow: hidden;
    }

    & .vn-card {
      & .vn-card-title {
        padding-top: 24px !important;
        padding-bottom: 0px !important;
        padding-left: 24px !important;
        padding-right: 24px !important;

        @include vueton.typography(title-large, !important);
      }

      & .vn-card-text {
        padding-top: 16px !important;
        padding-bottom: 0px !important;
        padding-left: 24px !important;
        padding-right: 24px !important;

        @include vueton.typography(body-medium, !important);
      }

      & .vn-card-options {
        padding-top: 16px !important;
        padding-left: 24px !important;
        padding-right: 24px !important;

        & .vn-checkbox {
          & .v-selection-control {
            min-height: initial;
          }
        }
      }

      & .vn-card-actions {
        justify-content: right;

        padding-top: 24px !important;
        padding-bottom: 24px !important;
        padding-left: 24px !important;
        padding-right: 24px !important;

        & .vn-button {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
      }
    }
  }
}
</style>
