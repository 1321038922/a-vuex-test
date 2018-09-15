<template>
    <div>
        <button @click="reduce">
            -
        </button>
        <strong>{{count}}</strong>
        <strong>{{price}}</strong>
        <button @click="add">
            +
        </button>
        <button @click="handleclick">兄弟组件传值</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';

    export default {
      data(){
          return {
              msg : "123456789"
          }
      },
        methods :{
            reduce(){
                this.$store.commit('REDUCE_COUNT')
            },
            add() {
                this.$store.commit('ADD_COUNT')
            },
            handleclick(){
                this.$bus.$emit('toData',this.msg)
            }
        },
        computed:{
            ...mapState(['count','price']),
            }
    }
</script>

<style scoped>

</style>