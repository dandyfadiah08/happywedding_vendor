<template>
  <div class="py-6 xl:py-8 px-10 bg-white shadow-md rounded-3xl">
    <div class="xl:flex space-y-4 xl:space-y-0 xl:space-x-4 text-sm">
      <div class="xl:flex xl:flex-grow xl:w-2/6 relative">
        <input
          type="text"
          class="xl:flex-grow w-full px-8 xl:px-12 py-3 bg-hw-gray rounded-xl focus:outline-none focus:shadow-outline"
          placeholder="Search..."
        />
        <div class="absolute top-0 flex items-center h-full ml-2 xl:ml-4">
          <svg class="w-6 text-gray-400 fill-current" viewBox="0 0 24 24">
            <path
              class="hericon-ui"
              d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
      </div>
      <client-only>
        <v-select
          v-if="isVendor"
          v-model="rating"
          class="style-chooser xl:w-1/6"
          :options="options"
          placeholder="Rating"
          @input="setRating"
        />
        <v-select
          v-model="category"
          class="style-chooser xl:w-1/6"
          :options="options"
          placeholder="Category"
          @input="setCategory"
        />
        <v-select
          v-if="isVendor || isLanding"
          v-model="city"
          class="style-chooser xl:w-1/6"
          :options="options"
          placeholder="City"
          @input="setCity"
        />
      </client-only>
      <AppButton
        class="w-full xl:w-auto text-lg xl:text-base"
        @click="$emit('filter-vendor')"
        >Cari <slot></slot
      ></AppButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    theme: {
      type: String,
      default: 'vendor',
      validator(value) {
        return ['vendor', 'landing', 'blog'].includes(value)
      },
    },
  },

  data() {
    return {
      rating: undefined,
      category: undefined,
      city: undefined,
      options: ['foo', 'bar', 'baz'],
    }
  },

  computed: {
    isVendor() {
      return this.theme === 'vendor'
    },
    isLanding() {
      return this.theme === 'landing'
    },
  },

  methods: {
    ...mapMutations({
      setCity: 'search/setCity',
      setCategory: 'search/setCategory',
      setRating: 'search/setRating',
    }),
  },
}
</script>

<style>
.style-chooser .vs__search {
  margin: 0;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #ececec;
  border: none;
  color: #394066;
}

.style-chooser .vs__dropdown-toggle {
  border-radius: 12px;
  padding: 12px 20px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
