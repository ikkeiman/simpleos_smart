<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['ペイント', 'エクセル', 'ワード', '空き容量'],
        datasets: [
          {
            backgroundColor: ['#FF6384', '#36A2EB', '#FF6384', '#222'],
            data: [0, 20, 10, 50]
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
  }),

  mounted () {
    this.renderChart(this.chartdata['datacollection'], this.options)
  }
}
</script>
