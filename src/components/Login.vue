<template>
  <div id="body-color">
    <div id="setumeiDIV">
      <p class="fs-2 pt-5">これは今世紀最大の特大のニュースです</p>

      <img src="@/assets/icons/Rogo.gif" class="unko" alt="ロゴ" />

      <p class="fs-1 moji">simple.OS　スマートフォン</p>

      <p class="moji">スマホ・PC あなたが持っているすべてのデバイスで使えます。</p>
      <p class="moji">家の中でも 旅行先でも</p>
      <p class="moji">あなたが望めばsimple.OSはいつもそばにいます く(・ｖ・)シ </p> <br>

      <div class="d-grid mx-auto">
        <button @click="setumeiDIV()" class="btn btn-primary login btn-lg">今すぐ始める</button>
      </div>

    </div>
    <div id="mainDIV">
      <div class="main">
        <div class="container">
          <p class="fs-2 pt-5">
            おかえりなさいませ ご主人様<br />
            また会えることを心待ちにしておりました！
          </p>
        </div>

        <div class="contanier contanier2 mx-auto">
          <p class="ml-auto">ユーザID</p>

          <input type="text" name="" id="UserId" class="form-control" /><br />
          <p class="ml-auto">パスワード</p>

          <input type="password" name="" id="password" class="form-control" />
        </div>

        <div class="d-grid mx-auto"><br>
          <button @click="Login('Main')" class="btn btn-primary btn-lg">ログイン</button>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <div class="text-center">
              <p class="fs-6">あれ… もしかして、今日初めてお会いしますか？</p>

              <button @click="Create('Createaccount')" class="btn btn-secondary mx-auto btn-lg">
                アカウント作成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      UserId: null
    }
  },
  mounted() {
    document.getElementById('mainDIV').style.display = 'none'
  },
  methods: {
    setumeiDIV() {
      document.getElementById('setumeiDIV').style.display = 'none'
      document.getElementById('mainDIV').style.display = 'Block'
    },

    Create(page) {
      this.$router.push({
        name: page
      })
    },

    Login(page) {
      let pass = ''
      let UserID = ''
      let me = this

      pass = document.getElementById('password').value
      UserID = document.getElementById('UserId').value

      console.log(pass)
      console.log(UserID)

      axios.get('https://simpleos-api.azurewebsites.net/api/Function2?', {
        params: {
          name: UserID,
          pass: pass
        }
      })
        .then(function (response) {
          console.log(response.data)

          if (response.data === 'True') {
            console.log('ログイン成功')
            me.$cookies.set('UserId', UserID)
            me.$router.push({
              name: page
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!--スタイルの指定をします-->
<style scorped>
.unko {
  display: block;
  width: 20Vw;
  margin: auto;
}

#setumeiDIV {
  width: 100vw;
  height: 100vh;
  background-color: #fef6e4;
}

.moji {
  width: 100vw;
  text-align: center;
}

.login {
  color: #000;
}

/* .login:hover{
  color: #f3d2c1;
  border-color: #000;
} */

.main {
  height: 80vh;
}

#body-color {
  background-color: #fef6e4;
  width: 100vw;
  height: 100vh;
}

.contanier2 {
  width: 300px;
}

.form-control {
  width: 100%;
}

.fs-2 {
  display: block;
  text-align: center;
}

.fs-6 {
  display: block;
}

/* ログインボタン */
.d-grid {
  width: 200px;
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #f582ae;
  --bs-btn-border-color: #f582ae;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #f3d2c1;
  --bs-btn-hover-border-color: #fff;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #f582ae;
  --bs-btn-active-border-color: #f582ae;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #f582ae;
  --bs-btn-disabled-border-color: #f582ae;
}

.btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #f3d2c1;
  --bs-btn-border-color: #f3d2c1;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #f9bbb9;
  --bs-btn-hover-border-color: #fff;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #f3d2c1;
  --bs-btn-active-border-color: #f3d2c1;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #f3d2c1;
  --bs-btn-disabled-border-color: #f3d2c1;
}

.login {
  color: #fff;
}

.box {
  height: 15vh;
}
</style>
