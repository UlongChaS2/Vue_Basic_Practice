<template>
  <section>
    <h2>v-bind & class</h2>
    <div>
      <h3>v-bind</h3>
      <div>
        <img v-bind:src="imgSource" alt="randomImage" />
      </div>
      <div>
        <a href="gitURL"
          >변수로 작동이 안됨 바인딩이 안되어 없는 url로 가서 새로고침이 됨</a
        >
      </div>
      <div>
        <a :href="gitURL">{{ gitURL }} 유롱차 깃헙</a>
      </div>
      <div class="note">
        <p class="noteInside">
          v-bind: => :로 생략하여 사용할 수 있음, input v-model 변수와 연결하여
          사용할 수도 있음
        </p>
      </div>
    </div>
    <div>
      <h3>class</h3>
      <input type="text" v-model="inputText" />
      <div
        :class="{
          red: inputText === 'red',
          'none-view': inputText === 'none',
        }"
      >
        상단 input의 value는 {{ inputText }}입니다.
      </div>
      <div class="note">
        <p class="noteInside">
          클래스 명에 조건을 주어 다른 화면을 나타낼 수 있고, 클래스 명에 '-'이
          들어있다면 ''로 전체 클래스이름을 감싸줘야한다.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section03',
  data() {
    return {
      inputText: '',
      imgSource: 'https://placeimg.com/100/100/any',
    };
  },
};
</script>

<style src="./Section03.scss" lang="scss" />
