<template>
  <!-- gridライブラリー使用 -->
  <div id="body">
    <div id="cssSettei"></div>
    <grid-layout id="body" :layout.sync="layout" :col-num="12" :row-height="17" :is-draggable="draggable"
      :is-resizable="resizable" :responsive="responsive" :vertical-compact="true" :use-css-transforms="true"
      :margin="[20, 20]">

      <!-- layout配列内のデータ数ループ -->
      <grid-item :key='item.app' v-for="item in layout" :id="item.app" :static="item.static" :x="item.x" :y="item.y"
        :w="item.w" :h="item.h" :i="item.i" drag-ignore-from=".no-drag" drag-allow-from=".vue-draggable-handle"
        @moved="movedEvent" @resized="resizedEvent">

        <!-- 配列内のアプリをすべて表示 -->
        <component :is="item.app" :UserId="UserId" @parentFunc="updateChildMsg" />

      </grid-item>
      <div id="BackLogo">
        <svg viewBox="0 0 1080 1080" width="400px" fill="transparent">
          <path id="_パス_3"
            d="M225,0H855c124.27,0,225,100.74,225,225V855c0,124.27-100.74,225-225,225H225C100.74,1080,0,979.26,0,855V225C0,100.74,100.74,0,225,0Z"
            style="fill: none;" />
          <g id="_レイヤー_1-2">
            <g id="LogoColor">
              <path
                d="M820.13,556.32H279.91c-7.37,0-13.35,5.98-13.35,13.35v134.34c0,7.37,5.98,13.35,13.35,13.35h32.1l50.48,323.09c1.01,6.5,6.62,11.3,13.21,11.3h348.73c6.59,0,12.19-4.8,13.21-11.3l45.97-294.28h-25.23c-.64,0-1.21-.03-1.79-.09l-43.58,278.97H387.11l-48.08-307.69h417.79c.49-.06,.98-.09,1.5-.09h34.88c.46,0,.9,.03,1.33,.06h25.6c7.37,0,13.35-5.98,13.35-13.35v-134.34c0-7.37-5.98-13.35-13.38-13.35l.03,.03Zm-13.38,134.34H293.28v-107.61H806.78v107.61h-.03Z" />
              <path
                d="M539.25,384.67c-.35,7.46-.81,14.91-1.42,22.34-1.42,17.68-3.24,35.4-5.26,53.11-2.57,22.42-5.43,44.88-8.5,67.27h25.69c1.27-12.14,2.51-24.3,3.67-36.44l59.87-34.97c9.85-5.84,19.53-11.27,29.5-17.4,.2,0,.4,.06,.61,.03h.84c2.75,.12,5.46,.17,8.15,.17,47.39,0,86.89-16.01,111.83-45.48,65.28-77.13,20-171.21,14.04-177.2-4.91-4.94-12.77-5.29-18.09-.84-9.07,7.6-23.67,12.14-39.13,16.93-22.54,6.99-48.11,14.94-65.88,35.31-47.59,54.56-34.73,130.12-27.11,156.04-8.29,4.31-16.99,8.52-25.37,12.8l-46.32,23.29c1.42-17.02,2.69-34.1,3.58-51.26,.43-8.15,.69-16.33,.81-24.5,.32-.32,.61-.64,.87-.98,.26-.29,.55-.61,.92-1.01,47.07-52.04,67.79-110.96,58.34-165.93-23.58-136.57-161.36-171.96-172.74-170.95-6.94,.61-12.25,6.39-12.28,13.35,0,17.77-8.52,38.11-17.57,59.67-12.57,30.02-26.82,64.01-21.15,100.13,16.07,102.38,111.37,152.89,142.09,166.5Z" />
            </g>
          </g>
        </svg>
      </div>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'
import Paint from './Apps/Paint.vue'
import Seat from './Apps/Seat.vue'
import Info from './Apps/Info.vue'
import Config from './Apps/Config.vue'
import Youtube from './Apps/Youtube.vue'
import Add from './Apps/Add.vue'
import Word from './Apps/Word.vue'
import Chat from './Apps/Chat.vue'

