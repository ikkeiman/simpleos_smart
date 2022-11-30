<template>
  <div id="Word" class="container-flud">
    <div class="container-flud wrap m-0 h-100">
      <div class="vue-draggable-handle menubar" style="height: 50px">
        <img src="@/assets/icons/Word.png" class="img-flud p-1" />
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

          <input type="radio" class="btn-check" name="wordbtnradio" id="wordbuttonradio1" autocomplete="off"
            v-on:change="changetab('wordmain')" checked>
          <label class="btn btn-outline-primary" for="wordbuttonradio1">新規作成</label>

          <input type="radio" class="btn-check" name="wordbtnradio" id="wordbuttonradio2" autocomplete="off"
            v-on:change="changetab('wordopen')">
          <label class="btn btn-outline-primary" for="wordbuttonradio2">ファイルを開く</label>

          <input type="radio" class="btn-check" name="wordbtnradio" id="wordbuttonradio3" autocomplete="off"
            v-on:change="changetab('worddownroad')">
          <label class="btn btn-outline-primary" for="wordbuttonradio3">保存</label>

          <input type="radio" class="btn-check" name="wordbtnradio" id="wordbuttonradio4" autocomplete="off"
            v-on:change="changetab('wordhelp')">
          <label class="btn btn-outline-primary" for="wordbuttonradio4">ヘルプ</label>

        </div>
      </div>
      <!-- <p>Body</p> -->
      <div id="wordVue" class="container-flud MainVue no-drag">

        <div id="wordmain" class="wordtabs container">
          <form class="row g-3 align-items-center justify-content-center mt-3">
            <div class="col-auto">
              <label class="col-form-label">ファイル名</label>
            </div>
            <div class="col-auto">
              <input type="textarea" class="form-control" />
            </div>
          </form>
          <div id="editorjs" class="container p-5"></div>
        </div>

        <div id="wordopen" class="wordtabs">
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
                <td class="align-middle">{{ files.title }}</td>
                <td class="align-middle">2022年10月11日12:30</td>
                <td class="align-middle">宮田一慶</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="worddownroad" class="wordtabs container">
          <div class="row g-3 align-items-center justify-content-center mt-3">
            <div class="col-auto">
              <label class="label">ファイルを保存</label>
            </div>
            <div class="col-auto">
              <button class="btn btn-primary" @click="save()">保存</button>
            </div>
          </div>
        </div>

        <div id="wordhelp" class="wordtabs">
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
                <p class="helpP">ワープロについて</p>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import Table from '@editorjs/table'
import Code from '@editorjs/code'
import Marker from '@editorjs/marker'
import Embed from '@editorjs/embed'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import axios from 'axios'
import { editor } from 'jsuites'

export default {
  name: 'Word',
  data() {
    return {
      editor: {},
      data: null,
      permission: []
    }
  },
  methods: {
    async save() {
      await this.editor.save().then((savedData) => {
        this.post = JSON.stringify(savedData)
        console.log(this.post)
      })
    },
    fileopen: async function (fileplace) {
      let me = this
      this.editor.save()
      console.log(fileplace)
      // 初回読み込み時に最新更新したファイルオープン
      axios.get('https://simpleos-api.azurewebsites.net/api/word_api?', {
        params: {
          file_place: fileplace
        }

      })
        .then(function (response) {
          console.log(response.data)
          console.log(response.data[0].data)
          me.editor.blocks.render(response.data[0].data)
          console.log(me.editor)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changetab(tab) {
      console.log(this.editor)
      var tabs = document.getElementsByClassName('wordtabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      document.getElementById(tab).style.display = 'block'
    },
    // Editor.js関連
    doEditor() {
      const savedData = this.data
      this.editor = null
      console.log('diEdotor起動')
      console.log(savedData)
      console.log(this.editor)

      this.editor = new EditorJS({
        holder: 'editorjs',
        placeholder: 'タイトルを入力してください',
        data: savedData,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              levels: [2, 3, 4],
              defaultLevel: 3
            }
          },
          quote: {
            class: Quote,
            inlineToolbar: true
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 3,
              cols: 3
            }
          },
          code: {
            class: Code,
            placeholder: 'コードを入力してください',
            inlineToolbar: true
          },
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
            inlineToolbar: true
          },
          Embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                facebook: true,
                instagram: true,
                twitter: true
              }
            },
            inlineToolbar: true
          },
          Image: SimpleImage,
          InlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+N',
            inlineToolbar: true
          }
        }
      })
    }
  },
  mounted() {
    let me = this

    // 初回読み込み時に最新更新したファイルオープン
    axios.get('https://simpleos-api.azurewebsites.net/api/word_api?', {
      params: {
        file_place: '1-1'
      }
    })
      .then(function (response) {
        console.log(response.data)
        console.log(response.data[0].data)
        me.data = response.data[0].data
        me.doEditor()
      })
      .catch(function (error) {
        console.log(error)
      })

    // ＝＝＝＝＝初回読み込み時にファイルの一覧取得＝＝＝＝＝＝
    axios.get('https://simpleos-api.azurewebsites.net/api/permission?', {
      params: {
        user_serial: 'FBEbr8wSOlfig0FYIWOq',
        app_id: 'word'
      }
    })
      .then(function (response) {
        console.log(response.data)
        me.permission = response.data
      })
      .catch(function (error) {
        console.log(error)
      })

    var tabs = document.getElementsByClassName('wordtabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
  }
}
</script>

<!--スタイルの指定をします-->
<style>
#Word {
  height: calc(100% - 50px);
  background-color: aliceblue;
}

#wordVue {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
}

.wrap {}

#editorjs {}
</style>
