<template>
    <div>
        <button @click="reduce">
            -
        </button>
        <strong>{{ $store.state.count }}</strong>
        <button @click="add">
            +
        </button>
    </div>
</template>

<script>
    export default {
        methods :{
            reduce(){
              this.$store.commit('REDUCE_COUNT')
            },
            add() {
               this.$store.commit('ADD_COUNT')
            }
        }
    }
</script>

<style scoped>

</style>