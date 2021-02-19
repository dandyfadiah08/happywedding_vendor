<template>
  <div>
    <client-only>
      <p
        class="px-6 mb-4 font-calistoga capitalize text-lg md:text-2xl lg:text-3xl"
      >
        {{ label }}
      </p>
      <swiper class="swiper" :options="swiperOption">
        <slot name="swiper">
          <store-card
            v-for="item in 6"
            :key="item"
            :white-card="whiteCard"
          ></store-card>
        </slot>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    whiteCard: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    gap: {
      type: Number,
      default: 12,
    },
    offsetBefore: {
      type: Number,
      default: 20,
    },
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        slidesOffsetBefore: this.$device.isMobile ? this.offsetBefore : 20,
        slidesOffsetAfter: 20,
        spaceBetween: this.gap,
      },
    }
  },
}
</script>

<style scoped>
.swiper-container {
  height: 310px;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  .swiper-container {
    height: 372px;
  }
}
</style>
