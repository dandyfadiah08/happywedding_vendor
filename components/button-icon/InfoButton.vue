<template>
  <AppButton class="w-full flex justify-center" @click="test">
    <info-icon />
    <p class="hidden sm:block ml-1 text-xs">Vendor's info</p>
  </AppButton>
</template>

<script>
export default {
  methods: {
    test() {
      alert('this')
    },
  },
}
</script>
