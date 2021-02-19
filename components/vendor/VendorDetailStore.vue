<template>
  <div>
    <VendorDetailMobile
      v-if="$device.isMobile"
      :items="{ products: items.slice(0, 5) }"
    />
    <div
      v-else
      class="block lg:grid place-items-center grid-cols-4 gap-y-6 mt-12 mb-12"
    >
      <AppCard v-for="item in items" :key="item.id" :item="item" theme="store">
        <template #sub>
          <p class="text-xs">{{ item.category }}</p>
        </template>
        <template #action>
          <div class="flex min-w-0">
            <div class="flex flex-col min-w-0 leading-none">
              <p class="mb-1 text-xs font-thin line-through">IDR 25.000.000</p>
              <h1 class="text-xl font-semibold tracking-wide">
                IDR {{ $price(item.price) }}
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
