<template>
  <div id="footer" class="m-0">
    <div class="tab">

      <button id="Configbtn" class="m-0 p-0" style="border:none ;" @click="toggleApp('Config')">
        <svg viewBox="0 0 1080 1080" width="64px" fill="transparent">
          <path
            d="M225,0H855c124.27,0,225,100.74,225,225V855c0,124.27-100.74,225-225,225H225C100.74,1080,0,979.26,0,855V225C0,100.74,100.74,0,225,0Z" />
          <g>
            <g id="FooterLogo">
              <path
                d="M820.13,556.32H279.91c-7.37,0-13.35,5.98-13.35,13.35v134.34c0,7.37,5.98,13.35,13.35,13.35h32.1l50.48,323.09c1.01,6.5,6.62,11.3,13.21,11.3h348.73c6.59,0,12.19-4.8,13.21-11.3l45.97-294.28h-25.23c-.64,0-1.21-.03-1.79-.09l-43.58,278.97H387.11l-48.08-307.69h417.79c.49-.06,.98-.09,1.5-.09h34.88c.46,0,.9,.03,1.33,.06h25.6c7.37,0,13.35-5.98,13.35-13.35v-134.34c0-7.37-5.98-13.35-13.38-13.35l.03,.03Zm-13.38,134.34H293.28v-107.61H806.78v107.61h-.03Z" />
              <path
                d="M539.25,384.67c-.35,7.46-.81,14.91-1.42,22.34-1.42,17.68-3.24,35.4-5.26,53.11-2.57,22.42-5.43,44.88-8.5,67.27h25.69c1.27-12.14,2.51-24.3,3.67-36.44l59.87-34.97c9.85-5.84,19.53-11.27,29.5-17.4,.2,0,.4,.06,.61,.03h.84c2.75,.12,5.46,.17,8.15,.17,47.39,0,86.89-16.01,111.83-45.48,65.28-77.13,20-171.21,14.04-177.2-4.91-4.94-12.77-5.29-18.09-.84-9.07,7.6-23.67,12.14-39.13,16.93-22.54,6.99-48.11,14.94-65.88,35.31-47.59,54.56-34.73,130.12-27.11,156.04-8.29,4.31-16.99,8.52-25.37,12.8l-46.32,23.29c1.42-17.02,2.69-34.1,3.58-51.26,.43-8.15,.69-16.33,.81-24.5,.32-.32,.61-.64,.87-.98,.26-.29,.55-.61,.92-1.01,47.07-52.04,67.79-110.96,58.34-165.93-23.58-136.57-161.36-171.96-172.74-170.95-6.94,.61-12.25,6.39-12.28,13.35,0,17.77-8.52,38.11-17.57,59.67-12.57,30.02-26.82,64.01-21.15,100.13,16.07,102.38,111.37,152.89,142.09,166.5Z" />
            </g>
          </g>
        </svg> </button>

      <button id="Infobtn" class="btn btn-primary m-1" style="width:300px" @click="toggleApp('Info')">
        <div class="row">
          <div class="col col-3">
            <svg id="OndoIcon" viewBox="0 0 150 300" width="25px">
              <path
                d="M99.94,166.28v-16.44h20.33v-6.5h-20.33v-18.5h20.33v-6.5h-20.33v-18.5h20.33v-6.5h-20.33v-18.5h20.33v-6.5h-20.33v-6.64c0-13.75-11.19-24.94-24.94-24.94s-24.94,11.19-24.94,24.94v104.58c-16.55,9.11-26.75,26.28-26.75,45.28,0,28.51,23.19,51.7,51.7,51.7s51.7-23.19,51.7-51.7c0-19-10.2-36.17-26.75-45.28Zm-24.94,90.47c-24.92,0-45.2-20.28-45.2-45.2,0-17.2,9.56-32.68,24.96-40.41,1.1-.55,1.79-1.67,1.79-2.9V61.69c0-10.17,8.27-18.44,18.44-18.44s18.44,8.27,18.44,18.44v106.54c0,1.23,.69,2.35,1.79,2.91,15.4,7.73,24.96,23.21,24.96,40.41,0,24.92-20.28,45.2-45.2,45.2Z" />
              <path
                d="M80,189.91V76.65h-10v113.26c-10.66,2.3-18.65,11.77-18.65,23.11,0,13.06,10.59,23.65,23.65,23.65s23.65-10.59,23.65-23.65c0-11.34-7.99-20.82-18.65-23.11Z" />
            </svg>
            <p class="ondo"> {{ Math.round(temperature) }}℃</p>
          </div>
          <div class="col col-2">
            <svg viewBox="0 0 1080 1080" width="65px">
              <path
                d="M225,0H855c124.27,0,225,100.74,225,225V855c0,124.27-100.74,225-225,225H225C100.74,1080,0,979.26,0,855V225C0,100.74,100.74,0,225,0Z"
                style="fill: none;" />
              <g id="Weather">
                <path
                  d="M866.65,292.21c-31.5-31.48-72.97-53.12-118.99-60.52-14.45-37.46-38.52-70.07-69.3-94.59-38.78-30.92-88.49-49.23-141.95-48.53-54.02,.67-103.7,20.65-141.86,53.17-28.63,24.39-51.07,55.85-64.56,91.73-59.52,1.04-113.47,26.09-151.97,65.65-38.79,39.74-62.52,94.72-61.72,154.64,.75,59.93,25.9,114.28,65.7,153.01,39.74,38.79,94.72,62.52,154.64,61.72,82.45-1.06,298.02-3.85,379.1-4.91,59.93-.75,114.28-25.9,152.99-65.7,38.79-39.74,62.55-94.69,61.75-154.64-.75-58.96-25.13-112.5-63.82-151.02Zm-59.35,245.79c-23.64,24.26-56.13,39.33-92.65,39.82-81.11,1.03-296.67,3.83-379.12,4.88-36.51,.46-69.37-13.78-93.68-37.39-24.21-23.67-39.28-56.13-39.8-92.67-.44-36.51,13.81-69.37,37.39-93.68,23.69-24.18,56.16-39.28,92.67-39.77,7.36-.1,14.87,.57,22.79,1.84l41.29,6.65,7.67-41.1c5.9-31.54,22.61-59.38,46.25-79.5,23.66-20.12,53.87-32.3,87.41-32.74,33.19-.41,63.36,10.74,87.43,29.87,24.02,19.13,41.51,46.09,48.58,76.94l7.53,32.84,33.69,.47c35.68,.47,67.73,14.99,91.32,38.46,23.53,23.56,38.15,55.49,38.64,91.41,.44,36.54-13.81,69.37-37.42,93.65Z" />
                <path
                  d="M340.08,713.97s-33.74,31.5-41.72,41.22c-3.04,3.7-5.29,8.13-6.56,13.05-4.52,17.93,6.34,36.14,24.28,40.69,17.93,4.49,36.14-6.34,40.69-24.28,1.24-4.94,1.32-9.88,.44-14.58-2.41-12.35-17.13-56.09-17.13-56.09Z" />
                <path
                  d="M300.11,872.19s-33.74,31.53-41.72,41.25c-3.01,3.73-5.29,8.11-6.53,13.05-4.55,17.93,6.34,36.14,24.28,40.66,17.93,4.55,36.14-6.32,40.66-24.28,1.24-4.91,1.35-9.88,.44-14.55-2.41-12.35-17.13-56.12-17.13-56.12Z" />
                <path
                  d="M540.43,711.36s-33.74,31.53-41.72,41.25c-3.01,3.7-5.29,8.11-6.53,13.02-4.55,17.96,6.32,36.17,24.25,40.71,17.93,4.49,36.17-6.37,40.69-24.28,1.24-4.97,1.32-9.88,.41-14.61-2.38-12.32-17.1-56.09-17.1-56.09Z" />
                <path
                  d="M500.45,869.61s-33.74,31.53-41.69,41.25c-3.04,3.73-5.32,8.11-6.56,13.02-4.55,17.96,6.32,36.17,24.28,40.69,17.93,4.52,36.14-6.34,40.66-24.28,1.26-4.94,1.32-9.88,.44-14.55-2.38-12.35-17.13-56.12-17.13-56.12Z" />
                <path
                  d="M740.77,708.78s-33.74,31.53-41.72,41.25c-3.04,3.7-5.32,8.11-6.56,13.02-4.52,17.93,6.37,36.17,24.28,40.69,17.96,4.52,36.17-6.34,40.69-24.28,1.26-4.94,1.32-9.88,.44-14.58-2.41-12.32-17.13-56.09-17.13-56.09Z" />
                <path
                  d="M700.79,867.02s-33.71,31.5-41.69,41.25c-3.04,3.7-5.29,8.08-6.56,13.02-4.52,17.93,6.34,36.14,24.28,40.69,17.93,4.52,36.14-6.34,40.69-24.28,1.24-4.94,1.32-9.88,.41-14.58-2.41-12.35-17.13-56.09-17.13-56.09Z" />
              </g>
            </svg>
          </div>
          <div class="col col-7">
            <p class="hiduke">{{ date }}</p>
            <p class="jikan">{{ jikan }}</p>
          </div>
        </div>
      </button>

      <button class="btn btn-primary m-1" @click="toggleApp('Paint')">
        <img src="@/assets/icons/Paint.png" class="">
      </button>

      <button class="btn btn-primary m-1" @click="toggleApp('Seat')">
        <img src="@/assets/icons/Excel.png" class="">
      </button>

      <button class="btn btn-primary m-1" @click="toggleApp('Word')">
        <img src="@/assets/icons/Word.png" class="">
      </button>

      <button class="btn btn-primary m-1" @click="toggleApp('Youtube')">
        <img src="@/assets/icons/MyTube.png" class="">
      </button>

      <button id="chatapp" class="btn btn-primary m-1" @click="toggleApp('Chat')">
        <img src="@/assets/icons/Cone.png" class="">
        <!-- <svg version="1.1" id="_x32_" x="0px" y="0px" viewBox="0 0 512 512"
          style="width: 48px; height: 48px; opacity: 1;" xml:space="preserve">
          <g>
            <path class="st2" d="M371.415,183.131c17.758,0,34.83,2.371,50.873,6.644c-17.414-79.136-104.446-139.34-209.451-139.34
                    C95.288,50.435,0,125.809,0,218.804c0,59.291,38.78,111.379,97.336,141.368l-33.002,73.796
                    c62.089-6.899,122.958-23.217,169.422-38.27c-17.91-21.933-28.024-48.236-28.024-76.266
                    C205.732,244.275,280.058,183.131,371.415,183.131z" style="fill: rgb(6, 199, 85);"></path>
            <path class="st2" d="M512,319.432c0-61.428-62.947-111.213-140.585-111.213c-77.647,0-140.595,49.785-140.595,111.213
                    c0,46.914,36.736,87.006,88.678,103.344c28.259,10.976,88.286,31.929,150.008,38.789L447.7,412.819
                    C486.382,393.012,512,358.603,512,319.432z" style="fill: rgb(6, 199, 85);"></path>
          </g>
        </svg> -->

      </button>

      <button class="btn btn-primary m-1" @click="toggleApp('Add')">
        <img src="@/assets/icons/AppStore2.png" class="">
      </button>

      <button id="Menubtn" class="btn btn-primary m-1" @click="seiretu('')">
        <svg viewBox="0 0 1080 1080">
          <path
            d="M225,0H855c124.27,0,225,100.74,225,225V855c0,124.27-100.74,225-225,225H225C100.74,1080,0,979.26,0,855V225C0,100.74,100.74,0,225,0Z"
            style="fill: none;" />
          <g id="MenuIcon">
            <rect x="225" y="225" width="157.5" height="157.5" />
            <rect x="461.25" y="225" width="157.5" height="157.5" />
            <rect x="697.5" y="225" width="157.5" height="157.5" />
            <rect x="225" y="461.25" width="157.5" height="157.5" />
            <rect x="461.25" y="461.25" width="157.5" height="157.5" />
            <rect x="697.5" y="461.25" width="157.5" height="157.5" />
            <rect x="225" y="697.5" width="157.5" height="157.5" />
            <rect x="461.25" y="697.5" width="157.5" height="157.5" />
            <rect x="697.5" y="697.5" width="157.5" height="157.5" />
          </g>
        </svg>
      </button>

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Footer',
  data() {
    return {
      Paint_flg: false,
      Seat_flg: false,
      Config_flg: false,
      Info_flg: false,
      Youtube_flg: false,
      Add_flg: false,
      Word_flg: false,
      Chat_flg: false,
      date: '',
      jikan: '',
      weatherCode: null,
      temperature: null
    }
  },
  mounted: function () {
    // 天気API接続
    axios.get('http://localhost:7185/api/upload_image', {
      params: {
        file_path: 'C:\\Users\\ikkei\\test.txt'
      }
    })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    this.Time()
    setInterval(() => this.Time(), 1000)

    var data = this

    // 天気API接続
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&current_weather=true&timezone=Asia%2FTokyo')
      .then(function (response) {
        console.log(response.data)

        data.weatherCode = response.data.current_weather.weathercode
        data.temperature = response.data.current_weather.temperature
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {

    // Main親要素のイベントハンドリングappclick
    // li: 関数名 appclick を toggleApp に変更
    // li: appの追加削除イヴェントを親要素に教える
    toggleApp(app) {
      console.log(app)
      this.$emit('click-toggle-app', app)
    },
    // Main親要素のイベントハンドリングfuncclic
    // li: 関数名 Func を seiretu に変更
    // li: 整列クリックイヴェントを親要素に教える

    seiretu(e) {
      this.$emit('click-seiretu', e)
    },
    Time() {
      const youbi = ['日', '月', '火', '水', '木', '金', '土']
      const date1 = new Date()
      const date2 = date1.getFullYear() + '年' +
        (date1.getMonth() + 1) + '月' +
        date1.getDate() + '日' + '(' +
        youbi[date1.getDay()] + ')' // 0は日曜日～6は土曜日
      const date3 =
        date1.getHours() + ' : ' + date1.getMinutes()
      this.date = date2
      this.jikan = date3
    }

  },
  components: {
  }
}
</script>

<!--スタイルの指定をします-->
<style>
#footer {
  background-color: #F3D2C1;
  height: 72px;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
}

#footer::-webkit-scrollbar {
  /* Chrome, Safari 対応 */
  display: none;
}

.tab {
  display: contents;
  min-width: 1000px;
  height: 72px;
  vertical-align: middle;
}

img {
  width: 50px;

}

.ondo {
  display: inline-block;
  font-size: 20px;
  line-height: 0;
  padding-top: 20px;
}

.hiduke {
  padding-top: 10px;
  font-size: 15px;
  line-height: 0;
}

.jikan {
  padding-top: 25px;
  font-size: 25px;
  line-height: 0;
}

.m-1 .btn .btn-primary {
  background-color: transparent;
}

button.m-1 {
  height: 64px;
  width: 64px;
  padding: 0;
  background-color: transparent;
  border: none;
  padding: 0;
}
</style>
