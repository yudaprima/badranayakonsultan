<template>
  <div>
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto">
      <HomeServices />
      <HomeTwoCard />
      <HomeServicesCard />
      <HomeKonsultan />
      <HomeBaner />
      <HomeOurSolution />
      <HomeTimeLine />
      <OurPartner />
      <AnswerQuestion />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Product",
        name: "Pengadaan barang umum & jasa konsultan terpercaya",
        image: "https://www.roofel.com/_nuxt/image/03f82c.webp",
        description:
          "Website dengan Loading cepat dan teroptimasi SEO meningkatkan peluang masuk halaman pertama Google.",
        brand: {
          "@type": "Brand",
          name: "Roofel",
        },
        offers: {
          "@type": "Offer",
          price: "Rp 1.960.000 - Rp 4.960.000",
        },
        // More structured data...
      },
    };
  },
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }],
      title: "Pengadaan barang umum & jasa konsultan terpercaya",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Pengadaan barang umum & jasa konsultan terpercaya",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Jasa pembuatan website perusahaan untuk company profile, web toko online & UMKM. Tampilan website profesional dan teroptimasi seo. Roofel bikin web harga terjangkau.",
        },
      ],
    };
  },
};
</script>
