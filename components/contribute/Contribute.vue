<template>
  <div class="vn-contribute">
    <div class="notice" v-if="notice">
      {{ notice }}
    </div>

    <div class="title">Help us make some avocado toast!</div>

    <div class="desc">
      <div class="desc-text">
        <p>
          <span class="ext-name">{{ extName }}</span> is a project fueled by
          love and crunchy toast, created for everyone to freely use and
          improve.
        </p>
        <p>
          You can support our goals and make a difference by sharing some
          avocados with us! Every ounce will help add new features and keep
          things afloat.
        </p>
      </div>
      <picture class="image-container">
        <source :srcset="`./assets/illustration.webp`" type="image/webp" />
        <img
          class="desc-image"
          :src="`https://${apiHost}/static/images/illustration.png`"
          alt="avocado and toast"
        />
      </picture>
    </div>

    <transition name="goals">
      <div class="goals-wrap" v-if="goals">
        <div class="cta">Support our current goals</div>
        <div class="goals">
          <div class="goal" v-for="goal of goals.items">
            <vn-icon class="goal-bullet" :src="`./assets/circle.svg`"></vn-icon>
            {{ goal }}
          </div>
        </div>
        <vn-linear-progress
          class="progress"
          :model-value="goals.progress.value / goals.progress.goal"
        >
        </vn-linear-progress>
        <div class="progress-details">
          <div>
            Raised
            <span class="progress-value">{{ goals.progress.value }}</span>
            <img class="progress-token" :src="`./assets/avocado.svg`" />
            of
            <span class="progress-value">{{ goals.progress.goal }}</span>
            <img class="progress-token" :src="`./assets/avocado.svg`" />
            goal
          </div>
          <div class="progress-value">
            1
            <img class="progress-token" :src="`./assets/avocado.svg`" />
            =
            {{ goals.progress.currency.symbol
            }}{{ goals.progress.currency.exchangeRate }}
          </div>
        </div>
      </div>
    </transition>

    <div class="cta-buttons">
      <vn-button @click="contribute('patreon')" variant="elevated">
        <picture class="image-container">
          <source :srcset="`./assets/patreon.webp`" type="image/webp" />
          <img :src="`https://${apiHost}/static/images/patreon.png`" />
        </picture>
      </vn-button>
      <vn-button @click="contribute('paypal')" variant="elevated">
        <picture class="image-container">
          <source :srcset="`./assets/paypal.webp`" type="image/webp" />
          <img :src="`https://${apiHost}/static/images/paypal.png`" />
        </picture>
      </vn-button>
    </div>

    <div class="cta-coin">
      <vn-button @click="contribute('coinbase')" variant="tonal">
        Coinbase
      </vn-button>
    </div>
  </div>
</template>

<script>
import {Button, Icon, LinearProgress} from '../../';

export default {
  name: 'vn-contribute',

  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [LinearProgress.name]: LinearProgress
  },

  props: {
    extName: {
      type: String,
      required: true
    },
    extSlug: {
      type: String,
      required: true
    },
    notice: {
      type: String,
      default: ''
    }
  },

  emits: ['open'],

  data: function () {
    return {
      goals: null,
      apiHost: 'contribute.vapps.dev'
    };
  },

  methods: {
    setup: async function () {
      const rsp = await fetch(
        `https://${this.apiHost}/api/v1/goals/${this.extSlug}`
      );
      const goals = await rsp.json();

      const exchangeRate = goals.progress.currency.exchangeRate;
      goals.progress.value = Math.trunc(goals.progress.value / exchangeRate);
      goals.progress.goal = Math.trunc(goals.progress.goal / exchangeRate);

      this.goals = goals;
    },

    contribute: function (service) {
      const url = `https://${this.apiHost}/go/${service}?pr=${this.extSlug}&src=app`;

      this.$emit('open', {url});
    }
  },

  mounted: function () {
    this.setup();
  }
};
</script>

<style lang="scss">
@use '../../styles/mixins' as vueton;

.vn-contribute {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 856px;
}

