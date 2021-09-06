<template>
  <div class="container">
    <div class="mx-auto lg:px-16 py-6">
      <div class="flex justify-center leading-9">
        <div class="space-y-2">
          <h2
            class="
              text-center text-3xl
              font-semibold
              lg:pt-9
              text-black
              dark:text-gray-200
            "
          >
            OUR TECHNOLOGY PARTNERS
          </h2>
          <p class="pt-3 pb-3">
            We partnered with the best in the industry. These companies support
            our excellence.
          </p>
        </div>
      </div>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-2
          gap-3
          row-gap-3
          mt-9
        "
      >
        <div
          class="
            bg-gray-900
            dark:bg-gray-800
            text-white
            p-5
            shadow-lg
            rounded-lg
            border-1
            mx-2
            my-2
            space-y-6
          "
        >
          <TumbUp class="text-gray-900" />
          <div>
            <h3 class="text-lg font-semibold text-red mb-3">SIPlah Telkom</h3>
            <p>check produk dan lakukan pembelian di</p>
            <a
              href="https://siplahtelkom.com/store/97707-badranaya?parent_dtids=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                type="button"
                class="
                  rounded-lg
                  py-2
                  px-6
                  text-xl text-red text-center
                  border-2 border-red
                  hover:bg-red hover:text-white
                  mt-5
                  mb-5
                "
              >
                go to SIPlah Telkom
              </span>
            </a>
          </div>
        </div>
        <div
          class="
            bg-gray-900
            dark:bg-gray-800
            text-white
            p-5
            shadow-lg
            rounded-lg
            border-1
            mx-2
            my-2
            space-y-6
          "
        >
          <TumbUp class="text-gray-900" />
          <div>
            <h3 class="text-lg font-semibold text-red mb-3">SIPlah Blibli</h3>
            <p>check produk dan lakukan pembelian di</p>
            <a
              href="https://siplah.blibli.com/search?itemPerPage=40&page=0&merchantId=SCBA-0110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                type="button"
                class="
                  rounded-lg
                  py-2
                  px-6
                  text-xl text-red text-center
                  border-2 border-red
                  hover:bg-red hover:text-white
                  mt-5
                  mb-5
                "
              >
                SIPlah Blibli
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
