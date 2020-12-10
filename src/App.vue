<template>
    <div id="app"  class="min-vh-100">
        <Navbar></Navbar>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    // import Home from "@/views/Home";

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: linear-gradient(to right, rgba(0,0,0,.22), rgba(0,0,0,.22)), url("assets/img/background-image.png");
    }
</style>
