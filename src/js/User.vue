<template>
    <div>
        <h4>Página do usuário</h4>
        <span>id: {{ $route.params.id }}</span>
        <router-link to="/user/id/perfil">Perfil</router-link>
        <router-link to="/user/id/posts">Contato</router-link>
        <hr>

        <router-view></router-view>

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