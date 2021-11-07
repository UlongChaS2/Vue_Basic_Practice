<template>
  <section>
    <h2>methods & event</h2>
    <div>
      <h3>methods</h3>
      <button v-on:click="increase($event, 1)">증가</button>
      <button @click="decrease">감소</button>
      <button @mouseover="increase($event, 10)">변수값 증가</button>
      <div>{{ count }} {{ currentX }} {{ currentY }}</div>
      <button @mouseenter="hello">인사</button>
      <button @mouseout="goodBye">작별</button>
      <div>{{ message }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section05',
  data() {
    return {
      count: 0,
      currentY: '',
      currentX: '',
      message: '인삿말',
    };
  },
  methods: {
    increase(e, value) {
      this.count += value;
      this.currentY = e.pageY;
      this.currentX = e.pageX;
    },
    decrease() {
      this.count--;
    },
    hello() {
      this.message = '안녕~~';
    },
    goodBye() {
      this.message = '잘가!';
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100px;
  height: 30px;
  margin-right: 10px;
  font-size: 12px;
}
</style>
