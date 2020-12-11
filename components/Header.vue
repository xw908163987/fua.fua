<template>
    <div class="header">
        <div class="back" @click="back">
            <img src="/public/back.png" alt="">
        </div>
        <div class="logo">
            <img src="/public/logo.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    position: sticky;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #fff;
    .back{
        width: 2rem;
        height: 2rem;
        img{
            width:100%;
            height: 100%;
        }
    }
    .logo{
        width:6rem;
        display: flex;
        align-items: center;
        img{
            width:100%;
            height: 2rem;
        }
    }
}
</style>