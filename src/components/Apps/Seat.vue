<template>
  <div id="Seat" class="container-flud">
    <!-- <p>Window</p> -->
    <div class="vue-draggable-handle menubar" style="height:50px">
      <img src="@/assets/icons/Excel.png" class="img-flud p-1">

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

        <input type="radio" class="btn-check" name="seatbtnradio" id="seatbuttonradio1" autocomplete="off"
          v-on:change="changetab('seatmain')" checked>
        <label class="btn btn-outline-primary" for="seatbuttonradio1">新規作成</label>

        <input type="radio" class="btn-check" name="seatbtnradio" id="seatbuttonradio2" autocomplete="off"
          v-on:change="changetab('seatopen')">
        <label class="btn btn-outline-primary" for="seatbuttonradio2">ファイルを開く</label>

        <input type="radio" class="btn-check" name="seatbtnradio" id="seatbuttonradio3" autocomplete="off"
          v-on:change="changetab('seatdownroad')">
        <label class="btn btn-outline-primary" for="seatbuttonradio3">保存</label>

        <input type="radio" class="btn-check" name="seatbtnradio" id="seatbuttonradio4" autocomplete="off"
          v-on:change="changetab('seathelp')">
        <label class="btn btn-outline-primary" for="seatbuttonradio4">ヘルプ</label>

      </div>
    </div>

    <div id="seatvue">
      <div id="seatmain" class="seattabs">

        <form class="row g-3 align-items-center justify-content-center my-2">

          <div class="col-auto">
            <label class="col-form-label">ファイル名</label>
          </div>
          <div class="col-auto">
            <input type="textarea" class="form-control" placeholder="保存するファイル名を入力" />
          </div>
        </form>

        <div id="HeadSetSpreadSheet" ref="refspreadsheet"></div>
      </div>

      <div id="seatopen" class="seattabs">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ファイル名</th>
              <th scope="col">最終更新日</th>
              <th scope="col">作成者</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(files, index) in permission">
              <th scope="row" class="align-middle">
                <div class="d-flex justify-content-center">
                  <button class="btn btn-primary" @click="fileopen(files.File_Place)">開く</button>
                </div>
              </th>
              <td class="align-middle">{{ files.Title }}</td>
              <td class="align-middle">2022年10月11日12:30</td>
              <td class="align-middle">宮田一慶</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="seatdownroad" class="seattabs">
        <button @click='seatSave()'>保存</button>
      </div>

      <div id="seathelp" class="seattabs">
        <div class="container p-5 ">
          <div class="input-group mb-3 p-3">
            <input type="text" class="form-control" placeholder="ヘルプを検索する" aria-label="ヘルプを検索する"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">検索する</button>
          </div>
          <div class="row container px-5">
            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/Tutorial.svg" class="img-fluid" />
              <p class="helpP">使い方を学ぶ</p>
            </button>

            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/UserGuide.svg" class="img-fluid" />
              <p class="helpP">ユーザーガイド</p>
            </button>

            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/ReleaseNote.svg" class="img-fluid" />
              <p class="helpP">リリースノート</p>
            </button>
          </div>
          <div class="row container px-5">
            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/Feedback.svg" class="img-fluid" />
              <p class="helpP">フィードバック</p>
            </button>

            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/settei.svg" class="img-fluid" />
              <p class="helpP">設定</p>
            </button>

            <button class="btn btn-primary m-1 col helpbtn">
              <img src="@/assets/icons/helpicon/Help.svg" class="img-fluid" />
              <p class="helpP">シートについて</p>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'jsuites/dist/jsuites.js'
import 'jsuites/dist/jsuites.css'
import 'jspreadsheet-ce/dist/jspreadsheet.css'
import jSpreadSheet from 'jspreadsheet-ce'
import testjson from '@/assets/test.json'
import axios from 'axios'

export default {
  name: 'Seat',
  data() {
    return {
      VRHeadSets: [],
      data: null,
      permission: []
    }
  }, created() {
    this.VRHeadSets = testjson
  },
  computed: {
    // 表の初期値
    jSpreadSheetOptins() {
      return {
        // 表の設定等
        // チェックボックスやカレンダー、プルダウンメニューも可能
        minDimensions: [20, 40],
        defaultColWidth: 100,
        data: this.VRHeadSets,
        toolbar: [
          {
            type: 'i',
            content: 'undo',
            onclick: function () {
              jspreadsheetObj.undo();
            }
          },
          {
            type: 'i',
            content: 'redo',
            onclick: function () {
              jspreadsheetObj.redo();
            }
          },
          {
            type: 'i',
            content: 'save',
            onclick: function () {
              jspreadsheetObj.download();
            }
          },
          {
            type: 'select',
            k: 'font-family',
            v: ['Arial', 'Verdana']
          },
          {
            type: 'select',
            k: 'font-size',
            v: ['9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px']
          },
          {
            type: 'i',
            content: 'format_align_left',
            k: 'text-align',
            v: 'left'
          },
          {
            type: 'i',
            content: 'format_align_center',
            k: 'text-align',
            v: 'center'
          },
          {
            type: 'i',
            content: 'format_align_right',
            k: 'text-align',
            v: 'right'
          },
          {
            type: 'i',
            content: 'format_bold',
            k: 'font-weight',
            v: 'bold'
          },
          {
            type: 'color',
            content: 'format_color_text',
            k: 'color'
          },
          {
            type: 'color',
            content: 'format_color_fill',
            k: 'background-color'
          }
        ]
      }
    }
  },
  mounted: function () {
    let me = this
    var tabs = document.getElementsByClassName('seattabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
    // インスタンス化
    const jspreadsheetObj = jSpreadSheet(
      // DOM参照

      this.$refs['refspreadsheet'],
      // 表の設定データ
      this.jSpreadSheetOptins
    )
    // オブジェクトから thisに対してコピー
    Object.assign(this, { jspreadsheetObj })

    // ＝＝＝＝＝初回読み込み時にファイルの一覧取得＝＝＝＝＝＝
    axios.get('https://simpleos-api.azurewebsites.net/api/permission?', {
      params: {
        user_serial: 'FBEbr8wSOlfig0FYIWOq',
        app_id: 'excel'
      }
    })
      .then(function (response) {
        console.log(response.data)
        me.permission = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {

    fileopen: async function (fileplace) {
      let me = this

      // this.editor.save()
      console.log(this.jspreadsheetObj)

      console.log(fileplace)
      // 初回読み込み時に最新更新したファイルオープン
      axios.get('https://simpleos-api.azurewebsites.net/api/excel_api?', {
        params: {
          file_place: fileplace
        }
      })
        .then(function (response) {
          console.log(response.data[0].data)

          this.jspreadsheetObj.setData(response.data[0].data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    seatSave() {
      console.log(JSON.stringify(this.VRHeadSets))
    },
    changetab(tab) {
      var tabs = document.getElementsByClassName('seattabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      document.getElementById(tab).style.display = 'block'
    },
    // メソッドの使用例 https://bossanova.uk/jspreadsheet/v4/docs/programmatically-changes
    getHeaders: function () {
      alert(this.jspreadsheetObj.getHeaders())
    }
  }

}
</script>

<style scoped>
#Seat {
  width: 100%;
  height: 100%;
}

#seatvue {
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: scroll;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#Seat::-webkit-scrollbar {
  /* Chrome, Safari 対応 */
}

.window {
  height: calc(100% - 150px);
  background-color: aliceblue;
}
</style>
