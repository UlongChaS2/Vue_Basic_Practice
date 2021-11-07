<template>
  <section>
    <h2>기본 텍스트</h2>
    <div class="text">{{ text }}</div>
    <div v-text="vueText" />
    <div class="text" :style="customStyle">
      스타일을 변수로 활용 {{ vueText }}는 문자 사이에 넣을 수 없음
    </div>
  </section>
</template>
<script>
export default {
  name: 'Section01',
  data() {
    return {
      text: '텍스트 (머스태치문법)',
      vueText: '내장 Vue text',
      customStyle: 'color: blue',
    };
  },
};
</script>
<style src="./Section01.scss" lang="scss" scoped></style>
