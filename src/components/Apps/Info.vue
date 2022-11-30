<template>
  <div id="Info" class="container-flud">
    <div class="vue-draggable-handle menubar" style="height:50px">
      <img src="@/assets/icons/Add.gif" class="img-fluid p-1">

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

        <input type="radio" class="btn-check" name="infobtnradio" id="infobuttonradio1" autocomplete="off"
          v-on:change="changetab('calender')" checked>
        <label class="btn btn-outline-primary" for="infobuttonradio1">カレンダー</label>

        <input type="radio" class="btn-check" name="infobtnradio" id="infobuttonradio2" autocomplete="off"
          v-on:change="changetab('weatherreport')">
        <label class="btn btn-outline-primary" for="infobuttonradio2">天気情報</label>

        <input type="radio" class="btn-check" name="infobtnradio" id="infobuttonradio3" autocomplete="off"
          v-on:change="changetab('coronanews')">
        <label class="btn btn-outline-primary" for="infobuttonradio3">コロナ感染情報</label>

      </div>
    </div>
    <div class="container-flud wrap " id="infomain">
      <div id="calender" class="infotabs">
        <v-calendar is-expanded :attributes="attrs" @dayclick="onDayClick"></v-calendar>
        <div id="sklist" class="position-relative">
          <p class="fs-3">{{ yoteihyou }}の予定</p>
          <button id="createbtn" class="btn btn-success m-1, position-absolute top-0 end-0" @click="yoteisakusei()">
            新規予定の作成
          </button>
          <div id="yotei_div">
            <div>
              開始日時：<input type="datetime-local" id="st_datetime">
              　終了日時：<input type="datetime-local" id="ed_datetime">
            </div>
            <!-- スケジュールの名前 -->
            <!-- 名前<input type="text" id="yotei" placeholder="名前を入力してください"> -->

            <div id="yoteisakusei" class="row align-items-start">
              <div class="col-5">
                <input type="name" class="form-control" id="name" aria-describedby="name"
                  placeholder="予定のタイトルを入力してください" />
              </div>
              <!-- <button @click="yotei()">予定追加</button> -->
              <div class="col-4">
                <select class="form-select" aria-label="Default select example" id="color">
                  <option selected>色を選択してください</option>
                  <option value="red">レッド</option>
                  <option value="yellow">イエロー</option>
                  <option value="green">グリーン</option>
                  <option value="blue">ブルー</option>
                  <option value="purple">パープル</option>
                  <option value="brown">ブラウン</option>
                  <option value="gray">グレー</option>
                </select>
              </div>

              <div class="col-2">
                <button id="create" class="btn btn-success" @click="create()">作成</button>
                <button class="btn btn-danger" @click="cancel()">キャンセル</button>
              </div>

              <!-- <div class="col-1">
              </div> -->
            </div>
          </div>

          <div id="schedulelist">
            <tbody id="listdelete" v-for="(yotei, index) in todayyotei">
              <tr>
                <td rowspan="2">
                  <button id="delete" class="btn btn-light" @click="">×</button>
                </td>
                <td>{{ yotei.st_date }}</td>
                <td rowspan="2">
                  <div style="background-color:black; width:5px; height:30px;"></div>
                </td>
                <td rowspan="2">
                  <font size="5">{{ yotei.title }}</font>
                </td>
              </tr>
              <tr>
                <td>{{ yotei.ed_date }}</td>
              </tr>
            </tbody>
          </div>

        </div>
      </div>

      <div id="weatherreport" class="infotabs">
        <!-- <h4 align="center">時間ごとの詳細な天気予報</h4> -->
        <figure class="highcharts-figure">
          <div id="container"></div>
          <p class="highcharts-description">
          </p>
        </figure>
        <PieChart id="piechart" class="container-fluid dataen" :styles="myStyles" />
      </div>

      <div id="coronanews" class="infotabs mx-auto">
        <p>新型コロナウイルス感染症対策 (全国の感染者数)</p>

        <div class="row container">
          <div class="m-1 col">
            <img src="@/assets/img/covid5.png" class="img-fluid" id="covid-img" />
          </div>
        </div>

        <div class="row container">
          <div class="m-1 col">
            <img src="@/assets/img/covid1.png" class="img-fluid" id="covid-img" />
          </div>
          <div class="m-1 col">
            <img src="@/assets/img/covid3.png" class="img-fluid" id="covid-img" />
          </div>
        </div>

        <div class="row container">
          <div class="m-1 col">
            <img src="@/assets/img/covid4.png" class="img-fluid" id="covid-img" />
          </div>
          <div class="m-1 col">
            <img src="@/assets/img/covid2.png" class="img-fluid" id="covid-img" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import PieChart from './Pie.vue'

