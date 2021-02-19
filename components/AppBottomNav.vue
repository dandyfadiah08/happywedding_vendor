<template>
  <footer class="sticky bottom-0 z-10 flex bg-hw-light-teal">
    <slot>
      <nuxt-link
        class="flex items-end justify-center w-1/4 py-3 text-gray-500"
        to="/discovery"
      >
        <div class="lg:flex flex-col items-end">
          <i data-eva="home-outline" data-eva-fill="#A0AEC0"></i>
          <!-- <p class="text-xs">Home</p> -->
        </div>
      </nuxt-link>
      <nuxt-link
        class="flex items-end justify-center w-1/4 py-3 text-gray-500"
        to="/stores"
      >
        <div class="lg:flex flex-col items-end">
          <i data-eva="shopping-bag-outline" data-eva-fill="#A0AEC0"></i>
          <!-- <p class="text-xs">Store</p> -->
        </div>
      </nuxt-link>
      <nuxt-link
        class="flex items-end justify-center w-1/4 py-3 text-gray-500"
        to="/vendors"
      >
        <div class="lg:flex flex-col items-end">
          <i data-eva="briefcase-outline" data-eva-fill="#A0AEC0"></i>
          <!-- <p class="text-xs">Vendor</p> -->
        </div>
      </nuxt-link>
      <nuxt-link
        class="flex items-end justify-center w-1/4 py-3 text-gray-500"
        to="/inspirations"
      >
        <div class="lg:flex flex-col items-end">
          <i data-eva="compass-outline" data-eva-fill="#A0AEC0"></i>
          <!-- <p class="text-xs">Vendor</p> -->
        </div>
      </nuxt-link>
      <nuxt-link
        class="flex items-end justify-center w-1/4 py-3 text-gray-500"
        to="/checkout"
      >
        <div class="lg:flex flex-col items-end">
          <!-- <div
          v-show="itemCount"
          class="absolute top-0 right-0 px-1 -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full"
        >
          {{ itemCount }}
        </div> -->
          <img
            class="w-6 h-6 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
          />
          <!-- <p class="text-xs">Profile</p> -->
        </div>
      </nuxt-link>
    </slot>
  </footer>
</template>

<script>
import * as eva from 'eva-icons'
export default {
  mounted() {
    eva.replace()
  },
}
</script>
