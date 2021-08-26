<template>
  <div class="container mx-auto">
    <div class="py-6 mt-9">
      <h2 class="text-3xl text-center leading-tight font-bold">
        Portofolio Terbaru
      </h2>
      <div class="flex flex-wrap justify-center grid lg:grid-cols-3 gap-3 mt-9">
        <div
          class="bg-gray-900 dark:bg-gray-800 hover:bg-white text-white hover:text-black p-5 shadow-lg rounded-lg border-1 mx-4 my-4 space-y-6"
          v-for="solution in solutions"
          :key="solution.id"
        >
          <div>
            <nuxt-img
              v-if="solution.image"
              class=" object-cover"
              :src="solution.image"
              loading="lazy"
              alt="web-yang-sudah-roofel-buat"
            />
            <div class="font-medium text-yellow mb-3 mt-3">
              {{ solution.title }}
            </div>
            <p class="text-sm leading-relaxed pb-3">
              {{ solution.frontsubtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          id: "1",
          image: "/rempahasiayogya.webp",
          title: "rempahasiayogya.com",
          frontsubtitle:
            "website jamstack restoran makanan asia di Sleman Yogyakarta"
        },
        {
          id: "2",
          image: "/karyasembada.webp",
          title: "karyasembada.com",
          frontsubtitle:
            "website jamstack jasa pembangunan dan interior design di Sleman Yogyakarta"
        },
        {
          id: "3",
          image: "/lalitakids.webp",
          title: "lalitakids.com",
          frontsubtitle: "website wordpress online store mainan anak Kebumen "
        }
      ]
    };
  }
};
</script>

<style></style>
