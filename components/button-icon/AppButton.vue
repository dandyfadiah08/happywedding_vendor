<template>
  <component
    :is="type"
    :href="href"
    :to="to"
    :variant="variant"
    :class="buttonOrIcon"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'icon'].includes(value)
      },
    },
  },

  data() {
    return {
      buttonClass: 'button btn__pad bg-hw-brown xl:bg-opacity-75',
      iconClass: 'flex items-center justify-start pl-4 w-1/4 text-gray-500',
    }
  },

  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    },
    buttonOrIcon() {
      if (this.variant === 'button') {
        return this.buttonClass
      } else if (this.variant === 'icon') {
        return this.iconClass
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped>
.button {
  @apply text-white text-center border-0 rounded-md transition ease-in-out duration-150 cursor-pointer;
}

.btn__pad {
  padding: 0.375rem 1rem;
}

/* .button {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid tomato;
  border-radius: 3px;
  color: tomato;
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
} */

.button:hover {
  @apply bg-hw-brown;
}
</style>
