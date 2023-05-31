<template>
  <v-select
    ref="self"
    v-bind="$attrs"
    class="vn-select"
    variant="outlined"
    :density="density"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </v-select>
</template>

<script>
import {addRecentPointerEventListener} from '../utils/app';

export default {
  name: 'vn-select',

  props: {
    density: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    }
  },

  methods: {
    setup: function () {
      if (this.title) {
        this.$el.title = this.title;
      }

      if (this.density === 'compact') {
        addRecentPointerEventListener();

        window.setTimeout(() => {
          const inputControl = this.$el.querySelector('.v-input__control');
          inputControl.addEventListener('focusin', ev => {
            if (window.recentPointerEvent) {
              inputControl.classList.remove('focus-visible');
            } else {
              inputControl.classList.add('focus-visible');
            }
          });
        }, 500);
      }
    }
  },

  mounted: function () {
    this.setup();
  }
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
      // arrow_drop_down_FILL0_wght400_GRAD-25_opsz24.svg
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m11.35 14.25-2.575-2.6q-.45-.45-.213-1.013.238-.562.863-.562h5.15q.625 0 .863.562.237.563-.188 1.013l-2.6 2.6q-.15.125-.312.2-.163.075-.338.075-.175 0-.337-.075-.163-.075-.313-.2Z'/%3E%3C/svg%3E");
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

    &.v-input--density-compact {
      border-radius: 20px;

      & .v-field__append-inner .v-icon {
        margin-inline-start: 0px !important;
      }

      & .v-input__control {
        position: relative;

        & .v-field {
          padding-right: 4px;
        }
      }

      & .v-field__input {
        padding-left: 12px !important;
        padding-right: 0px !important;
        min-width: initial;
      }

      & .v-field__outline {
        display: none;
      }

      & .v-input__control::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;

        opacity: 0;
        transition: opacity 15ms linear;
        @include vueton.theme-prop(background-color, on-surface-variant);
      }

      &:hover .v-input__control::before {
        opacity: var(--md-sys-state-hover-state-layer-opacity);
      }

      & .v-input__control.focus-visible:focus-within::before {
        opacity: var(--md-sys-state-focus-state-layer-opacity);
      }
    }
  }

  & .v-overlay-container {
    & .v-menu {
      & .v-overlay__content.v-select__content {
        max-width: calc(100vw - 48px) !important;
        border-radius: 16px;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        overflow: hidden;

        & .v-list {
          padding-top: 0;
          padding-bottom: 0;
          @include vueton.theme-prop(background-color, menu-surface);

          & .v-list-item {
            padding-left: 0;
            padding-right: 0;
            @include vueton.theme-prop(color, on-surface);

            & .v-list-item-title {
              padding-left: 20px;
              padding-right: 36px;
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

  &.safari {
    & .vn-select {
      & .v-field__outline__start {
        border-left-width: 1px;
      }

      & .v-field__outline__end {
        border-right-width: 1px;
      }

      & .v-field__input {
        padding-right: 6px !important;
      }

      & .v-input__control {
        & .v-field {
          padding-right: 12px;
        }
      }

      & .v-field__append-inner .v-icon {
        margin-left: 4px;
      }

      & .v-field--focused {
        & .v-field__outline__start {
          border-left-width: 2px;
        }

        & .v-field__outline__end {
          border-right-width: 2px;
        }
      }

      &.v-input--density-compact {
        &.v-input {
          &.v-select--selected {
            grid-template-columns: initial !important;
          }
        }

        & .v-input__control,
        & .v-input__details {
          max-width: initial !important;
        }

        & .v-select__selection-text {
          text-overflow: initial;
        }

        & .v-input__control {
          & .v-field {
            grid-template-columns: initial;
            padding-right: 4px;
          }
        }

        & .v-field__input {
          padding-right: 0px !important;
        }

        & .v-field__append-inner .v-icon {
          margin-left: 2px !important;
        }
      }
    }
  }
}
</style>
