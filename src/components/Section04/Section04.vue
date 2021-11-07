<template>
  <section>
    <h2>v-if :conditional statement</h2>
    <div>당신은 나이는 {{ age }} 입니다.</div>
    <p v-if="age > 18">당신은 어른입니다.</p>
    <p v-else-if="age > 13 && age <= 18">당신은 청소년입니다.</p>
    <p v-else>당신은 어린이입니다.</p>
    <div class="note">
      <p class="noteInside">
        조건문(if, else if, else) 사이에 다른 태그를 넣으면 안된다.
      </p>
    </div>
    <h2>v-if VS v-show</h2>
    <div v-if="isVisibility">
      false일때 display: none; 속성처럼 요소자체가 없어짐
    </div>
    <div v-show="isVisibility">
      false일때 visibility: hidden; 속성처럼 요소는 있지만 눈에 안보임
    </div>
    <div class="note">
      <p class="noteInside">
        v-if='false'를 무거운 데이터에 조건을 걸면 DOM을 조작하기 때문에 시간이
        많이 걸리지만 v-show는 데이터는 그래도 있고 보였다가 안보였다가
        하기때문에 효율적이다.
      </p>
    </div>
    <h2>loop statement</h2>
    <div v-for="(animal, idx) in animals" :key="animal">
      {{ animal }}의 index는 {{ idx }}
    </div>
    <ul>
      <li v-for="{ name, job, gender, skills } in users" :key="name">
        이름은: {{ name }} 직업은: {{ job }} 성별은: {{ gender }}
        <template v-for="skill in skills" :key="skill">
          <p v-if="skill !== 'React'">{{ skill }}</p>
        </template>
      </li>
    </ul>
    <div class="note">
      <p class="noteInside">
        조건문과 반복문을 같이 쓸 수가 없어 반복문을 아무 의미없는 template
        태그안에 넣고 그 속에 조건문이 담긴 태그를 넣어준다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section04',
  data() {
    return {
      age: 27,
      isVisibility: true,
      animals: ['dog', 'cat', 'monkey', 'rat', 'bird'],
      users: [
        {
          name: 'UlongCha',
          job: 'developer',
          gender: 'female',
          skills: ['HTML', 'CSS', 'Vue', 'React'],
        },
        {
          name: 'yujung',
          job: 'chef',
          gender: 'female',
          skills: ['HTML', 'CSS', 'Vue', 'React'],
        },
        {
          name: 'subin',
          job: 'police',
          gender: 'female',
          skills: ['HTML', 'CSS', 'Vue', 'React'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
