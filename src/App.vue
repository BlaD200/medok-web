<template>
    <div id="app"  class="min-vh-100">
        <Navbar></Navbar>

        <div>
            <div class="mt-5 p-5">
                <div class="bg-light">
                    <p class="p-5">Text</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";

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
        background-image: url("assets/img/background-image.png");
    }
</style>
