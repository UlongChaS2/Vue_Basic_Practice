<template>
  <div :style="customStyle">{{ check1 }}</div>
  <div>{{ check2 }}</div>
  <button>버튼</button>
  <div v-for="(arr, idx) in products" :key="arr">{{ arr }}{{ idx }}</div>
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
    };
  },
};
</script>

<style></style>
