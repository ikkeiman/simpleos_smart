<template>
  <div id="Add" class="container-flud">
    <div class="container-flud wrap m-0">
      <div class="vue-draggable-handle menubar" style="height:50px">
        <img src="@/assets/icons/Add.gif" class="img-flud p-1">

        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

          <input type="radio" class="btn-check" name="addbtnradio" id="addbuttonradio1" autocomplete="off"
            v-on:change="changetab('osusume')" checked>
          <label class="btn btn-outline-primary" for="addbuttonradio1">おすすめ</label>

          <input type="radio" class="btn-check" name="addbtnradio" id="addbuttonradio2" autocomplete="off"
            v-on:change="changetab('ranking')">
          <label class="btn btn-outline-primary" for="addbuttonradio2">ランキング</label>

          <input type="radio" class="btn-check" name="addbtnradio" id="addbuttonradio3" autocomplete="off"
            v-on:change="changetab('news')">
          <label class="btn btn-outline-primary" for="addbuttonradio3">新着</label>

          <input type="radio" class="btn-check" name="addbtnradio" id="addbuttonradio4" autocomplete="off"
            v-on:change="changetab('category')">
          <label class="btn btn-outline-primary" for="addbuttonradio4">カテゴリ</label>

        </div>

      </div>
      <div class="add_wrap container-flud">
        <div id="osusume" class="addtabs">
          <h1>今週の新着</h1>
          <div class="multiple-items">
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="@/assets/img/MyTube.png"></th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="@/assets/img/a1.jpg"></th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
          </div>
          <h1>評価の高いアプリ</h1>
          <div class="multiple-items">
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="@/assets/img/MyTube.png"></th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <th colspan="2"><img class="AppIMG" src="https://www.jungleocean.com/demo/jquery-slick/images/1.jpg">
                  </th>
                </tr>
                <tr>
                  <th><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>name</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="ranking" class="addtabs">
          <h1>今週のランキング</h1>
          <div class="grid1">
            <h2 class="f">1位</h2>
            <div class="table1">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="s">2位</h2>
            <div class="table2">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/MyTube.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="t">3位</h2>
            <div class="table3">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="fo">4位</h2>
            <div class="table4">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="fi">5位</h2>
            <div class="table5">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="news" class="addtabs">
          <h1>新着ランキング</h1>
          <div class="grid1">
            <h2 class="f">1位</h2>
            <div class="table1">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="s">2位</h2>
            <div class="table2">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/MyTube.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="t">3位</h2>
            <div class="table3">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="fo">4位</h2>
            <div class="table4">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
            <h2 class="fi">5位</h2>
            <div class="table5">
              <table>
                <tr>
                  <th rowspan="2" colspan="3"><img class="IMG" src="@/assets/img/MyTube.png"></th>
                  <td>MyTube</td>
                </tr>
                <tr>
                  <th colspan="2"><img class="icons" src="@/assets/icons/demoicon.png"></th>
                  <td>★5</td>
                  <td>ヘルスケア</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="category" class="addtabs">
          <h1>カテゴリ</h1>
          <div class="grid2">
            <figure class="game">
              <img class="icons,IMG" src="@/assets/icons/game.png">
              <figcaption>ゲーム</figcaption>
            </figure>
            <figure class="kayakku">
              <img class="icons,IMG" src="@/assets/icons/kayakku.png">
              <figcaption>レジャー</figcaption>
            </figure>
            <figure class="business">
              <img class="icons,IMG" src="@/assets/icons/business.png">
              <figcaption>ビジネス</figcaption>
            </figure>
            <figure class="graf">
              <img class="icons,IMG" src="@/assets/icons/graf.png">
              <figcaption>データ</figcaption>
            </figure>
            <figure class="study">
              <img class="icons,IMG" src="@/assets/icons/study.png">
              <figcaption>スタディ</figcaption>
            </figure>
            <figure class="heart">
              <img class="icons,IMG" src="@/assets/icons/heart.png">
              <figcaption>ヘルスケア</figcaption>
            </figure>
            <figure class="book">
              <img class="icons,IMG" src="@/assets/icons/book.png">
              <figcaption>ブックス</figcaption>
            </figure>
            <figure class="child">
              <img class="icons,IMG" src="@/assets/icons/child.png">
              <figcaption>チャイルド</figcaption>
            </figure>
            <figure class="fitness">
              <img class="icons,IMG" src="@/assets/icons/fitness.png">
              <figcaption>フィットネス</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/assets/css/slick.css'

export default {
  name: 'Add',
  data() {
    return {
    }
  },
  mounted() {
    var tabs = document.getElementsByClassName('addtabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
    $(document).ready(function () {
      $('.multiple-items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
        // autoplay: true,
        // autoplaySpeed: 5000,
        // speed: 400
      })
    })
  },
  methods: {
    changetab(tab) {
      var tabs = document.getElementsByClassName('addtabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      $('.single-item').slick()
      document.getElementById(tab).style.display = 'block'
    }
  }
}

</script>

<style scoped>
#Add {
  background-color: white;
  height: 100%;
}

.add_wrap {
  height: calc(100% - 50px);
  width: 100%;
  background-color: beige;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  /* IE, Edge 対応 */
  scrollbar-width: none;
}

.wrap {
  height: 100%;
  background-color: #c1e5cd;
}

.vue-grid-item[data-v-3b9344d2]:not(.vue-grid-placeholder) {
  min-width: 300px;
}

h1 {
  font-size: 30px;
  padding-top: 10px;
  text-align: center;
}

.AppIMG {
  width: 110px;
}

.icons {
  width: 35px;
  margin: auto;
}

.multiple-items {
  width: 85%;
  margin: auto;
  padding-top: 30px;
}

.slick-next {
  background-color: aqua;
}

.IMG {
  width: 200px;
}

.multiple-items table {
  padding: 50px;
  background-color: #DCDCDC;
}

figure {
  padding: 15px;
  margin: 0;
}

/* グリッド */
.grid1 {
  display: grid;
  grid-template:
    " . f table1 ." auto
    " . . . ." 30px
    " . s table2 ." auto
    " . . . ." 30px
    " . t table3 ." auto
    " . . . ." 30px
    " . fo table4 ." auto
    " . . . ." 30px
    " . fi table5 ." auto
    /1fr 100px auto 1fr
  ;
  place-items: center;
}

.f {
  grid-area: f;
}

.s {
  grid-area: s;
}

.t {
  grid-area: t;
}

.fo {
  grid-area: fo;
}

.fi {
  grid-area: fi;
}

.table1 {
  grid-area: table1;
  padding: 10px;
  background-color: #DCDCDC;
}

.table2 {
  grid-area: table2;
  padding: 10px;
  background-color: #DCDCDC;
}

.table3 {
  grid-area: table3;
  padding: 10px;
  background-color: #DCDCDC;
}

.table4 {
  grid-area: table4;
  padding: 10px;
  background-color: #DCDCDC;
}

.table5 {
  grid-area: table5;
  padding: 10px;
  background-color: #DCDCDC;
}

.grid2 {
  display: grid;
  grid-template:
    " . game kayakku business ." auto
    " . graf study heart ." auto
    " . book child fitness ." auto
    /1fr auto auto auto 1fr
  ;
  place-items: center;
}

.game {
  grid-area: game;
}

.kayakku {
  grid-area: kayakku;
}

.business {
  grid-area: business;
}

.graf {
  grid-area: graf;
}

.study {
  grid-area: study;
}

.heart {
  grid-area: heart;
}

.book {
  grid-area: book;
}

.child {
  grid-area: child;
}

.fitness {
  grid-area: fitness;
}
</style>
