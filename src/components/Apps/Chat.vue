<template>
  <div id="Chat" class="container-flud">
    <div class="container-flud wrap m-0 ">
      <div class="vue-draggable-handle menubar" style="height:50px">
        <img src="@/assets/icons/Chat.gif" class="img-flud p-1">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

          <input type="radio" class="btn-check" name="chatbtnradio" id="chatbtnradio1" autocomplete="off"
            v-on:change="changetab('chatfriend')" checked>
          <label class="btn btn-outline-primary" for="chatbtnradio1">チャット一覧</label>

          <input type="radio" class="btn-check" name="chatbtnradio" id="chatbtnradio2" autocomplete="off"
            v-on:change="changetab('addfriend')" checked>
          <label class="btn btn-outline-primary" for="chatbtnradio2">友達追加</label>

          <input type="radio" class="btn-check" name="chatbtnradio" id="chatbtnradio3" autocomplete="off"
            v-on:change="changetab('chathelp')">
          <label class="btn btn-outline-primary" for="chatbtnradio3">ヘルプ</label>

        </div>
      </div>
      <!-- <p>Body</p> -->
      <div id="chatfriend" class="chattabs">
        <div class="chat">
          <table class="table table-bordered">
            <th>
              <div class="friendlist">
                <div v-for="(chat, index) in chat_json">
                  <div v-for="(chat_json2, index2) in chat_json[index]">
                    <div v-if="chat.length - 1 == index2">
                      <input type="radio" class="btn-check" name="chatbtnradio" :id="[index]" autocomplete="off"
                        v-on:change="changetab2('chatpage' + [index])" checked>
                      <label class="btn btn-outline-primary" :for="[index]">{{ chat_json2.user2_name }}</label>
                    </div>
                  </div>
                </div>
                <div v-for="(chat, index) in 100">
                  {{ index }}
                </div>
              </div>
            </th>
            <th>
              <div class="chatlist">
                <div v-for="(chat, index) in chat_json" :id="'chatpage' + [index]" class="chatsyousai"
                  style="display: none;">
                  <div v-for="(chat_json2, index2) in chat_json[index]">
                    <div v-if="chat_json2.chat_flg == 1" class="mine">{{ chat_json2.comment }}</div>
                    <div v-else class="others">{{ chat_json2.comment }}</div>
                  </div>
                </div>
                <!-- <div v-for="(chat, index) in 100">
              {{index}}
            </div> -->
              </div>
              <div class="chatform">
                <form><input type="button" value="+"><input type="text"><input type="submit"></form>
              </div>
            </th>
          </table>
        </div>
      </div>
      <div id="addfriend" class="chattabs">addfriend</div>
      <div id="chathelp" class="chattabs">
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

</template>

<script>
import axios from 'axios'
export default {
  name: 'Chat',
  data() {
    return {
      chat_json: [],
    }
  },
  mounted() {
    // チャットのコメント取得
    let me = this
    axios.get('https://simpleos-api.azurewebsites.net/api/chat_api', {
      params: {

      }
    })
      .then(function (response) {
        console.log(response.data)
        me.chat_json = response.data
      })
      .catch(function (error) {
        console.log(error)
      })

    // タブ切り替え
    var tabs = document.getElementsByClassName('chattabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
  },
  methods: {
    changetab(tab) {
      var tabs = document.getElementsByClassName('chattabs')
      for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
        tabs[i].style.display = 'none'
      }
      document.getElementById(tab).style.display = 'block'
    },
    changetab2(tab) {
      var tabs = document.getElementsByClassName('chatsyousai')
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
#Chat {
  height: 100%;
  width: 100%;
  background-color: aliceblue;
}

.wrap {
  background-color: #c1e5cd;
}

.chat {
  display: table;
  width: 100%;
}

.others {
  position: relative;
  background: #EFEFEF;
  width: fit-content;
  /*吹き出し幅*/
  padding: 10px;
  /*内側の余白*/
  border-radius: 10px;
  /*角の丸み*/
  margin: auto 30px 5px 5px;
  /*右寄せ*/
}

.others::before {
  position: absolute;
  /*絶対配置*/
  content: '';
  /*空に*/
  border-top: 5px solid transparent;
  /*三角を作る*/
  border-right: 15px solid #EFEFEF;
  border-bottom: 5px solid transparent;
  top: 70%;
  left: -10px;
  /*三角を左に突き出す*/
}

.mine {
  position: relative;
  background: #50c700;
  width: fit-content;
  /*吹き出し幅*/
  padding: 10px;
  /*内側の余白*/
  border-radius: 10px;
  /*角の丸み*/
  margin: 5px 30px 5px auto;
  /*右寄せ*/
}

.mine::after {
  position: absolute;
  /*絶対配置*/
  content: '';
  /*空に*/
  border-top: 5px solid transparent;
  /*三角を作る*/
  border-left: 15px solid #50c700;
  border-bottom: 5px solid transparent;
  top: 70%;
  right: -10px;
  /*三角を右に突き出す*/
}

.chatform {
  display: inline-flex;
  position: fixed;
  bottom: 0;
}

.friendlist {
  width: 200px;
  height: 300px;
  background-color: aqua;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* スクロールバー非表示（Chrome・Safari） */
.friendlist::-webkit-scrollbar {
  display: none;
}

.chatlist {
  width: 280px;
  height: 300px;
  text-align: left;
  background-color: grey;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* スクロールバー非表示（Chrome・Safari） */
.chatlist::-webkit-scrollbar {
  display: none;
}
</style>