export default {
  components: {
    PieChart
  },
  name: 'Info',
  data() {
    return {

      height: 200,
      jsondata: [],
      coviddata: [],
      todayyotei: [],
      yoteihyou: new Date(),
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080'
          },
          key: 'today',
          highlight: {
            backgroundColor: '#000000'
          },
          dates: new Date(),
          popover: {
            label: '今日の日付'
          }
        }
      ]

    }
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  },
  mounted() {
    let me = this
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayofweek = d.getDay();
    const dayname = ['日', '月', '火', '水', '木', '金', '土'];
    let now_date = console.log(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']' + 'の予定');
    // カレンダーの登録内容をAPI通信して更新する
    // カレンダーの配列attrsに下記をついかで世界が平和に
    // {
    //       key: プライマリーキー,
    //       highlight: '色',//red,purple....
    // dates: {
    //   start: new Date('2022-11-03 01:00:00'),
    //   end: new Date('2022-11-06 01:00:00')
    // },
    //       popover: {
    //         label: 'ここにメッセージを入力'
    //       }
    // }


    axios.get('https://simpleos-api.azurewebsites.net/api/info_reg?', {
      params: {
        user_serial: 'FBEbr8wSOlfig0FYIWOq'
      }
    })
      .then(function (response) {
        console.log(response.data)

        // scheduleデータの配列分ループする
        for (const elem of response.data) {
          i = i + 1
          const schedule = {
            'key': elem.renban,
            'highlight': elem.YoteiColor,
            'dates': {
              'start': new Date(elem.start_time),
              'end': new Date(elem.end_time)
            },
            'popover': {
              'label': elem.Title
            }
          }

          // attrs配列の最後にプッシュする
          me.attrs.push(schedule)
        }
        console.log(me.attrs)
      })
      .catch(function (error) {
        console.log(error)
      })

    document.getElementById('yotei_div').style.display = 'none'
    // document.getElementById('cancel').style.display = 'none'

    // 円グラフ(降水確率)
    // document.getElementById('piechart').style.display = 'none'
    axios.get('https://opendata.corona.go.jp/api/Covid19JapanAll?dataName=愛知県')
      .then(function (response) {
        console.log(response.data)
        me.coviddata = response.data.itemList
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m,precipitation,pressure_msl,windspeed_10m&timezone=Asia%2FTokyo')
      .then(response => {
        console.log(response.data.hourly)
        console.log(response.data.hourly.time)
        me.jsondata = response.data
        var i = 0

        for (const elem of response.data.hourly.time.slice(0, 10)) {
          console.log(elem)

          response.data.hourly.time[i] = elem.substr(5, 2) + '月' + elem.substr(8, 2) + '日' + elem.substr(11, 2) + '時' /* グラフ下部の日付 */
          i = i + 1
        }

        // ===================テスト用===========================

        Highcharts.addEvent(Highcharts.Point, 'click', function () {
          if (this.series.options.className.indexOf('popup-on-click') !== -1) {
            const chart = this.series.chart
            const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x)
            const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`

            const anchorX = this.plotX + this.series.xAxis.pos
            const anchorY = this.plotY + this.series.yAxis.pos
            const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right'
            const x = align === 'left' ? anchorX + 10 : anchorX - 10
            const y = anchorY - 30
            if (!chart.sticky) {
              chart.sticky = chart.renderer
                .label(text, x, y, 'callout', anchorX, anchorY)
                .attr({
                  align,
                  fill: 'rgba(0, 0, 0, 0.75)',
                  padding: 10,
                  zIndex: 7 // Above series, below tooltip
                })
                .css({
                  color: 'white'
                })
                .on('click', function () {
                  chart.sticky = chart.sticky.destroy()
                })
                .add()
            } else {
              chart.sticky
                .attr({ align, text })
                .animate({ anchorX, anchorY, x, y }, { duration: 250 })
            }
          }
        })

        Highcharts.chart('container', {
          // グラフ属性設定
          // 各属性の詳細：https://api.highcharts.com/highcharts/
          title: {
            text: '時間ごとの詳細な天気予報'
          },
          xAxis: {
            categories: response.data.hourly.time.slice(0, 10)
          },
          yAxis: {
            title: {
              text: '単位'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: '℃'
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [
            {
              name: '気温',
              data: response.data.hourly.temperature_2m.slice(0, 10)
            },
            {
              name: '降水量',
              data: response.data.hourly.precipitation.slice(0, 10)
            },
            {
              name: '風速',
              data: response.data.hourly.windspeed_10m.slice(0, 10)
            }

          ],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 600
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }]
          }
        })

        // =====================================================
      })
      .catch(error => {
        console.log(error)
      })

    console.log(this.jsondata.hourly)

    var tabs = document.getElementsByClassName('infotabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
  },
  methods: {
    // カレンダーから日付を選択し、該当する予定を表示
    onDayClick(day) {
      console.log(this.attrs)
      const Y = day.id.substring(0, 4)
      const M = day.id.substring(5, 7)
      const D = day.id.substring(8, 10)
      // const H = day.id.substring(11, 13)
      // const m = day.id.substring(14, 16)
      const SelectDate = parseInt(Y + M + D)
      const hiduke = Y + '年' + M + '月' + D + '日'
      // const Start_Date = H + '：' + m
      // const C = day.id.background-color
      console.log(SelectDate)
      this.todayyotei = []
      this.yoteihyou = hiduke
      // this.skeduleee = Start_Date
      //this.color = C

      for (var i = 1; i < this.attrs.length; i++) {
        var StDate = parseInt(this.attrs[i].dates.start.getFullYear().toString() + (this.attrs[i].dates.start.getMonth() + 1).toString() + this.attrs[i].dates.start.getDate().toString())
        var EdDate = parseInt(this.attrs[i].dates.end.getFullYear().toString() + (this.attrs[i].dates.end.getMonth() + 1).toString() + this.attrs[i].dates.end.getDate().toString())

        console.log(StDate)
        console.log(EdDate)
        console.log(SelectDate)

        console.log(SelectDate >= StDate && SelectDate <= EdDate)

        if (SelectDate >= StDate && SelectDate <= EdDate) {
          const yotei = {
            'st_date': this.attrs[i].dates.start,
            'ed_date': this.attrs[i].dates.end,
            'title': this.attrs[i].popover.label,
            'color': this.attrs[i].highlight,
            'today': hiduke
          }

          // attrs配列の最後にプッシュする
          this.todayyotei.push(yotei)
        }
      }
      console.log(this.todayyotei)
    },
    // 「新規予定の作成」ボタンを押下後、「新規予定の作成」ボタンを消す
    yoteisakusei() {
      document.getElementById('yotei_div').style.display = 'block'
      document.getElementById('createbtn').style.display = 'none'
    },
    yotei() {
      // document.getElementById('yotei_div').style.display = 'none'
    },
    // 「キャンセル」ボタンを押下後、「新規予定の作成」ボタンを表示
    cancel() {
      document.getElementById('createbtn').style.display = 'block'
      document.getElementById('yotei_div').style.display = 'none'
    },
    create() { // 日にち、名前、カラーが設定してあった場合、実行
      // 予定作成要素追加ent.getElementById('yotei').value
      let StTime = document.getElementById('st_datetime').value
      let EdTime = document.getElementById('ed_datetime').value
      let color = document.getElementById('color').value
      let yotei = document.getElementById('yotei').value
      console.log(StTime)
      console.log(EdTime)
      console.log(yotei)
      console.log(color)

      if (yotei !== null && StTime !== null && EdTime !== null && color !== null) {
        // 予定を作成する処理
        alert('内容:' + yotei + '開始日時:' + StTime + '終了日時:' + EdTime + '色:' + color)
      } else {
        // nullで押下した場合のアラート表示
        alert('未入力があります')
      }
    },

    changetab(tab) {
      var tabs = document.getElementsByClassName('infotabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      document.getElementById(tab).style.display = 'block'
    }
  }

}
</script>

<!--スタイルの指定をします-->
<style scoped>
#covid-img {
  width: 100%;
}

#infomain {
  height: calc(100% - 50px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
}

#Info {
  height: 100%;
}

/* .wrap {
  background-color: #c1e5cd;
} */

.fs-3 {
  /* padding-top: 15px; */
  background-color: #CCCCCC;
}

#name {
  /* margin: 10px 0; */
}

#color {
  margin-bottom: 10px;
}

#createbtn {
  color: black;
}

#yotei {
  /* margin-top: 50px; */
}

#delete {
  color: red;
}

#listdelete {
  font-size: 10px;
}

#create {
  color: black;
}

#yoteisakusei {
  padding-top: 10px;
}

#schedulelist {
  /* margin-top: 10px; */
}
</style>
