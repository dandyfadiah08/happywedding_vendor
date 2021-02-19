<template>
  <li>
    <nuxt-link
      :to="href"
      :class="[
        {
          underlined: isActive,
          'text-heading hover:text-cta-button': nav,
        },
      ]"
    >
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
    nav: Boolean,
  },
}
</script>

<style scoped>
.underlined {
  @apply font-medium;
}

.nuxt-link-active::after {
  content: '';
  display: block;

  /* position: absolute; */
  margin: 0 auto;
  width: 60%;
  margin-top: 12px;
  border-bottom: 3px solid #f7c351;
}

/* .underlined::after {
  content: '';
  display: block;
  position: absolute;
  margin: 0 auto;
  width: 60%;
  padding-top: 10px;
  border-bottom: 3px solid #f7c351;
} */
</style>
