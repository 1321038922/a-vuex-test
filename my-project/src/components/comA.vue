<template>
    <div>
        总计:{{$store.getters.totalPrice}}
    <h2>
        {{msg}}
    </h2>
    </div>
   
</template>

<script>

    export default {
        data(){
            return{
                msg:''
            }
        },
        created() {
            this.$bus.$on('toData',(msg)=> {
                this.msg = msg
            })
        },
        computed: {
           
        }
    }
</script> 

<style scoped>

</style>