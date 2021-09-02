<template>
  <div
    class="
      grid grid-cols-1
      sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8
      md:py-16
      bg-gray-800
    "
  >
    <div
      class="
        relative
        z-10
        col-start-1
        row-start-1
        px-4
        pt-40
        pb-3
        bg-gradient-to-t
        from-black
        sm:bg-none
      "
    >
      <h1 class="text-6xl font-semibold text-white leading-7">BADRANAYA</h1>
      <p class="pt-5 text-gray-300 text-lg">
        Perusahaan Pengadaan barang umum & konsultan
      </p>
    </div>
    <div class="col-start-1 row-start-2 px-4 sm:pb-16 text-gray-200">
      <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        <svg width="20" height="20" fill="currentColor" class="text-gray-400">
          <path
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <div class="ml-1">
          <span class="text-gray-200">+6291215767676</span>
          <!-- <span class="sm:hidden md:inline">(128)</span> -->
        </div>
        <div class="text-base font-normal mx-2">·</div>
        <div>Kebumen, Jawa Tengah</div>
      </div>
      <hr class="w-16 border-gray-300 hidden sm:block" />
    </div>

    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-2">
          <img
            src="/house.webp"
            alt="badranaya-office"
            class="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              bg-gray-100
              sm:rounded-lg
            "
          />
        </div>
        <div class="relative hidden md:block">
          <img
            src="/Dining-room.webp"
            alt="interior-badranaya"
            class="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              rounded-lg
              bg-gray-100
            "
          />
        </div>
        <div class="relative hidden md:block">
          <img
            src="/notebook.webp"
            alt="pengadaan-barang"
            class="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              rounded-lg
              bg-gray-100
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
