<template>
  <div class="mx-auto">
    <div class="overflow-hidden px-4 flex flex-wrap mb-3 bg-gray-900">
      <div class="lg:w-3/5 mx-auto py-12 space-y-5 px-2 lg:px-16">
        <h1
          class="font-extrabold text-white text-4xl lg:text-6xl leading-tight"
        >
          Badranaya Perusahaan Pengadaan barang & Konsultan Arsitektur yang
          Mengerti Kebutuhan Anda
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
            Badranaya adalah perusahaan yang bergerak dibidang pengadaan barang
            bebas khususnya pengadaan barang untuk sekolahan, instansi baik
            pemerintah maupun swasta, jasa konsultan, Arsitek, Event organiser.
          </p>
          <p class="font-extrabold text-2xl leading-tight">Visi Kami.</p>
          <p class="leading-9">
            Badranaya memiliki visi Menjadi perusahaan pilihan utama di bidang
            jasa arsitek dan interior, Serta pengadaan barang dan jasa, Selain
            itu Badranaya selalu berusaha keras menjadi perusahaan konsultan
            jasa arsitek & interior terkemuka yang mempunyai reputasi &
            keunggulan komperatif, melalui potensi SDM berdasarkan kesalehan
            spiritual, intelektual, & sosial.
          </p>
          <p class="font-extrabold text-2xl leading-tight">Misi Kami.</p>
          <p class="leading-9">
            Mengembangkan karya arsitektur Indonesia yang berkualitas.<br />
            Memberikan solusi terbaik dengan memegang kepercayaan/komitmen,
            dalam memenuhi kebutuhan & keinginan klien.<br />
            Memberikan layanan yang profesional & berkesinambungan, sehingga
            tercipta 'special feeling'.<br />
            Memberdayakan pengetahuan, pengalaman, kreativitas, dan rasa nyaman
            dari anggota perusahaan, bagi tujuan bisnis, pengabdian profesi &
            sosial.
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
