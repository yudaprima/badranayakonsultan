<template>
  <div class="container mx-auto">
    <div class="text-5xl text-center mx-auto mt-9 mb-9">
      Our Project Partner
    </div>
    <div id="slider">
      <div class="slides">
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Demography Forum Fisipol UGM
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Padi Kemitraan Yogyakarta
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Wiskuno Outbound & Fishing
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Heru Santami Photography Kebumen
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Robopick Devices Yogyakarta
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Dinas Pendidikan Kebumen
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Dinas Permades Kebumen
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            CV. Well Architect
          </p>
        </div>
        <div class="slider rounded-lg">
          <p class="text-center mx-auto my-auto text-4xl font-bold">
            Dinas Pariwisata Kebumen
          </p>
        </div>
      </div>
      <div class="switch">
        <ul>
          <li>
            <div class="on"></div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
/* Slider */
#slider {
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
}
@keyframes load {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
.slides {
  width: 400%;
  height: 100%;
  position: relative;
  -webkit-animation: slide 20s infinite;
  -moz-animation: slide 20s infinite;
  animation: slide 20s infinite;
}
.slider {
  width: 25%;
  height: 100%;
  float: left;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Switch */
.switch {
  width: 120px;
  height: 10px;
  position: absolute;
  bottom: 50px;
  z-index: 99;
  left: 30px;
}
.switch > ul {
  list-style: none;
}
.switch > ul > li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #333;
  float: left;
  margin-right: 5px;
  cursor: pointer;
}
.switch ul {
  overflow: hidden;
}
.on {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f39c12;
  position: relative;
  -webkit-animation: on 20s infinite;
  -moz-animation: on 20s infinite;
  animation: on 20s infinite;
}

/* Animation */
@-webkit-keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}
@-moz-keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}
@keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}

@-webkit-keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}

@-moz-keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}

@keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}
</style>
