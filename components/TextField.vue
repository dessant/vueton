<template>
  <v-text-field class="vn-text-field" variant="outlined"></v-text-field>
</template>

<script>
export default {
  name: 'vn-text-field'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-text-field {
    & .v-field__outline__start {
      border-radius: 16px 0 0 16px !important;
      flex: 0 0 16px !important;
    }

    & .v-field__outline__end {
      border-radius: 0 16px 16px 0 !important;
    }

    & .v-field__input {
      padding-left: 20px;
      padding-right: 20px;
      @include vueton.theme-prop(color, on-surface);
    }

    & .v-input__control,
    & .v-input__details {
      max-width: calc(100vw - 48px) !important;
    }

    & .v-input__details,
    & .v-field__loader {
      display: none !important;
    }

    & .v-label {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & .v-field__outline__notch,
    & .v-field__field {
      & .v-label {
        @include vueton.theme-prop(color, on-surface-variant);
        opacity: 1;
      }
    }

    & .v-field__field {
      & .v-field__input,
      & .v-field-label {
        @include vueton.typography(body-large);
        letter-spacing: 0.15px;
      }
    }

    & .v-field__outline__notch {
      & .v-field-label {
        @include vueton.typography(body-small);
        letter-spacing: 0.15px;
        line-height: 18px;
      }
    }

    & .v-field__outline__start,
    & .v-field__outline__notch,
    & .v-field__outline__notch::before,
    & .v-field__outline__notch::after,
    & .v-field__outline__end {
      @include vueton.theme-prop(border-color, outline);
      --v-field-border-opacity: 1;
    }

    & .v-input__control:hover {
      & .v-field__outline__notch,
      & .v-field__field {
        & .v-label {
          @include vueton.theme-prop(color, on-surface);
          transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      }

      & .v-field__outline__start,
      & .v-field__outline__notch,
      & .v-field__outline__notch::before,
      & .v-field__outline__notch::after,
      & .v-field__outline__end {
        @include vueton.theme-prop(border-color, on-surface);
        transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }

    & .v-field--focused {
      & .v-field__outline__notch,
      & .v-field__field {
        & .v-label {
          @include vueton.theme-prop(color, primary, !important);
          transition: initial !important;
        }
      }

      & .v-field__outline__start,
      & .v-field__outline__notch,
      & .v-field__outline__notch::before,
      & .v-field__outline__notch::after,
      & .v-field__outline__end {
        @include vueton.theme-prop(border-color, primary, !important);
        transition: initial !important;
      }
    }
  }
}
</style>
