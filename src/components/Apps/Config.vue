<template>
  <div id="Config" class="container">

    <div class="text-center mt-3">
      <h1>システム設定</h1>
    </div>

    <div class="w-80 mx-auto">

      <div class="d-grid gap-2 col-8 mx-auto">
        <button class="btn btn-primary btn-lg">ログアウトする</button>
      </div>

      <h2 class="w-100">色の変更</h2>

      <div class="btn-group mx-auto w-100 container px-3" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="configbtnradio" id="configbtnradio1" autocomplete="off"
          v-on:change="changeColor('macaron')" checked>
        <label class="btn btn-outline-primary" for="configbtnradio1">マカロン</label>

        <input type="radio" class="btn-check" name="configbtnradio" id="configbtnradio2" autocomplete="off"
          v-on:change="changeColor('nuts')">
        <label class="btn btn-outline-primary" for="configbtnradio2">ナッツ</label>

        <input type="radio" class="btn-check" name="configbtnradio" id="configbtnradio3" autocomplete="off"
          v-on:change="changeColor('mattya')">
        <label class="btn btn-outline-primary" for="configbtnradio3">マッチャ</label>

        <input type="radio" class="btn-check" name="configbtnradio" id="configbtnradio4" autocomplete="off"
          v-on:change="changeColor('cake')">
        <label class="btn btn-outline-primary" for="configbtnradio4">ケーキ</label>

        <input type="radio" class="btn-check" name="configbtnradio" id="configbtnradio5" autocomplete="off"
          v-on:change="changeColor('chocolate')">
        <label class="btn btn-outline-primary" for="configbtnradio5">チョコ</label>
      </div>

      <h2 class="w-100">ドライブデータ使用量</h2>
      <chart class="container-fluid dataen" :styles="myStyles"></chart>
    </div>

  </div>
</template>

<script>

import Chart from './ConfigCharts.vue'
export default {
  components: {
    Chart
  },
  name: 'Config',
  data() {
    return {
      coloredit: 'あお',
      height: 200
    }
  },
  methods: {
    changeColor(color) {
      this.$emit('parentFunc', color)
    }
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}

</script>

<style scoped>
#Config {
  background-color: rgb(228, 228, 228);
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
}

.w-80 {
  width: 90%;
}

h2 {
  width: 380px;
  font-size: 16px;
  margin-left: 10px;
  padding-top: 25px;
  border-bottom: 1px solid #ccc;
}

.btn-group {
  margin-left: 10px;
}

.btn-lg {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 16px;
}

.dataen {}
</style>
