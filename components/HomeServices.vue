<template>
  <div class="container mx-auto mt-16">
    <div class="mb-10 lg:w-2/3 mx-auto text-center">
      <h2 class="mb-6 text-3xl font-bold">Badranaya Services & Solutions</h2>
      <p class="leading-relaxed">
        Jasa dan pelayanan yang bisa kami berikan untuk klien kami meliputi:
      </p>
    </div>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        gap-3
        row-gap-3
      "
    >
      <div
        class="bg-secondary dark:bg-gray-800 rounded-lg p-5 hover:bg-gray-900"
        v-for="point in points"
        :key="point.id"
      >
        <h3 class="mb-2 font-extrabold leading-snug text-red text-2xl">
          {{ point.title }}
        </h3>
        <p class="max-w-md mb-3 text-gray-300 dark:text-gray-400 sm:mx-auto">
          {{ point.subtitle }}
        </p>
        <!-- <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-gray-300 dark:text-white"
          >Learn more</a -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          id: "1",
          title: "Pengadaan barang & jasa",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },
        {
          id: "2",
          title: "Percetakan & Fotografi",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },
        {
          id: "3",
          title: "konfeksi",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },
        {
          id: "4",
          title: "Interior & Furniture",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },
        {
          id: "5",
          title: "Konsultan perencanaan",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },

        {
          id: "6",
          title: "Event Organizer",
          subtitle: "pengadaan barang dan jasa untuk melayanni barang dan jasa",
        },
      ],
    };
  },
};
</script>
