<template>
  <swiper-slide>
    <div class="card__figure flex flex-col items-center md:max-w-xs">
      <figure class="card__figure h bg-gray-600 relative">
        <img
          class="bg-gray-300 h-full bg-center object-cover shadow-md opacity-75"
          src="https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <slot name="package">
          <div v-if="!whiteCard" class="absolute bottom-0">
            <div class="h-32 px-4">
              <h1
                class="text-white leading-tight text-2xl md:text-3xl mb-10 md:mb-2 font-calistoga"
              >
                Eco Hampers & Gift
              </h1>
              <p class="text-hw-teal text-sm font-bold">
                Start from IDR 100.000
              </p>
            </div>
          </div>
        </slot>
      </figure>

      <slot>
        <div
          v-if="whiteCard"
          class="w-48 -mt-12 z-30 overflow-hidden bg-white rounded-lg shadow-lg md:w-64"
        >
          <h3
            class="pt-1 w-40 md:w-48 mx-auto text-sm font-bold text-center text-teal-500 uppercase md:tracking-wide line-clamp-1"
            title="Two Love Bird Cookies"
          >
            Two Love Bird Cookies
          </h3>
          <p
            class="pb-1 text-center text-xs text-gray-400 w-40 line-clamp-1 md:w-full"
          >
            by Happy Wedding - Souvenir
          </p>

          <div
            class="flex items-center justify-between px-3 py-1 bg-gray-200 md:py-2"
          >
            <div>
              <p class="disc line-through text-gray-600">IDR 6.000.000</p>
              <h3 class="text-base md:text-lg font-calistoga">IDR 5.000.000</h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right w-5 text-hw-teal cursor-pointer"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </slot>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    whiteCard: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.swiper-slide {
  width: 16rem;
}

.card__figure {
  width: calc(407px / 1.8);
}

.card__figure.h {
  height: calc(449px / 1.8);
}

.card__figure,
img {
  border-radius: 30px 10px;
}

.disc {
  font-size: 11px;
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 20rem;
  }

  .card__figure {
    width: calc(407px / 1.5);
  }

  .card__figure.h {
    height: calc(449px / 1.5);
  }
}
</style>
