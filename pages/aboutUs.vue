<template>
  <div class="mx-auto">
    <div class="overflow-hidden px-4 flex flex-wrap mb-3 bg-gray-900">
      <div class="lg:w-3/5 mx-auto py-12 space-y-5 px-2 lg:px-16">
        <h1
          class="font-extrabold text-white text-5xl lg:text-6xl leading-tight"
        >
          Badranaya Perusahaan Pengadaan barang & Konsultan yang Mengerti
          Kebutuhan Anda
        </h1>
      </div>
      <div class="lg:w-2/5 py-10 hidden md:block">
        <nuxt-img
          src="/laptop.webp"
          loading="lazy"
          alt="tentang-jasa-pembuatan-web-roofel"
          class="rounded-lg h-auto mt-9"
        />
      </div>
    </div>

    <div class="container px-16">
      <div class="h-auto overflow-hidden px-4 flex flex-wrap">
        <div
          class="
            container
            lg:w-2/3
            mx-auto
            relateive
            py-20
            space-y-5
            px-0
            lg:px-24
          "
        >
          <p class="font-extrabold text-2xl leading-tight">Siapa Kami.</p>
          <p class="leading-9">
            Dibangun oleh beberapa orang yang berkeinginan menjadikan Roofel
            sebagai wadah untuk memfasilitasi SDM berkualitas di bidang web dan
            web app agar selalu tetap berkarya dan bisa menampilkan karya dan
            ide untuk bisa di gunakan oleh calon klien.
          </p>
          <p class="font-extrabold text-2xl leading-tight">Visi Kami.</p>
          <p class="leading-9">
            Visi kami adalah bukan hanya sekedar membuat website dan aplikasi
            tetapi kami ingin menjadi teman yang baik dalam perjalanan
            perusahaan anda kedepan nya khususnya di dunia digital
          </p>
          <p class="font-extrabold text-2xl leading-tight">Misi Kami.</p>
          <p class="leading-9">
            Menjadi mitra yang bisa memberikan masukan, ide dan gambaran yang
            sebenar benarnya tentang web aplikasi sehingga bisa sesuai dan
            bersinergi dengan perusahaan yang anda bangun
          </p>
          <!-- <p class="font-extrabold text-2xl leading-tight">
            Our Project
          </p> -->
          <!-- <p class="leading-9 ">
            salah satu project yang sedang dikerjakan
          </p> -->

          <!-- <span type="span" class="bg-primary rounded-lg py-2 px-8 text-white">
            <a
              class=""
              href="https://lalitakids.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Project
            </a>
          </span> -->
        </div>
        <!-- <div class="lg:w-1/3  hidden md:block">
          <nuxt-img src="/about.webp" loading="lazy" alt="jasbikin-web" class="rounded-lg h-auto " />
        </div> -->
      </div>
    </div>
    <!-- <ContactCard /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Siapa Kami",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Tentang roofel jasa pembuatan website siap pakai ",
        },
      ],
    };
  },
};
</script>
<style></style>
