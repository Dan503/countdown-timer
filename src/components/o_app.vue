<template lang="pug">
  .o-app#app
    header.o-app__header
      h1.o-app__title Count down timer

    main.o-app__main
      .o-app__resetWrap
        .time 00:00
    footer.o-app__footer
      p Total time
</template>

<script>
import events from '../helpers/global_events.js';

export default {
  name: "app",
  data(){
    return {
      minutes: 5,
      seconds: 0,
    }
  },
  components: {
  },
  methods: {
  },
};

</script>

<style lang="scss" src="../main.scss"></style>

<style lang="scss">
.o-app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
}
</style>
