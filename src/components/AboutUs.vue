<template>
  <div class="parallax-main" id="about-view">
    <div class="parallax-container">
      <div
        class="parallax-layer background"
        :style="{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: backgroundPosition + 'px'
        }"
      ></div>
      <div
        class="parallax-layer waves"
        :style="{
          backgroundImage: `url(${wavesImage})`,
          backgroundPositionY: wavesPosition + 'px'
        }"
      ></div>
      <div class="parallax-layer content">
        <div class="about">
          <h1>CL Wallet</h1>
          <h4 class="subheading">About Us:</h4>
          <p>
            CL Wallet is a cryptocurrency wallet that allows you to send and receive cryptocurrency.
            It is built using the Vue 3 framework and a GoLang backend.
          </p>
          <p>Here we hope to show some great features and content.</p>
          <p>We hope you enjoy our site!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import backgroundImage from '@/assets/background.jpg' // Import the images
import wavesImage from '@/assets/waves.png'

export default {
  setup() {
    const backgroundPosition = ref(0)
    const wavesPosition = ref(0)

    const handleScroll = () => {
      backgroundPosition.value = window.scrollY / 3
      wavesPosition.value = window.scrollY / 1.5
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { backgroundImage, wavesImage, backgroundPosition, wavesPosition }
  }
}
</script>

<style scoped>
.parallax-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 300vh;
  background-size: contain;
  background-repeat: no-repeat;
}

.background {
  z-index: 1;
  /* opacity: calc(100% - 50%); */
  /* show whole image from top to bottom and make it fill from left to right */
  background-size: 100%;
  background-repeat: repeat;
  /* position image at the center of the div */
  background-position: center;
}

.waves {
  z-index: 2;
  width: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  z-index: 3;
  color: rgb(0, 0, 0);
}

#about-view {
  background-image: url('@/assets/background.jpg');
  background-size: fill;
  background-repeat: no-repeat;
  background-position: center center;
  height: 500vh;
  width: 20vw;
  position: relative;
  overflow: hidden;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.about p {
  flex: 1;
}
</style>