import axios from 'axios'

export default {

  props: ['layout', 'colNum'],
  components: {
    GridLayout,
    GridItem,
    Paint,
    Seat,
    Info,
    Config,
    Youtube,
    Add,
    Word,
    Chat
  },
  mounted() {
    var head = document.getElementById('cssSettei')
    var style = document.createElement('style')
    var text = this.colorCode
    var rule = document.createTextNode(text)
    style.appendChild(rule)
    head.appendChild(style)
    this.updateChildMsg(this.colorname)

    let me = this
    axios.get('https://simpleos-api.azurewebsites.net/api/setting_api?', {
      params: {
        name: 'pzmJDkQJF9IDANPfLVBT'
      }
    })
      .then(function (response) {
        console.log(response.data[0].SettingColor)
        me.updateChildMsg(response.data[0].SettingColor)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data() {
    return {
      UserId: 'test1234',
      colorCode: '',
      colorname: null,
      draggable: true,
      resizable: true,
      responsive: true,
      index: 0
    }
  },
  methods: {
    movedEvent: function (i, newX, newY) {
      console.log('要素が動きました')
      this.$emit('change-layout', this.layout)
    },
    resizedEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('リサイズされました')
      this.$emit('change-layout', this.layout)
    },
    updateChildMsg(color) {
      // let parentnode = document.getElementsByTagName('head').item(0);
      // parentnode.lastElementChild.remove();

      var head = document.getElementById('cssSettei')
      var style = document.createElement('style')

      var text = null

      head.lastElementChild.remove()
      if (color === 'macaron') {
        text = '.vue-grid-layout {background-color: #A2DAE9;} #footer {background-color: #FAA97C;} .m-0.p-0 {background-color: #FAA97C;} .menubar {background-color: #F7BDCC;} .syslabel{color: #FFFFFF; vertical-align: middle;} #LogoColor path{fill: #FAA97C;} #FooterLogo path{fill: #FFFFFF;} #Configbtn:hover #FooterLogo path{fill: #A2DAE9;} #OndoIcon path{fill: #FFFFFF;} #Weather{fill: #FFFFFF;} #Infobtn{color: #FFFFFF;} #Infobtn:hover{color: #FAA97C;} #Infobtn:hover #OndoIcon path{fill: #FAA97C;} #Infobtn:hover #Weather{fill: #FAA97C;} #MenuIcon{fill: #FFFFFF;} #Menubtn:hover #MenuIcon{fill: #FAA97C;}/*------------------------------------ - COLOR primary ------------------------------------*/ .alert-primary { color: #45fcff; background-color: #18b101ff; border-color: #177100ff; } .alert-primary hr { border-top-color: #15e100ff; } .alert-primary .alert-link { color: #12fbff; } .badge-primary { color: #212529; background-color: #c0feff; } .badge-primary[href]:hover, .badge-primary[href]:focus { color: #212529; background-color: #8dfdff; } .bg-primary { background-color: #c0feff !important; } a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus { background-color: #8dfdff !important; } .border-primary { border-color: #c0feff !important; } .btn-primary { color: #212529; background-color: #FFFFFF; border-color: #FFFFFF; } .btn-primary:hover { color: #212529; background-color: #c0feff; border-color: #8dfdff; } .btn-primary:focus, .btn-primary.focus { box-shadow: none;} .btn-primary.disabled, .btn-primary:disabled { color: #212529; background-color: #c0feff; border-color: #c0feff; } .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle { color: #212529; background-color: #8dd2e4; border-color: #7dfcff; } .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(192, 254, 255, 0.5); } .btn-outline-primary { color: #FFFFFF; background-color: transparent; border-color: #c0feff; } .btn-outline-primary:hover { color: #777; background-color: #c0feff; border-color: #c0feff; } .btn-outline-primary:focus, .btn-outline-primary.focus { box-shadow: 0 0 0 0.2rem rgba(192, 254, 255, 0.5); } .btn-outline-primary.disabled, .btn-outline-primary:disabled { color: #c0feff; background-color: transparent; } .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle { color: #212529; background-color: #c0feff; border-color: #c0feff; } .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(192, 254, 255, 0.5); } .list-group-item-primary { color: #45fcff; background-color: #177100ff; } .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: #45fcff; background-color: #15e100ff; } .list-group-item-primary.list-group-item-action.active { color: #212529; background-color: #45fcff; border-color: #45fcff; } .table-primary, .table-primary > th, .table-primary > td { background-color: #177100ff; } .table-hover .table-primary:hover { background-color: #15e100ff; } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color: #15e100ff; } .text-primary { color: #c0feff !important; } a.text-primary:hover, a.text-primary:focus { color: #8dfdff !important; } .btn-outline-primary { --bs-btn-color: #c0feff; --bs-btn-border-color: #c0feff; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #c0feff; --bs-btn-hover-border-color: #c0feff; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #555; --bs-btn-active-bg: #c0feff; --bs-btn-active-border-color: #c0feff; --bs-btn-active-shadow: none; --bs-btn-disabled-color: #c0feff; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #c0feff; --bs-gradient: none; } .btn-check:checked+.btn, :not(.btn-check)+.btn:active, .btn:first-child:active, .btn.active, .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); } m-1:hover {background-color: #000;} .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #c0feff; --bs-btn-border-color: #c0feff; --bs-btn-hover-color: #c0feff; --bs-btn-hover-bg: #FFF; --bs-btn-hover-border-color: none; --bs-btn-focus-shadow-rgb:none; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: none; --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }'
      } else if (color === 'cake') {
        text = '.vue-grid-layout {background-color: #FFFFFF;} #footer {background-color: #FFBDDE;} .m-0.p-0 {background-color: #FFBDDE;} .menubar {background-color: #FFF0B3;} .syslabel{color: #FFFFFF; vertical-align: middle;} #LogoColor path{fill: #FFBDDE;} #FooterLogo path{fill: #FFFFFF;} #Configbtn:hover #FooterLogo path{fill: #A2DAE9;} #OndoIcon path{fill: #FFFFFF;} #Weather{fill: #FFFFFF;} #Infobtn{color: #FFFFFF;} #Infobtn:hover{color: #FFBDDE;} #Infobtn:hover #OndoIcon path{fill: #FFBDDE;} #Infobtn:hover #Weather{fill: #FFBDDE;} #MenuIcon{fill: #FFFFFF;} #Menubtn:hover #MenuIcon{fill: #FFBDDE;}/*------------------------------------ - COLOR primary ------------------------------------*/ .alert-primary { color: #a22c5e; background-color: #10411110c; border-color: #ff101100; } .alert-primary hr { border-top-color: #faedf3; } .alert-primary .alert-link { color: #7a2147; } .badge-primary { color: #212529; background-color: #FF4DA6; } .badge-primary[href]:hover, .badge-primary[href]:focus { color: #212529; background-color: #cc4a81; } .bg-primary { background-color: #FF4DA6 !important; } a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus { background-color: #cc4a81 !important; } .border-primary { border-color: #FF4DA6 !important; } .btn-primary { color: #212529; background-color: #FFFFFF; border-color: #FFFFFF; } .btn-primary:hover { color: #212529; background-color: #d05689; border-color: #cc4a81; } .btn-primary:focus, .btn-primary.focus { box-shadow: none;} .btn-primary.disabled, .btn-primary:disabled { color: #212529; background-color: #FF4DA6; border-color: #FF4DA6; } .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle { color: #212529; background-color: #ffa4d1; border-color: #c93e78; } .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(216, 114, 157, 0.5); } .btn-outline-primary { color: #FF4DA6; background-color: transparent; border-color: #FF4DA6; } .btn-outline-primary:hover { color: #212529; background-color: #FF4DA6; border-color: #FF4DA6; } .btn-outline-primary:focus, .btn-outline-primary.focus { box-shadow: 0 0 0 0.2rem rgba(216, 114, 157, 0.5); } .btn-outline-primary.disabled, .btn-outline-primary:disabled { color: #FF4DA6; background-color: transparent; } .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle { color: #212529; background-color: #FF4DA6; border-color: #FF4DA6; } .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(216, 114, 157, 0.5); } .list-group-item-primary { color: #a22c5e; background-color: #ff101100; } .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: #a22c5e; background-color: #faedf3; } .list-group-item-primary.list-group-item-action.active { color: #212529; background-color: #a22c5e; border-color: #a22c5e; } .table-primary, .table-primary > th, .table-primary > td { background-color: #ff101100; } .table-hover .table-primary:hover { background-color: #faedf3; } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color: #faedf3; } .text-primary { color: #FF4DA6 !important; } a.text-primary:hover, a.text-primary:focus { color: #cc4a81 !important; } .btn-outline-primary { --bs-btn-color: #FF4DA6; --bs-btn-border-color: #FF4DA6; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #FF4DA6; --bs-btn-hover-border-color: #FF4DA6; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #FFF; --bs-btn-active-bg: #FF4DA6; --bs-btn-active-border-color: #FF4DA6; --bs-btn-active-shadow: none; --bs-btn-disabled-color: #FF4DA6; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #FF4DA6; --bs-gradient: none; } .btn-check:checked+.btn, :not(.btn-check)+.btn:active, .btn:first-child:active, .btn.active, .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); } m-1:hover {background-color: #FFF;} .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #FF4DA6; --bs-btn-border-color: #FF4DA6; --bs-btn-hover-color: #FF4DA6; --bs-btn-hover-bg: #FFF; --bs-btn-hover-border-color: none; --bs-btn-focus-shadow-rgb: none; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: none; --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }'
      } else if (color === 'nuts') {
        text = '.vue-grid-layout {background-color: #FFFFFF;} #footer {background-color: #01579B;} .m-0.p-0 {background-color: #01579B;} .menubar {background-color: #F79E4C;} .syslabel{color: #FFFFFF; vertical-align: middle;} #LogoColor path{fill: #01579B;} #FooterLogo path{fill: #FFFFFF;} #Configbtn:hover #FooterLogo path{fill: #F79E4C; transition: 0.8s;} #OndoIcon path{fill: #FFFFFF;} #Weather{fill: #FFFFFF;} #Infobtn{color: #FFFFFF;} #Infobtn:hover{color: #01579B;} #Infobtn:hover #OndoIcon path{fill: #01579B;} #Infobtn:hover #Weather{fill: #01579B;} #MenuIcon{fill: #FFFFFF;} #Menubtn:hover #MenuIcon{fill: #01579B;}/*------------------------------------ - COLOR primary ------------------------------------*/ .alert-primary { color: #a7370f; background-color: #fefefe; border-color: #fdf0eb; } .alert-primary hr { border-top-color: #fbded3; } .alert-primary .alert-link { color: #78270a; } .badge-primary { color: #212529; background-color: #ee7043; } .badge-primary[href]:hover, .badge-primary[href]:focus { color: #212529; background-color: #e84c15; } .bg-primary { background-color: #ee7043 !important; } a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus { background-color: #e84c15 !important; } .border-primary { border-color: #ee7043 !important; } .btn-primary { color: #212529; background-color: #FFFFFF; border-color: #FFFFFF; } .btn-primary:hover { color: #212529; background-color: #eb5722; border-color: #e84c15; } .btn-primary:focus, .btn-primary.focus { box-shadow: 0 0 0 0.2rem rgba(238, 112, 67, 0.5); } .btn-primary.disabled, .btn-primary:disabled { color: #212529; background-color: #ee7043; border-color: #ee7043; } .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle { color: #212529; background-color: #e84c15; border-color: #da4813; } .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(238, 112, 67, 0.5); } .btn-outline-primary { color: #ee7043; background-color: transparent; border-color: #ee7043; } .btn-outline-primary:hover { color: #212529; background-color: #ee7043; border-color: #ee7043; } .btn-outline-primary:focus, .btn-outline-primary.focus { box-shadow: 0 0 0 0.2rem rgba(238, 112, 67, 0.5); } .btn-outline-primary.disabled, .btn-outline-primary:disabled { color: #ee7043; background-color: transparent; } .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle { color: #212529; background-color: #ee7043; border-color: #ee7043; } .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(238, 112, 67, 0.5); } .list-group-item-primary { color: #a7370f; background-color: #fdf0eb; } .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: #a7370f; background-color: #fbded3; } .list-group-item-primary.list-group-item-action.active { color: #212529; background-color: #a7370f; border-color: #a7370f; } .table-primary, .table-primary > th, .table-primary > td { background-color: #fdf0eb; } .table-hover .table-primary:hover { background-color: #fbded3; } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color: #fbded3; } .text-primary { color: #ee7043 !important; } a.text-primary:hover, a.text-primary:focus { color: #e84c15 !important; } .btn-outline-primary { --bs-btn-color: #01579B; --bs-btn-border-color: #01579B; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #01579B; --bs-btn-hover-border-color: #01579B; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #FFF; --bs-btn-active-bg: #01579B; --bs-btn-active-border-color: #01579B; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #01579B; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #01579B; --bs-gradient: none; } .btn-check:checked+.btn, :not(.btn-check)+.btn:active, .btn:first-child:active, .btn.active, .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); } m-1:hover {background-color: #FFF;} .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #01579B; --bs-btn-border-color: #01579B; --bs-btn-hover-color: #01579B; --bs-btn-hover-bg: #FFF; --bs-btn-hover-border-color: none; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }'
      } else if (color === 'mattya') {
        text = '.vue-grid-layout {background-color: #FFF5D9;} #footer {background-color: #548355;} .m-0.p-0 {background-color: #548355;} .menubar {background-color: #F0B46E;} .syslabel{color: #FFFFFF; vertical-align: middle;}/*------------------------------------ - COLOR primary ------------------------------------*/ .alert-primary { color: #007c1a; background-color: #c3ffd0; border-color: #afffc0; } .alert-primary hr { border-top-color: #96ffac; } .alert-primary .alert-link { color: #00490f; } .badge-primary { color: #212529; background-color: #00f735; } .badge-primary[href]:hover, .badge-primary[href]:focus { color: #212529; background-color: #00c32a; } .bg-primary { background-color: #00f735 !important; } a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus { background-color: #00c32a !important; } .border-primary { border-color: #00f735 !important; } .btn-primary { color: #212529; background-color: #FFFFFF; border-color: #FFFFFF; } .btn-primary:hover { color: #212529; background-color: #00d32d; border-color: #00c32a; } .btn-primary:focus, .btn-primary.focus { box-shadow: 0 0 0 0.2rem rgba(0, 247, 53, 0.5); } .btn-primary.disabled, .btn-primary:disabled { color: #212529; background-color: #00f735; border-color: #00f735; } .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle { color: #212529; background-color: #00c32a; border-color: #00b426; } .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(0, 247, 53, 0.5); } .btn-outline-primary { color: #00f735; background-color: transparent; border-color: #00f735; } .btn-outline-primary:hover { color: #212529; background-color: #00f735; border-color: #00f735; } .btn-outline-primary:focus, .btn-outline-primary.focus { box-shadow: 0 0 0 0.2rem rgba(0, 247, 53, 0.5); } .btn-outline-primary.disabled, .btn-outline-primary:disabled { color: #00f735; background-color: transparent; } .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle { color: #212529; background-color: #00f735; border-color: #00f735; } .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(0, 247, 53, 0.5); } .list-group-item-primary { color: #007c1a; background-color: #afffc0; } .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: #007c1a; background-color: #96ffac; } .list-group-item-primary.list-group-item-action.active { color: #212529; background-color: #007c1a; border-color: #007c1a; } .table-primary, .table-primary > th, .table-primary > td { background-color: #afffc0; } .table-hover .table-primary:hover { background-color: #96ffac; } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color: #96ffac; } .text-primary { color: #00f735 !important; } a.text-primary:hover, a.text-primary:focus { color: #00c32a !important; }'
      } else if (color === 'chocolate') {
        text = '.vue-grid-layout {background-color: #E2B659;} #footer {background-color: #7F4D3E;} .m-0.p-0 {background-color: #7F4D3E;} .menubar {background-color: #B87C4C;} .syslabel{color: #FFFFFF; vertical-align: middle;}/*------------------------------------ - COLOR primary ------------------------------------*/ .alert-primary { color: #7c0000; background-color: #ffc3c3; border-color: #ffafaf; } .alert-primary hr { border-top-color: #ff9696; } .alert-primary .alert-link { color: #490000; } .badge-primary { color: #fff; background-color: #52352b; } .badge-primary[href]:hover, .badge-primary[href]:focus { color: #fff; background-color: #c30000; } .bg-primary { background-color: #52352b !important; } a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus { background-color: #c30000 !important; } .border-primary { border-color: #52352b !important; } .btn-primary { color: #212529; background-color: #FFFFFF; border-color: #FFFFFF; } .btn-primary:hover { color: #fff; background-color: #d30000; border-color: #c30000; } .btn-primary:focus, .btn-primary.focus { box-shadow: 0 0 0 0.2rem rgba(247, 0, 0, 0.5); } .btn-primary.disabled, .btn-primary:disabled { color: #fff; background-color: #52352b; border-color: #52352b; } .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle { color: #fff; background-color: #c30000; border-color: #b40000; } .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(247, 0, 0, 0.5); } .btn-outline-primary { color: #52352b; background-color: transparent; border-color: #52352b; } .btn-outline-primary:hover { color: #fff; background-color: #52352b; border-color: #52352b; } .btn-outline-primary:focus, .btn-outline-primary.focus { box-shadow: 0 0 0 0.2rem rgba(247, 0, 0, 0.5); } .btn-outline-primary.disabled, .btn-outline-primary:disabled { color: #52352b; background-color: transparent; } .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle { color: #fff; background-color: #52352b; border-color: #52352b; } .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus { box-shadow: 0 0 0 0.2rem rgba(247, 0, 0, 0.5); } .list-group-item-primary { color: #7c0000; background-color: #ffafaf; } .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus { color: #7c0000; background-color: #ff9696; } .list-group-item-primary.list-group-item-action.active { color: #fff; background-color: #7c0000; border-color: #7c0000; } .table-primary, .table-primary > th, .table-primary > td { background-color: #ffafaf; } .table-hover .table-primary:hover { background-color: #ff9696; } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color: #ff9696; } .text-primary { color: #52352b !important; } a.text-primary:hover, a.text-primary:focus { color: #c30000 !important; } .btn-outline-primary { --bs-btn-color: #52352b; --bs-btn-border-color: #52352b; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #52352b; --bs-btn-hover-border-color: #52352b; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #FFF; --bs-btn-active-bg: #52352b; --bs-btn-active-border-color: #52352b; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #52352b; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #52352b; --bs-gradient: none; } .btn-check:checked+.btn, :not(.btn-check)+.btn:active, .btn:first-child:active, .btn.active, .btn.show { color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg); border-color: var(--bs-btn-active-border-color); } .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #52352b; --bs-btn-border-color: #52352b; --bs-btn-hover-color: #52352b; --bs-btn-hover-bg: #FFF; --bs-btn-hover-border-color: none; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }'
      }

      var rule = document.createTextNode(text)
      style.appendChild(rule)
      head.appendChild(style)

      this.colorCode = color
    }
  }
}
</script>

<style scoped>
@import "../assets/css/macaron.css";

#body {
  width: 100vw;
  height: calc(100vh - 72px) !important;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
  background-position: center;
  /* background-image: url("../assets/icons/Rogo.gif"); */
  background-repeat: no-repeat;
}

#body::-webkit-scrollbar {
  /* Chrome, Safari 対応 */
  display: none;
}

.vue-grid-layout {}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ededed;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}

.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}

.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}

#BackLogo {
  text-align: center;
  padding-top: 50px;
}
</style>
