module.export = {
  css: {
    loadOptions: {
      scss: {
        prependData: `
        @import "@/scss/_variables.scss";
        @import "@/scss/_mixins.scss";
        @import "@/scss/_functions.scss";
        @import "@/scss/_reset.scss";
        `,
      },
    },
  },
};

// Vue 버전이 2.X.X라면 이 옵션을 넣어줘야하지만 3이후로는 안넣어도 된다.
