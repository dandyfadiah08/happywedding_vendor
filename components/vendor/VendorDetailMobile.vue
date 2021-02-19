<template>
  <div>
    <div class="flex px-5 items-center justify-between">
      <p class="leading-none capitalize">{{ Object.keys(items)[0] }}</p>
      <p class="text-sm">view all</p>
    </div>
    <client-only>
      <swiper class="swiper" :options="swiperOption" @click-slide="showMedia">
        <AppCard
          v-for="item in items[Object.keys(items)[0]]"
          :key="item.id"
          :item="item"
          :slide="true"
          theme="project"
        >
          <template #sub>
            <p class="text-xs">{{ item.category }}</p>
          </template>
        </AppCard>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        // spaceBetween: 12,
      },
    }
  },

  methods: {
    showMedia(index, reallyIndex) {
      this.$emit('show-media', index)
    },
  },
}
</script>

<style scoped>
.swiper-container {
  height: 14rem;
  margin-bottom: 1.25rem;
}
</style>
