<template>
  <div class="mx-auto">
    <HeroReady />
    <div class="container mx-auto px-9 lg:px-24 py-10 space-y-12">
      <div class="text-center leading-9 ">
        <h2 class="text-4xl font-bold text-yellow">Website Siap Pakai</h2>
        <p>
          Untuk mempermudah, kami sudah siapkan beberapa website & Web App Yang
          bisa langsung digunakan dengan revisi sesuai kebutuhan
        </p>
      </div>
    </div>
    <DemoProduct />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Website Siap Pakai"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "jasa pembuatan website siap pakai dari roofel"
        }
      ]
    };
  }
};
</script>
<style></style>
