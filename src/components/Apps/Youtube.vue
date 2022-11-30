<template>
  <div id="Youtube" class="container m-0 p-0 ">
    <div class="container-flud wrap m-0">
      <div class="vue-draggable-handle menubar" style="height:50px">
        <img src="@/assets/icons/MyTube.png" class="img-fluid p-1" />
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="snsbtnradio" id="snsbuttonradio1" autocomplete="off"
            v-on:change="changetab('snsmain')" checked />
          <label class="btn btn-outline-primary" for="snsbuttonradio1">Youtube</label>

          <input type="radio" class="btn-check" name="snsbtnradio" id="snsbuttonradio2" autocomplete="off"
            v-on:change="changetab('snsopen')" />
          <label class="btn btn-outline-primary" for="snsbuttonradio2">Instagram</label>

          <input type="radio" class="btn-check" name="snsbtnradio" id="snsbuttonradio3" autocomplete="off"
            v-on:change="changetab('snsdownroad')" />
          <label class="btn btn-outline-primary" for="snsbuttonradio3">Netflix</label>

          <input type="radio" class="btn-check" name="snsbtnradio" id="snsbuttonradio4" autocomplete="off"
            v-on:change="changetab('snshelp')" />
          <label class="btn btn-outline-primary" for="snsbuttonradio4">Fulu</label>
        </div>
      </div>

    </div>

    <div id="snsmain" class="snstabs">
      <iframe src="//www.youtube.com" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div id="snsopen" class="snstabs">
      <iframe src="//www.instagram.com" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div id="snsdownroad" class="snstabs">
      <iframe src="//www.netflix.com" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div id="snshelp" class="snstabs">
      <iframe src="//www.hulu.jp" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Youtube',
  data() {
    return {}
  },
  mounted() {
    var tabs = document.getElementsByClassName('snstabs')
    for (var i = 1; i < tabs.length; i++) {
      console.log(tabs[i])
      tabs[i].style.display = 'none'
    }
  },
  methods: {
    changetab(tab) {
      var tabs = document.getElementsByClassName('snstabs')
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
.helpP {
  margin: 0;
}

.helpbtn {
  height: 100px;
}

#Youtube {
  height: 100%;
  background-color: aliceblue;
}

.cotant {
  height: 100%;
}

.wrap {
  /* height: 100%; */
}

iframe {
  height: calc(100% - 50px);
  width: 100%;
}

.helpimg {
  width: 100px;
  height: 100px;
}

.snstabs {
  height: 100%;
  width: 100%;
}

/* .menubar {
  background-color: #f3d2c1;
} */
</style>
