<template>
  <div class="container mx-auto space-y-6 pb-3">
    <div class=" mt-3">
      <div class="flex flex-wrap  ">
        <div class="container flex flex-wrap mx-auto lg:px-5">
          <div class="w-full">
            <div
              class="flex flex-wrap justify-center grid lg:grid-cols-3 gap-2"
            >
              <div
                class="bg-black p-4 rounded-lg mx-4 my-4 space-y-6"
                v-for="product in products"
                :key="product.id"
              >
                <div class="">
                  <nuxt-img
                    v-if="product.image"
                    class=" object-cover rounded-lg"
                    :src="product.image"
                    loading="lazy"
                    alt="bikin-website-perusahaan"
                  />
                </div>
                <div>
                  <p class="mb-5 text-yellow leading-relaxed">
                    {{ product.title }}
                  </p>
                  <p class=" leading-relaxed text-sm text-white">
                    {{ product.frontsubtitle }}
                  </p>
                </div>

                <div class="text-yellow pt-3 justify-between flex flex-wrap">
                  <a
                    v-if="product.link"
                    class=""
                    :href="product.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="text-center mx-auto">
            <button type="button" class="bg-gray-900 text-yellow p-2 rounded-lg">
              Lihat Menu >>
            </button>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Rental Mobil - Wordpress",
          frontsubtitle:
            " Web rental mobil, lengkap dengan booking hari, transfer Bank & COD, WhatsApp Chat",
          image: "/rentcar-1.webp",
          link: "https://demo.roofelapi.live/"
        },
        {
          id: "2",
          title: "Rental Mobil - Wordpress",
          frontsubtitle:
            " Web rental mobil, lengkap dengan booking hari, transfer Bank & COD, WhatsApp Chat",
          image: "/rentcardemo2.webp",
          link: "https://rentcar.roofelapi.live/"
        },
        {
          id: "3",
          title: "CCTV - Wordpress",
          frontsubtitle:
            "Web CCTV / toko online, lengkap dengan WhatsApp transaksi, transfer Bank & COD,biaya pengiriman WhatsApp Chat",
          image: "/cctvdemo.webp",
          link: "https://democctv.roofelapi.live/"
        },
        {
          id: "4",
          title: "Coffee & Resto - Wordpress",
          frontsubtitle:
            "Web restauran / toko online, lengkap dengan WhatsApp transaksi, transfer Bank & COD,biaya pengiriman WhatsApp Chat",
          image: "/restauran-1.webp",
          link: "https://belajarwordpress.online/"
        },
        {
          id: "5",
          title: "Online Store - Wordpress",
          frontsubtitle:
            "Web Retail produk / toko online, lengkap dengan WhatsApp transaksi,transfer Bank & COD,biaya pengiriman WhatsApp Chat",
          image: "/modernshop.webp",
          link: "https://roofelapi.live/"
        },
        {
          id: "6",
          title: "Coffee & Resto - Jamstack",
          frontsubtitle:
            "Web Food Order, Hotel, resto, cofee, Working Space, WhatsApp & live Chat, Dark & Light mode",
          image: "/resto.webp",
          link: "https://restodemo.netlify.app/"
        },
        {
          id: "7",
          title: "Coffee & Resto - Jamstack",
          frontsubtitle:
            "Web Food Order, Hotel, resto, cofee, Working Space, WhatsApp & live Chat, Dark & Light mode",
          image: "/coffeemenu.webp",
          link: "https://cofferesto.netlify.app/"
        },
        {
          id: "8",
          title: "Toko Online - Jamstack",
          frontsubtitle:
            "Web Toko Online product katalog, WhatsApp & live Chat, Dark & Light mode",
          image: "/tokoonline.webp",
          link: "https://batikcitra.netlify.app/"
        },
        {
          id: "9",
          title: "Rental Mobil - Jamstack",
          frontsubtitle:
            "Web rental Mobil, rental motor, WhatsApp & live Chat, Dark & Light mode",
          image: "/rentalmobil.webp",
          link: "https://rentcarroofel.netlify.app/"
        },
        {
          id: "10",
          title: "Dealer Toyota - Jamstack",
          frontsubtitle:
            "Web Dealer Mobil, Dealer Motor, WhatsApp & live Chat, Dark & Light mode",
          image: "/dealertoyota.webp",
          link: "https://toyotayogyademo.netlify.app/"
        }
      ]
    };
  }
};
</script>

<style></style>
