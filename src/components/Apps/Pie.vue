<script>

import axios from 'axios'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: function () {
    return {

      JSONDATA: [],
      chartdata: {
        datacollection: {
          labels: [],
          datasets: [
            {
              backgroundColor: ['#FF6384', '#36A2EB'],
              data: []
            }
          ]
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex]
            },
            font: {
              size: 1
            }
          }
        }
      }
    }
  },
  mounted() {
    let me = this

    axios.get('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m,precipitation,pressure_msl,windspeed_10m&timezone=Asia%2FTokyo')
      .then(function (response) {
        console.log(response.data)
        console.log(me.chartdata)
        // 円グラフにデータ代入
        me.chartdata.datacollection.labels = ['雨の確率', '晴れの確率']
        me.chartdata.datacollection.datasets[0].data = [20, 80]

        me.renderChart(me.chartdata['datacollection'], me.options)
      })
      .catch(function (error) {
        console.log(error)
      })

  }
}
</script>

<style scoped>
.dataen {}
</style>