.notice {
  @include vueton.typography(body-medium);
  @include vueton.theme-prop(color, on-surface);
  @include vueton.theme-prop(background-color, notice-surface);
  margin-top: 12px;
  max-width: 90vw;
  padding: 12px 24px;
  border-radius: 24px;
}

.title {
  @include vueton.typography(title-large);
  margin-top: 24px;
  max-width: 90vw;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.25px;
}

.desc {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 24px;
  margin-top: 24px;
}

.desc-text {
  @include vueton.typography(body-large);
  font-size: 15px;
  letter-spacing: 0.25px;
  line-height: 24px;
  max-width: 90vw;

  & p {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  & .ext-name {
    font-weight: 500;
  }
}

.image-container {
  display: flex;
}

.desc-image {
  max-width: 60vw;
  opacity: 0.96;
}

.goals-wrap {
  margin-top: 36px;
  width: 90vw;
}

.cta {
  @include vueton.typography(title-large);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.25px;
}

.goals {
  @include vueton.typography(body-large);
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 15px;
  letter-spacing: 0.25px;
}

.goal {
  display: flex;
  align-items: center;
}

.goal-bullet {
  @include vueton.theme-prop(background-color, goals, !important);
  width: 7px !important;
  height: 7px !important;
  margin-right: 10px;
}

.progress {
  & .v-progress-linear__background,
  & .v-progress-linear__determinate {
    @include vueton.theme-prop(background-color, goals);
  }
}

.progress-details {
  display: flex;
  justify-content: space-between;
  @include vueton.typography(body-small);
  margin-top: 13px;
  line-height: 20px;
  color: var(--md-ref-palette-neutral40);
}

.progress-value {
  font-weight: 700;
}

.progress-token {
  width: auto;
  height: 14px;
  vertical-align: -10%;
  opacity: 0.8;
}

.goals-enter-active,
.goals-leave-active {
  max-height: 300px;
  margin-top: 24px;
  transition:
    max-height 0.4s ease,
    margin-top 0.4s ease,
    opacity 0.3s ease;
}

.goals-enter-from,
.goals-leave-to {
  max-height: 0;
  margin-top: 0;
  opacity: 0;
}

.cta-buttons {
  display: grid;
  grid-row-gap: 24px;
  margin-top: 48px;

  & .v-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px !important;
    height: 48px !important;

    @include vueton.theme-prop(background-color, cta-surface);

    & img {
      width: auto;
      height: 20px;
      pointer-events: none;
    }
  }
}

.cta-coin {
  margin-top: 32px;
  margin-bottom: 24px;

  & .v-btn {
    @include vueton.theme-prop(color, cta-coin);
  }
}

.v-theme--dark {
  & .desc-image {
    opacity: 0.87;
  }

  & .progress-details {
    color: var(--md-ref-palette-neutral70);
  }
}

@media (min-width: 480px) {
  .cta-buttons {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 56px;
    margin-top: 56px;
  }

  .desc-image {
    max-width: 250px;
  }
}

@media (min-width: 576px) {
  .title {
    @include vueton.typography(headline-small);
  }

  .desc-text {
    max-width: 70vw;
  }

  .goals-wrap {
    width: 70vw;
  }

  .cta {
    font-size: 22px;
    font-weight: 400;
  }
}

@media (min-width: 768px) {
  .title {
    @include vueton.typography(headline-large);
    margin-top: 48px;
  }

  .desc {
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 56px;
    margin-top: 72px;
  }

  .desc-text {
    font-size: 16px;
    letter-spacing: 0.15px;
    line-height: 28px;
    max-width: 400px;
  }

  .desc-image {
    max-width: 280px;
  }

  .goals-wrap {
    margin-top: 48px;
    width: 100%;
  }

  .cta {
    @include vueton.typography(headline-small);
  }

  .goals {
    font-size: 16px;
    letter-spacing: 0.15px;
    line-height: 28px;
  }

  .goals {
    margin-top: 48px;
  }

  .progress-details {
    font-size: 14px;
    letter-spacing: 0.25px;
    color: var(--md-ref-palette-neutral50);
  }

  .progress-token {
    height: 16px;
  }

  .goals-enter-active,
  .goals-leave-active {
    margin-top: 48px;
  }
}
</style>
