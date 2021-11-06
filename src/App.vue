<template>
  <div :style="customStyle">{{ check1 }}</div>
  <div>{{ check2 }}</div>
  <div v-for="(arr, idx) in products" :key="arr">{{ arr }}{{ idx }}</div>
  <button v-on:click="count++">숫자 추가</button>
  <button @click="count++">숫자 추가</button>
  <button @mouseover="addCount">숫자 추가</button>
  <span>count: {{ count }}</span>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      check1: '데이터',
      check2: '확인',
      customStyle: 'color: blue',
      products: ['일반 Array', '일반 Array', '일반 Array'],
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
  },
};
</script>

<style></style>
