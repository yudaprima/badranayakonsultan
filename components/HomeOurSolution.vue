<template>
  <div class="container">
    <div class="mx-auto lg:px-24 py-6">
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
          class="
            bg-gray-900
            dark:bg-gray-800
            hover:bg-white
            text-white
            hover:text-black
            p-5
            shadow-lg
            rounded-lg
            border-1
            mx-2
            my-2
            space-y-6
          "
          v-for="solution in solutions"
          :key="solution.id"
        >
          <TumbUp class="text-gray-900" />
          <div>
            <h3 class="text-lg font-semibold text-orange mb-3">
              {{ solution.title }}
            </h3>
            <p class="leading-relaxed pb-11">
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
          title: "Live Music",
          frontsubtitle:
            "Acara live music untuk restauran, caffoe shop dan acara acara khusus.",
        },
        {
          id: "2",
          title: "Pameran kesenian dan budaya",
          frontsubtitle:
            "Acara pameran kesenian dan budaya untuk instansi pemerintah, LSM dan komunitas.",
        },
        {
          id: "3",
          title: "Gathering",
          frontsubtitle:
            "Acara Gathering untuk perusahaan corporate organisasi maupun distributor retail.",
        },
      ],
    };
  },
};
</script>

<style></style>
