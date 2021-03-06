<template>
    <div>
        <span>Página Home</span>
        <ul>
            <li><router-link to="user/1">User 1</router-link></li>
            <li><router-link to="user/2">User 2</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>
span{
    color: red;
}
</style>