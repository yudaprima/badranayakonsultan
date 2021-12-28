<template>
  <footer class="relative bg-oke pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <span class="text-3xl text-gray-200 font-semibold">
            Let's keep in touch!
          </span>
          <ul>
            <li>
              <a
                class="
                  text-gray-200
                  hover:text-gray-700
                  pt-5
                  block
                  pb-2
                  text-sm
                  space-y-4
                "
                href="https://www.google.com/maps/dir/-7.6761963,109.6520275/roofel/@-7.6744008,109.6476027,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7aca0eebd41b1d:0x4bedf78f716b1ec6!2m2!1d109.6479158!2d-7.6727015"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV Badranaya | (NIB) 0220101752805
              </a>
            </li>
            <li class="mt-0 mb-2 text-gray-200">
              Perumahan Jatisari Indah, Blok N-05, Jatisari-Kebumen
            </li>
            <li class="text-sm mt-3 mb-2 text-gray-200">
              Phone | 0812-2391-6966.
            </li>
            <li class="text-sm mt-3 mb-2 text-gray-200">
              Email | badranayaretail77@gmail.com.
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul
                class="
                  list-unstyled
                  text-gray-200
                  hover:text-gray-300
                  block
                  pb-2
                  text-sm
                  space-y-4
                "
              >
                <li>
                  <a class="" href="#"> About Us </a>
                </li>
                <li>
                  <a class="" href="#"> Blog </a>
                </li>
                <li>
                  <a class="" href="#"> Github </a>
                </li>
                <li>
                  <a
                    class="
                      text-gray-200
                      hover:text-gray-300
                      block
                      pb-2
                      text-sm
                      space-y-4
                    "
                    href="#"
                  >
                    Free Products Demo
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Other Resources</span
              >
              <ul
                class="
                  list-unstyled
                  text-gray-200
                  hover:text-gray-300
                  block
                  pb-2
                  text-sm
                  space-y-4
                "
              >
                <li>
                  <a class="" href="#"> MIT License </a>
                </li>
                <li>
                  <a class="" href="#"> Terms & Conditions </a>
                </li>
                <li>
                  <a class="" href="#"> Privacy Policy </a>
                </li>
                <li>
                  <a class="" href="#"> Contact Us </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-300 py-1">
            Copyright © {{ new Date().getFullYear() }} |
            <a
              href="https://www.roofel.com/jasa-pembuatan-website/"
              class="text-gray-200 hover:text-gray-300"
            >
              Web SEO
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style></style>
