<template>
  <section>
    <h2>v-model & v-html</h2>
    <div>
      <h3>1️⃣ v-model</h3>
      <input type="text" v-model="gitURL" />
      <div>상단 input value는 {{ gitURL }} 입니다.</div>
      <div class="note">
        <p class="noteInside">
          한글로 input에 값을 넣으면 한박자씩 늦어지지만 영어는 그렇지않다.
        </p>
      </div>
    </div>
    <div>
      <h3>2️⃣ v-html</h3>
      <div v-html="vHtmlText" />
      <div class="note">
        <p class="noteInside">
          확실하게 믿을 수 있는 경우에만 사용, 받아오는 데이터에서 사용하면
          위험한 상황이 올 수 있음(태그 안 이벤트를 넣어 데이터를 탈취할 수
          있음)
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Scetion02',
  data() {
    return {
      vHtmlText: '<h4>h4태그가 포함된 문자열 입니다.</h4>',
      gitURL: 'https://github.com/UlongChaS2',
    };
  },
};
</script>
