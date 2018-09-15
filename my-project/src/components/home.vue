<template>
    <div>
        <!-- <h1>我是首页</h1>
        <button @click="handleGetdate">发送数据</button>
        <button @click="GetJsonp">发送jsonp数据</button>
        <button @click="getJsonp2">用插件发送</button>
        <button @click="getNoSimple">post非简单请求</button> -->
        <div style="border: 1px solid #000; display: flex;">
            <comA ></comA>
            <comB ></comB>
            <span>单价：{{this.$store.state.price}}</span>
        </div>
        <input type="text" v-model="count">
        <button @click="CHANGE_COUNT(count)">
            改变
        </button>
        <br>
        <button @click="async">
            异步
        </button>
    </div> 
</template>

<script>
import comA from "./comA";
import comB from "./comB";
import axios from "axios";
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      count: 0
    };
  },
  name: "home",
  components: {
    comA,
    comB
  },
  methods: {
    handleGetdate() {
      axios
        .get("http://localhost:3000/getMsg", {
          withCredentials: true
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    GetJsonp() {
      let script = document.createElement("script");
      let body = document.body;
      script.src = "http://localhost:3000/getJsonp?callback=getData";
      body.appendChild(script);
    },
    getJsonp2() {
      jsonp(
        "http://localhost:3000/getJsonp",
        {
          param: "callback",
          name: "getData"
        },
        function getData(res) {
          console.log(res);
        }
      );
    },
    getNoSimple() {
      axios
        .post(
          "http://localhost:3000/nosimple",
          { username: "yao" },
          { withCredentials: true }
        )
        .then(res => {
          console.log(res);
        });
    },
    add() {
      this.count++;
    },
    reduce() {
      this.count--;
    },
    change() {
      this.$store.commit("CHANGE_COUNT", this.count);
    },
    ...mapMutations([
        'CHANGE_COUNT'
    ]),
    async(){
     this.$store.dispatch('asyncAction',888)
    }
  }
};
</script>

<style scoped>
</style>
