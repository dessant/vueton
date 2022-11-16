<template>
  <v-select class="vn-select" variant="outlined"></v-select>
</template>

<script>
export default {
  name: 'vn-select'
};
</script>

<style lang="scss">
@use '../styles/mixins' as vueton;

html {
  & .vn-select {
    &.v-input {
      flex: none;

      &.v-select--selected {
        grid-template-columns: max-content max-content max-content !important;
      }
    }

    & .v-field__append-inner .v-icon {
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z'/%3E%3C/svg%3E");
      mask-repeat: no-repeat;
      mask-position: center;
      background-color: var(--md-sys-color-on-surface-variant);
      opacity: 1 !important;
    }

    & .v-field__append-inner i::before {
      // hide default dropdown icon
      display: none !important;
    }

    & .v-field__outline__start {
      border-radius: 16px 0 0 16px !important;
      flex: 0 0 16px !important;
    }

    & .v-field__outline__end {
      border-radius: 0 16px 16px 0 !important;
    }

    & .v-field__input {
      padding-left: 20px !important;
      min-width: 160px;
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

    & .v-label,
    & .v-select__selection-text {
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
      & .v-field-label,
      & .v-select__selection-text {
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

  & .v-overlay-container {
    & .v-menu {
      & .v-overlay__content.v-select__content {
        max-width: calc(100vw - 48px) !important;
        border-radius: 16px;

        & .v-list {
          padding-top: 0;
          padding-bottom: 0;
          @include vueton.theme-prop(background-color, menu-surface);

          & .v-list-item {
            padding-left: 20px;
            padding-right: 20px;
            @include vueton.theme-prop(color, on-surface);

            & .v-list-item-title {
              @include vueton.typography(body-large);
              letter-spacing: 0.15px;
            }
          }
        }
      }
    }
  }

  &.firefox {
    & .vn-select {
      & .v-field__append-inner .v-icon {
        // visual artifacts during transition
        transition: initial;
      }
    }
  }
}
</style>
