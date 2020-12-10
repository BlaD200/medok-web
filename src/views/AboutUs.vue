<template>
    <BaseLayout title="Про нас">
        <b-row id="description" class="justify-content-center p-2">
            <p><b>МедОК – сайт, який навчить вас дбати про здоров’я своє та своїх близьких.</b></p>
        </b-row>
        <hr>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card
                        title="Михайло Бабій"
                        :img-src='require("../assets/img/about-us/misha-babij.jpg")'
                        img-alt="Михайло Бабій"
                        img-top
                        tag="article"
                        class="mb-2"
                        img-width="450"
                >
<!--                    <b-card-text>-->
<!--                    </b-card-text>-->
<!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card
                        title="Ольга Юрченко"
                        :img-src='require("../assets/img/about-us/olha-yurchenko.jpg")'
                        img-alt="Ольга Юрченко"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card
                        title="Даша Семенко"
                        :img-src='require("../assets/img/about-us/dasha-semenko.jpg")'
                        img-alt="Даша Семенко"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card
                        title="Нікіта Пєшко"
                        :img-src='require("../assets/img/about-us/nikita-peshko.jpg")'
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card
                        title="Марія Кузнєцова"
                        :img-src='require("../assets/img/about-us/mariya-kuznyetsova.jpg")'
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card
                        title="Аріна Морозенко"
                        :img-src='require("../assets/img/about-us/arina-morozenko.jpg")'
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card
                        title="Владислав Синицин"
                        :img-src='require("../assets/img/about-us/vladyslav-synytsyn.jpg")'
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                >
                    <!--                    <b-card-text>-->
                    <!--                    </b-card-text>-->
                    <!--                    <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </b-col>
        </b-row>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "@/views/BaseLayout";

    export default {
        name: "AboutUs",
        components: {
            BaseLayout
        }
    }
</script>

<style scoped>
    #description {
        font-size: 1.2rem;
    }

    /*.card img {*/
    /*    max-height: 430px;*/
    /*}*/
</style>