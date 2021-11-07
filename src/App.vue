<template>
  <div id="container">
    <div id="wrap">
      <h1>Vue Basic Grammer</h1>
      <Section01 />
      <hr />
      <Section02 />
      <hr />
      <Section03 />
      <!-- <div v-for="(arr, idx) in products" :key="arr">{{ arr }}{{ idx }}</div>
      <button v-on:click="count[0]++">숫자 추가</button
      ><span>count: {{ count[0] }}</span>
      <button @click="count[1]++">숫자 추가</button
      ><span>count: {{ count[1] }}</span>
      <button @mouseover="addCount">숫자 추가</button
      ><span>count: {{ count[2] }}</span> -->
    </div>
  </div>
</template>

<script>
import Section01 from '@/components/Section01/Section01';
import Section02 from '@/components/Section02/Section02';
import Section03 from '@/components/Section03/Section03';

export default {
  name: 'App',
  data() {
    return {
      products: ['일반 Array', '일반 Array', '일반 Array'],
      count: [0, 0, 0],
    };
  },
  methods: {
    addCount() {
      this.count[2]++;
    },
  },
  components: {
    Section01,
    Section02,
    Section03,
  },
};
</script>

<style lang="scss" scope>
@import '@/scss/reset';
@import '@/scss/mixins';
@import '@/scss/common';
@import '@/scss/variables';

#container {
  width: 100vw;
  height: 100vh;
  @include flexSet(center, flex-start);
}

#wrap {
  width: 90%;
  max-width: 1200px;
}
hr {
  margin: 10px 0;
}
</style>
