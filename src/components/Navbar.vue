<template>
    <div id="logo">
        <b-navbar toggleable="lg" type="light">
            <b-navbar class="m-0 p-0" variant="faded">
                <router-link :to="{name: 'Home'}" class="navbar-brand p-0">
                    <img id="logo-img" src="../assets/img/main-logo.jpg" alt="MedOK logo">
                </router-link>
                <!--                <b-navbar-brand class="m-0 p-0" href="/">-->
                <!--                    -->
                <!--                </b-navbar-brand>-->
            </b-navbar>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-lg-4 ml-md-auto">
                    <b-nav-item href="#">Відео</b-nav-item>

                    <b-nav-item-dropdown id="Food" text="Харчування">
                        <b-nav-item-dropdown id="Fruits" dropright text="Фрукти">
                            <b-dropdown-item href="#">Банан</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown id="Vegetables" dropright text="Овочі">
                            <b-dropdown-item href="#">Кабачок</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown id="Meat" dropright text="М'ясо">
                            <b-dropdown-item href="#">Індчика</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item href="#" disabled>У розробці</b-nav-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#">Міфи</b-nav-item>
                </b-navbar-nav>

<!--                <b-navbar-nav>-->
<!--                    <b-nav-form class="ml-lg-4 ml-md-2">-->
<!--                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--                    </b-nav-form>-->
<!--                </b-navbar-nav>-->

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <router-link :to="{name: 'AboutUs'}" class="nav-link mr-lg-2">Про нас</router-link>
                </b-navbar-nav>
                <b-navbar-nav id="link-imgs">
                    <b-nav-item href="https://www.facebook.com/profile.php?id=100059078722524" target="_blank">
                        <img src="../assets/img/facebook-logo.png" alt="Facebook link">
                    </b-nav-item>
                    <b-nav-item href="https://t.me/medok_ua" target="_blank">
                        <img src="../assets/img/telegram-logo.png" alt="Telegram link">
                    </b-nav-item>
                    <b-nav-item href="https://instagram.com/_medok_ua?r=nametag" target="_blank">
                        <img src="../assets/img/instagram-logo.png" alt="Instagram link">
                    </b-nav-item>
                    <b-nav-item href="https://vm.tiktok.com/ZSGj6saB/" target="_blank">
                        <img src="../assets/img/tiktok-logo.png" alt="TikTok link">
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data: function () {
            return {
                rootDropDownMenuId: "Food",
                lastDropDownMenuId: ""
            }
        },
        mounted: function () {
            this.$root.$on('bv::dropdown::show', bvEvent => {
                console.log("open", bvEvent.componentId)
                this.lastDropDownMenuId = bvEvent.componentId;
            })
            this.$root.$on('bv::dropdown::hide', bvEvent => {
                console.log('close', bvEvent.componentId)
                if (bvEvent.componentId === this.lastDropDownMenuId) {
                    this.lastDropDownMenuId = ""
                }
                if (this.lastDropDownMenuId.length !== 0
                    && bvEvent.componentId === this.rootDropDownMenuId) {
                    bvEvent.preventDefault();
                }
            })
        },
        methods: {}
    }
</script>

<style scoped>
    #logo {
        font-weight: 600;
        background-color: #AED9E0;
    }

    #logo-img {
        max-width: 100px;
    }

    #link-imgs img {
        width: 32px;
        height: 32px;
    }
</style>