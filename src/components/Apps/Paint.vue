<template>
  <div id="paint" class="container-flud MainVue w-100 h-100">
    <div class="vue-draggable-handle menubar" style="height:50px">
      <img src="@/assets/icons/Paint.png" class="img-flud p-1">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

        <input type="radio" class="btn-check" name="paintbtnradio" id="paintbuttonradio1" autocomplete="off"
          v-on:change="changetab('paintmain')" checked>
        <label class="btn btn-outline-primary" for="paintbuttonradio1">新規作成</label>

        <input type="radio" class="btn-check" name="paintbtnradio" id="paintbuttonradio2" autocomplete="off"
          v-on:change="changetab('paintopen')">
        <label class="btn btn-outline-primary" for="paintbuttonradio2">ファイルを開く</label>

        <input type="radio" class="btn-check" name="paintbtnradio" id="paintbuttonradio3" autocomplete="off"
          v-on:change="changetab('paintdownroad')">
        <label class="btn btn-outline-primary" for="paintbuttonradio3">保存</label>

        <input type="radio" class="btn-check" name="paintbtnradio" id="paintbuttonradio4" autocomplete="off"
          v-on:change="changetab('painthelp')">
        <label class="btn btn-outline-primary" for="paintbuttonradio4">ヘルプ</label>

      </div>
    </div>
    <!--cdn-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">

    <!-- 色変更に使うライブラリで用意されているCSSを導入 https://github.com/bebraw/colorjoe
      <link rel="stylesheet" href="css/colorjoe.css"> -->

    <div id="PaintVue" class="container-flud MainVue no-drag">

      <div id="paintmain" class="painttabs">
        <div id="canvas-area" class="container-flud w-100 h-100">
          <canvas id="myCanvas" v-bind:class="{ eraser: canvasMode === 'eraser' }" @mousedown="dragStart"
            @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>
        </div>
        <!--追加部分-->
        <div id="app">

          <aside>
            <div id="toolbox" class="contentBlock">
              <dd>
                <div class="canvas-controller">
                  <button class="btn btn-primary" id="clear-button" @click="clear">クリア</button>
                  <div class="controller">
                    <label for="color">色：</label>
                    <input id="color" type="color" v-model="color" />
                    <!-- 色を選択できるカラーパレットを用意する。
                        <span id="color-palette"></span> -->
                  </div>
                  <div>
                    文字の太さ
                    <input id="range-selector" type="range" value="5" min="1" max="10" step="0.1">
                    <!-- 現在の線の太さを表す数値を表示するための要素 -->
                    <!-- input要素のスライドを動かすたびに値が更新される -->
                    <span id="line-width">5</span>
                  </div>
                  <div class="controller tool">
                    <label>ツール：</label>
                    <div class="tool-box" v-bind:class="pen_bg_color" @click="pen">
                      <button class="fas fa-pen"></button>
                    </div>
                    <div class="tool-box" v-bind:class="move_bg_color" @click="eraser">
                      <button class="fas fa-eraser"></button>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
          </aside>
        </div>

        <!--<div id="tool-area" class="container">
          <button class="btn btn-primary" id="" @click="create">新しく作る</button>
          <button class="btn btn-primary" id="pen-red-button" @click="penRed">ペン（赤）</button>
          <button class="btn btn-primary" id="pen-blue-button" @click="penBlue">ペン（青）</button>
          <button class="btn btn-primary" id="pen-blue-button" @click="penYellow">ペン（黄）</button>
          <button class="btn btn-primary" id="eraser-button" @click="eraser">消しゴム</button>
          <button class="btn btn-primary" id="clear-button" @click="clear">クリア</button>
          -->
      </div>

      <div id="paintopen" class="painttabs" @click="open">ファイルを開く</div>

      <div id="paintdownroad" class="painttabs"></div>

      <div id="painthelp" class="painttabs">
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
  <!--     </div>    -->
</template>

<!--<script src="./js/colorjoe.min.js"></script>
<script src="./js/main.js"></script>-->

<script>

