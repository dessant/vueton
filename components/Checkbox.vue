<template>
  <v-checkbox ref="self" v-bind="$attrs" class="vn-checkbox">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-checkbox>
</template>

<script>
export default {
  name: 'vn-checkbox'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-checkbox {
    & .v-input__control,
    & .v-input__details {
      max-width: calc(100vw - 48px) !important;
    }

    & .v-input__details {
      display: none !important;
    }

    & .v-selection-control {
      max-width: initial;
    }

    & .v-label {
      display: inline-block;
      height: auto !important;
      padding-inline-start: 7px !important;
      max-width: calc(100vw - 40px - 48px) !important;
      @include vueton.typography(body-medium);
      @include vueton.theme-prop(color, on-background);
      opacity: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & .v-icon {
      opacity: 1;
      width: 18px;
      height: 18px;
    }

    & .mdi-checkbox-blank-outline::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: 6px;
      border: 1px solid var(--md-sys-color-outline);
      @include vueton.theme-prop(background-color, surface-variant);
    }

    & .mdi-checkbox-marked::before,
    & .mdi-minus-box::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: 6px;
      @include vueton.theme-prop(background-color, primary);
    }

    & .mdi-checkbox-marked::after {
      content: '';
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      width: 16px;
      height: 16px;

      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.979 15q-.208 0-.417-.083-.208-.084-.395-.271L3.521 11q-.333-.333-.323-.823.01-.489.344-.823.333-.333.812-.333.479 0 .813.333l2.854 2.854 6.854-6.854q.333-.333.802-.333.469 0 .802.333.333.334.333.802 0 .469-.333.802l-7.687 7.688q-.188.187-.396.271-.208.083-.417.083Z'/%3E%3C/svg%3E");
      mask-repeat: no-repeat;
      mask-position: center;
      @include vueton.theme-prop(background-color, on-primary);
    }

    & .mdi-minus-box::after {
      content: '';
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      width: 16px;
      height: 16px;

      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.75 11.021q-.417 0-.719-.302T5.729 10q0-.417.302-.719t.719-.302h6.5q.417 0 .719.302t.302.719q0 .417-.302.719t-.719.302Z'/%3E%3C/svg%3E");
      mask-repeat: no-repeat;
      mask-position: center;
      @include vueton.theme-prop(background-color, on-primary);
    }
  }

  &.safari {
    & .vn-checkbox {
      & .v-label {
        padding-left: 7px !important;
      }
    }
  }
}
</style>
