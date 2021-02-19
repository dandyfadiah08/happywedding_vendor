<template>
  <div class="xl:grid place-items-center grid-cols-4 gap-5">
    <VendorListItem
      v-for="vendor in vendors"
      :key="vendor.id"
      :vendor="vendor"
    />
  </div>
</template>

<script>
export default {
  name: 'VendorList',
  props: {
    vendors: {
      type: Array,
      required: true,
    },
  },
}
</script>
