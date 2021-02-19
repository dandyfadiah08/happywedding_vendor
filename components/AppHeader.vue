<template>
  <div>
    <desktop-header v-if="$device.isDesktop" />
    <mobile-header v-if="$device.isMobile">
      <AppButton v-if="this.$route.params.slug" variant="icon" @click="to">
        <back-chevron />
      </AppButton>
    </mobile-header>
  </div>
</template>

<script>
import BackChevron from './icon/BackChevron.vue'
import DesktopHeader from './header/DesktopHeader.vue'
import MobileHeader from './header/MobileHeader.vue'

export default {
  components: { DesktopHeader, MobileHeader, BackChevron },

  methods: {
    to() {
      this.$router.go(-1)
    },
  },
}
</script>
