<template>
    <b-container class="<!--my-1-->">
        <b-row class="justify-content-lg-center ">
            <b-col lg="10" class="bg-light">
                <b-row align-h="center">
                    <b-col>
                        <b-row id="title" class="px-4 py-2">
                            <b-col>{{title}}</b-col>
                        </b-row>

                        <b-row class="my-2 p-lg-4">
                            <b-col>
                                <slot></slot>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Home",
        props: [
            'title'
        ]
    }
</script>

<style scoped>
    #title {
        border: 3.5px solid black;
        font-size: 1.8rem;
        font-weight: 700;
        background-color: #fdd706;
    }

    video {
        border: none;
    }
</style>