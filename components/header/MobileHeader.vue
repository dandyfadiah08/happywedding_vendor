<template>
  <header
    class="fixed top-0 z-10 py-2 flex justify-between w-full bg-hw-light-teal"
  >
    <slot>
      <p class="flex items-center justify-start pl-4">Happy Wedding</p>
    </slot>
    <div class="flex items-center justify-evenly space-x-4 pr-4">
      <nuxt-link
        class="flex items-center justify-center py-2 text-gray-500"
        to="/"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"
            fill="currentColor"
          />
          <path d="M12 6H4V20H18V12H16V18H6V8H12V6Z" fill="currentColor" />
        </svg>
      </nuxt-link>
      <nuxt-link
        class="flex items-center justify-center py-2 text-gray-500"
        to="/"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
            fill="currentColor"
          />
          <path
            d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
            fill="currentColor"
          />
          <path
            d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
            fill="currentColor"
          />
        </svg>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>
