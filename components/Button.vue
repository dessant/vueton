<template>
  <v-btn
    ref="self"
    v-bind="$attrs"
    class="vn-button"
    variant="outlined"
    rounded
    ripple
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-btn>
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
      z-index: 1;
    }

    &.v-btn--variant-elevated {
      & .v-btn__overlay {
        @include vueton.theme-prop(background-color, inverse-on-surface);
      }

      & .v-ripple__container {
        @include vueton.theme-prop(color, inverse-on-surface);
      }
    }

    &.v-btn--variant-elevated:hover {
      & .v-btn__overlay {
        opacity: 0.12;
      }
    }

    &.v-btn--disabled {
      color: rgba(var(--v-theme-on-surface), 0.12);
      opacity: 1 !important;

      &.v-btn--variant-elevated {
        background-color: rgba(var(--v-theme-on-surface), 0.12);
      }

      & .v-btn__overlay {
        background-color: transparent !important;
      }

      & .v-btn__content {
        color: rgba(var(--v-theme-on-surface), 0.38);
      }
    }
  }

  & .v-theme--dark {
    & .vn-button {
      &.v-btn--variant-elevated {
        & .v-btn__overlay {
          @include vueton.theme-prop(background-color, on-surface);
        }

        & .v-ripple__container {
          @include vueton.theme-prop(color, on-surface);
        }
      }
    }
  }
}
</style>