export default {

  /* 追加部分 */
  name: 'Paint',
  data() {
    return {
      UserId: this.$cookies.get('UserId'),
      canvasMode: 'penBlack',
      canvas: null,
      context: null,
      isDrag: false,

      data: { color: '#6B8CFF' },

      // 追加部分

      pen_bg_color: 'gray',
      move_bg_color: '',
      weightNum: 5
      // canvas: null,
      // color: "black",
      // context: null,
      // canvasMode: 'pen',

    }
  },
  mounted() {
    this.canvas = document.querySelector('#myCanvas')
    this.context = this.canvas.getContext('2d')
    this.context.lineCap = 'round'
    this.context.lineJoin = 'round'
    this.context.lineWidth = 5
    this.context.strokeStyle = '#000000'

    // 現在の線の色を保持する変数(デフォルトは黒(#000000)とする)
    let currentColor = '#000000'

    var tabs = document.getElementsByClassName('painttabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
  },
  methods: {
    changetab(tab) {
      var tabs = document.getElementsByClassName('painttabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      document.getElementById(tab).style.display = 'block'
      if (tab === 'paintdownroad') {
        let link = document.createElement('a')
        link.href = this.canvas.toDataURL('image/png')
        link.download = 'canvas-' + new Date().getTime() + '.png'
        link.click()
      }
    },
    draw: function (e) {
      e.preventDefault()
      console.log(e)
      var targetElement = document.getElementById('myCanvas')
      var clientRect = targetElement.getBoundingClientRect()
      var x = e.layerX - clientRect.left
      var y = e.layerY - clientRect.top

      if (!this.isDrag) {
        return
      }

      this.context.lineTo(x, y)
      this.context.stroke()
    },
    /* download: function () {
       let link = document.createElement('a')
       link.href = this.canvas.toDataURL('image/png')
       link.download = 'canvas-' + new Date().getTime() + '.png'
       link.click()
     }, */
    clear: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    // 描画開始（mousedown）
    dragStart: function (e) {
      var targetElement = document.getElementById('myCanvas')
      var clientRect = targetElement.getBoundingClientRect()
      var x = e.layerX - clientRect.left
      var y = e.layerY - clientRect.top

      this.context.beginPath()
      this.context.lineTo(x, y)
      this.context.stroke()

      this.isDrag = true
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function () {
      this.isDrag = false
      this.context.closePath()
    },
    /* eraser: function () {
      // カーソル変更
      this.canvasMode = 'eraser'
      // 描画設定
      this.context.lineCap = 'square'
      this.context.lineJoin = 'square'
      this.context.lineWidth = 30
      this.context.strokeStyle = '#FFFFFF'
    }, */
    eraser: function () {
      // カーソル変更
      this.canvasMode = 'eraser'
      // 色変更
      this.pen_bg_color = ''
      this.move_bg_color = 'gray'
      // 描画設定
      this.context.lineCap = 'square'
      this.context.lineJoin = 'square'
      this.context.lineWidth = this.weightNum
      this.context.strokeStyle = '#FFFFFF'
    },

    create: function () {
      // カーソル変更
      this.canvas.width = document.getElementById('canvas-area').clientWidth
      this.canvas.height = document.getElementById('canvas-area').clientHeight
    },

    pen: function () {
      // カーソル変更
      this.canvasMode = 'pen'
      // 色変更
      this.pen_bg_color = 'gray'
      this.move_bg_color = ''
      // 描画設定
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.lineWidth = this.weightNum
      this.context.strokeStyle = this.color
    },

    //   // カラーパレットの設置を行う
    //   initColorPalette:function () {
    //    const joe = colorjoe.rgb('color-palette', currentColor);

    //   // 'done'イベントは、カラーパレットから色を選択した時に呼ばれるイベント
    //   // ドキュメント: https://github.com/bebraw/colorjoe#event-handling
    //   joe.on('done', color => {
    //     // コールバック関数の引数からcolorオブジェクトを受け取り、
    //     // このcolorオブジェクト経由で選択した色情報を取得する

    //     // color.hex()を実行すると '#FF0000' のような形式で色情報を16進数の形式で受け取れる
    //     // draw関数の手前で定義されている、線の色を保持する変数に代入して色情報を変更する
    //     currentColor = color.hex();
    //   });
    // },

    /* ペンモード（赤）
    penRed: function () {
      // カーソル変更
      this.canvasMode = 'penRed'

      // 描画設定
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.lineWidth = 5
      this.context.strokeStyle = '#FF0000'
    },
    // ペンモード（青）
    penBlue: function () {
      // カーソル変更
      this.canvasMode = 'penBlue'

      // 描画設定
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.lineWidth = 5
      this.context.strokeStyle = '#0000FF'
    },
     // ペンモード（黄）
     penYellow: function () {
      // カーソル変更
      this.canvasMode = 'penYellow'

      // 描画設定
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.lineWidth = 5
      this.context.strokeStyle = '#FFFF00'
    }, */

    window: addEventListener('load', () => {
      // 現在の線の太さを記憶する変数
      // <input id="range-selector" type="range"> の値と連動する
      let currentLineWidth = 1

      function draw(x, y) {
        if (!isDrag) {
          return
        }
        context.lineCap = 'round'
        context.lineJoin = 'round'
        context.lineWidth = currentLineWidth
        context.strokeStyle = currentColor
        if (lastPosition.x === null || lastPosition.y === null) {
          context.moveTo(x, y)
        } else {
          context.moveTo(lastPosition.x, lastPosition.y)
        }
        context.lineTo(x, y)
        context.stroke()

        lastPosition.x = x
        lastPosition.y = y
      }

      // 文字の太さの設定・更新を行う機能
      function initConfigOfLineWidth() {
        const textForCurrentSize = document.querySelector('#line-width')
        const rangeSelector = document.querySelector('#range-selector')

        // 線の太さを記憶している変数の値を更新する
        currentLineWidth = rangeSelector.value

        // "input"イベントをセットすることでスライド中の値も取得できるようになる。
        // ドキュメント: https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/range
        rangeSelector.addEventListener('input', event => {
          const width = event.target.value

          // 線の太さを記憶している変数の値を更新する
          currentLineWidth = width

          // 更新した線の太さ値(数値)を<input id="range-selector" type="range">の右側に表示する
          textForCurrentSize.innerText = width
        })
      }

      initEventHandler()
      initColorPalette()

      // 文字の太さの設定を行う機能を有効にする
      initConfigOfLineWidth()
    }),

    watch: {
      // 文字の太さwatch
      weightNum(val) {
        this.context.lineWidth = val
      },
      // 文字の色watch
      color(val) {
        this.context.strokeStyle = val
      },
      // ペンの活性をwatch
      isDrawingMode(val) {
        this.canvas.isDrawingMode = val
      }
    }

  },
  components: {
  }

}

</script>

<style scoped>
#PaintVue {
  height: calc(100% - 50px);
  background-color: aliceblue;
}

#myCanvas {
  background-color: white;

}

#tool-area {
  height: 100px;
  background-color: blanchedalmond;
}

#clear-button {

  background-color: palevioletred;
}
</style>
