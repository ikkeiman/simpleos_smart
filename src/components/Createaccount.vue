<template>
  <div id="body-color">
    <div class="tink">
      <p class="fs-2 pt-5">はじめまして、simpleOSです</p>
      <p class="fs-2">簡単な3つのステップですぐに利用できます</p>

      <div class="contanier contanier2 mx-auto">

        <p class="ml-auto">ユーザID</p>
        <input type="text" name="" id="UserId" class="form-control"><br>

        <p class="ml-auto">パスワード</p>
        <input type="password" name="" id="password" class="form-control"><br>

        <p class="ml-auto">メールアドレス</p>
        <input type="text" name="" id="name" class="form-control"><br>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col"></div>
          <div class="col">
          <div class="d-grid mx-auto"><br>
      <button @click="CreateAccount('Login')" class="btn btn-primary login btn-lg">アカウント作成</button>
      </div>
          </div>
          <div class="col">
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      UserId: null

    }
  },
  methods: {
    CreateAccount (page) {
      let pass = ''
      let UserID = ''
      let name = ''
      let me = this

      pass = document.getElementById('password').value
      UserID = document.getElementById('UserId').value
      name = document.getElementById('name').value

      console.log(pass)
      console.log(UserID)

      axios.get('https://simpleos-api.azurewebsites.net/api/Registration?', {
        params: {
          name: name,
          UserID: UserID,
          userPass: pass
        }
      }).then(function (response) {
        console.log(response.data)

        if (response.data === 'True') {
          console.log('アカウント作成成功')
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

.tink {
  width: 100%;
  margin: auto;
}

.ml-auto{
  margin: 1.2vw;
}

</style>
