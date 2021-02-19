<template>
  <div>
    <app-banner />
    <store-slider label="Happy Special for You" white-card />
    <store-slider label="Hot Packages" />
    <store-slider label="Other Things to You" :gap="12" :offset-before="0">
      <template #swiper>
        <AppCard
          v-for="item in 12"
          :key="item"
          :item="item"
          theme="store"
          slide
        >
          <template #sub>
            <p class="text-xs leading-none mb-4">Bridal</p>
          </template>
          <template #action>
            <div class="flex min-w-0">
              <div class="flex flex-col min-w-0 leading-none">
                <p class="mb-1 text-xs font-thin line-through">
                  IDR 25.000.000
                </p>
                <h1 class="md:text-xl font-semibold tracking-wide">
                  IDR {{ $price('2000000') }}
                </h1>
              </div>
              <div
                class="flex items-end justify-end flex-grow flex-shrink-0 ml-4 text-xs"
              >
                <button
                  class="flex items-center justify-center text-teal-500 hover:underline"
                >
                  <span class="text-xs font-medium leading-none">Details</span>
                  <svg class="w-5 ml-1" viewBox="0 0 32 32">
                    <path
                      d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                      fill="#38b2ac"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </AppCard>
      </template>
    </store-slider>
  </div>
</template>

<script>
import AppBanner from '~/components/AppBanner.vue'
export default {
  components: { AppBanner },
}
</script>
