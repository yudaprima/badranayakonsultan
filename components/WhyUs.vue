<template>
  <div class="container mx-auto mt-9">
    <h2
      class="text-3xl font-bold lg:px-9 lg:w-2/3 mx-auto text-relaxed text-center mb-9"
    >
      Mengapa mempercayakan jasa pembuatan website anda di Roofel !
    </h2>
    <div class="flex flex-wrap justify-between grid lg:grid-cols-2 ">
      <div class="p-5 rounded-lg space-y-3">
        <div>
          <!-- <div
            class="text-3xl bg-gray-900 inline p-1 leading-tight text-yellow font-semibold lg:mt-9 mb-4"
          >
            Bikin web SEO Friendly
          </div> -->
          <p class="leading-relaxed">
            Dengan menggunakan jasa pembuatan website Roofel, baik untuk website
            perusahaan, portofolio atau bahkan toko online anda tidak perlu
            repot mengurusi semua, karena kami yang akan mengurus nya untuk
            anda.
          </p>
          <p class="leading-relaxed mt-4">
            Jika anda ingin membuat website sendiri dan memilih menggunakan jasa
            pembuatan website sesuai keinginan anda, silahkan baca blog kami
            atau beberapa tutorial dibawah
          </p>
          <h4 class="leading-relaxed mt-4">
            <nuxt-link :to="{ name: 'articles' }" class="font-semibold text-lg">
              Tips bagaimana memilih jasa pembuatan website
            </nuxt-link>
          </h4>
          <h4 class="leading-relaxed mt-4">
            <nuxt-link :to="{ name: 'articles' }" class="font-semibold text-lg">
              Bagaimana membangun website perusahaan yang teroptimasi SEO
            </nuxt-link>
          </h4>
          <!-- <button type="button"
            class=" mt-6 text-black rounded-lg hover:text-red text-xl font-bold ml-85"
          >
            Read More
          </button> -->
        </div>
        <!-- <ul class="space-y-4 font-medium text-lg">
          <li class="">
            <span class="text-yellow text-6xl">.</span> Optimasi Tampilan
          </li>
          <li class="">
            <span class="text-yellow text-6xl">.</span> Optimasi Gambar
          </li>
          <li class="">
            <span class="text-yellow text-6xl">.</span> Optimasi Speed
          </li>
          <li class="">
            <span class="text-yellow text-6xl">.</span> Optimasi Konten
          </li>
        </ul> -->
      </div>
      <div class="p-2 rounded-lg  lg:shadow-lg">
        <div class="bg-gray-900 dark:bg-gray-800 lg:p-9 rounded-lg">
          <div class="pt-2 pb-2 ">
            <p class="text-2xl leading-relaxed text-yellow font-semmibold p-3">
              <!-- "SEO adalah upaya mengoptimasi website untuk mendapatkan peringkat
              teratas di hasil pencarian Khususnya Google" -->
              Membuat website asal jadi itu mudah dan murah, tetapi membangun
              website yang bisa mewakili brand anda dan siap bersaing dengan
              website lain memerlukan keseriusan.
            </p>
            <a
              href="https://www.semrush.com/blog/learn-seo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label=""
              class="p-3 inline-flex items-center font-semibold transition-colors duration-200 text-gray-500 ml-auto"
              >Learn SEO - Semrush.
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

<style></style>
