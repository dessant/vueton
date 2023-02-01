<template>
  <v-switch ref="self" v-bind="$attrs" class="vn-switch" inset>
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-switch>
</template>

<script>
export default {
  name: 'vn-switch'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-switch {
    & .v-input__control,
    & .v-input__details {
      max-width: calc(100vw - 48px) !important;
    }

    & .v-input__details {
      display: none !important;
    }

    & .v-label {
      display: inline-block;
      height: auto !important;
      padding-inline-start: 18px !important;
      max-width: calc(100vw - 53px - 48px) !important;
      @include vueton.typography(body-medium);
      @include vueton.theme-prop(color, on-background);
      opacity: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & .v-switch__track {
      width: 36px !important;
      height: 20px !important;
      @include vueton.theme-prop(background-color, surface-variant);
      border: 1px solid var(--md-sys-color-outline);

      opacity: 1;
    }

    & .v-switch__thumb {
      width: 12px;
      height: 12px;
      @include vueton.theme-prop(color, outline);
      opacity: 1;
    }

    & .v-selection-control__wrapper {
      & .v-selection-control__input {
        transform: translateX(-8px);
      }
    }

    & .v-selection-control--dirty {
      & .v-switch__track {
        @include vueton.theme-prop(background-color, primary);
        border: none;
      }

      & .v-switch__thumb {
        width: 14px;
        height: 14px;
        @include vueton.theme-prop(color, on-primary, !important);
      }

      & .v-selection-control__wrapper {
        & .v-selection-control__input {
          transform: translateX(8px);
        }
      }
    }
  }

  &.safari {
    & .vn-switch {
      & .v-label {
        padding-left: 18px !important;
      }
    }
  }
}
</style>
