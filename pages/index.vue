<template>
  <div>
    <TheNavBar />
    <div class="px-6">
      <TheSlideShow />
      <AboutMe />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage'
})
</script>
