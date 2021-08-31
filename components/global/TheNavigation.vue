<template>
  <div>
    <nav class="w-full bg-white dark:bg-gray-900">
      <div
        class="flex items-center flex-wrap border-1 bg-gray-900 border-gray-100"
      >
        <!-- <a
          href="#"
          class="px-2 py-2 rounded text-white text-sm ml-5  hover:bg-yellow "
        >
          facebook
          <Facebook />
        </a> -->
        <!-- <a
          class="px-2 py-2 rounded text-white text-sm ml-5  hover:bg-yellow "
          href="#"
          >instagram
          <Instagram />
        </a> -->

        <a
          href="#"
          class="
            px-2
            py-2
            text-yellow text-sm
            hover:bg-gray-800
            rounded-lg
            ml-auto
          "
          >_
          <span @click="toggle">
            <Darkmode />
          </span>
        </a>
      </div>
      <div class="container flex flex-wrap lg:flex-no-wrap items-center">
        <a
          href="#"
          aria-label="Left align"
          class="
            lg:hidden
            ml-auto
            flex flex-col
            relative
            justify-center
            w-8
            h-8
            mt-3
            mb-3
          "
          @click.prevent="mobileNavOpen = !mobileNavOpen"
        >
          <span
            class="bg-yellow h-1 w-8 rounded mb-1"
            :class="{
              'transition-all duration-200 transform rotate-45 absolute right-0':
                mobileNavOpen,
            }"
          ></span>
          <span
            class="bg-yellow h-1 w-8 rounded mb-1"
            :class="{
              'transition-all duration-200 transform -rotate-45 absolute right-0':
                mobileNavOpen,
            }"
          ></span>
          <span
            class="bg-yellow h-1 w-8 rounded mb-1"
            :class="{ hidden: mobileNavOpen }"
          ></span>
        </a>
        <div
          class="w-full flex"
          :class="{ 'mt-8': mobileNavOpen, 'hidden lg:flex': !mobileNavOpen }"
        >
          <ul
            class="
              lg:inline-flex lg:flex-row lg:w-auto
              w-full
              lg:items-center
              items-start
              flex flex-col
              lg:h-auto
            "
          >
            <li class="mb-2">
              <nuxt-link
                :to="{ name: 'index' }"
                class="inline-flex items-center p-2 mr-4"
              >
                <nuxt-img
                  src="/logo-badranaya.svg"
                  height="100"
                  width="100"
                  alt="Jasa-rental-mobil-di-jambi-terbaik"
                  class="rounded-lg"
                />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'index' }"
                class="
                  lg:inline-flex lg:w-auto
                  w-full
                  rounded
                  text-gray-800
                  dark:text-gray-300
                  lg:mr-9
                  font-semibold
                  items-center
                  justify-center
                  hover:bg-yellow hover:text-white
                  px-2
                  py-2
                "
              >
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'index' }"
                class="
                  lg:inline-flex lg:w-auto
                  w-full
                  rounded
                  text-gray-800
                  dark:text-gray-300
                  lg:mr-9
                  font-semibold
                  items-center
                  justify-center
                  hover:bg-yellow hover:text-white
                  px-2
                  py-2
                "
              >
                Product Catalog
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'aboutUs' }"
                class="
                  lg:inline-flex lg:w-auto
                  w-full
                  rounded
                  text-gray-800
                  dark:text-gray-300
                  lg:mr-9
                  font-semibold
                  items-center
                  justify-center
                  hover:bg-yellow hover:text-white
                  px-2
                  py-2
                "
              >
                AboutUs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ name: 'post' }"
                class="
                  lg:inline-flex lg:w-auto
                  w-full
                  rounded
                  text-gray-800
                  dark:text-gray-300
                  lg:mr-9
                  font-semibold
                  items-center
                  justify-center
                  hover:bg-yellow hover:text-white
                  px-2
                  py-2
                "
              >
                Blog
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>

<style lang="postcss" scoped>
li {
  @apply m-2 py-1 px-3 mx-2;
}
.nuxt-link-active {
  @apply text-red;
}
.nuxt-link-exact-active {
  @apply font-bold;
}
</style>
