<template>
    <div id="logo">
        <b-navbar toggleable="lg" type="light" variant="secondary">
            <b-navbar class="m-0 p-0" variant="faded" type="light">
                <b-navbar-brand class="m-0 p-0" href="/">
                    <b-img id="logo-img" src="../assets/img/main-logo.jpg" alt="MedOK logo"></b-img>
                </b-navbar-brand>
            </b-navbar>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-lg-5 ml-md-auto">
                    <b-nav-item href="#">Відео</b-nav-item>

                    <b-nav-item-dropdown id="Food" text="Харчування" >
                        <b-nav-item-dropdown id="Fruits" dropright text="Фрукти">
                            <b-dropdown-item href="#">Банан</b-dropdown-item>
                            <b-dropdown-item href="#">У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown id="Vegetables" dropright text="Овочі">
                            <b-dropdown-item href="#">Кабачок</b-dropdown-item>
                            <b-dropdown-item href="#">У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown id="Meat" dropright text="М'ясо">
                            <b-dropdown-item href="#">Індчика</b-dropdown-item>
                            <b-dropdown-item href="#">У розробці</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item href="#">У розробці</b-nav-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#">Міфи</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav>
                    <b-nav-form class="ml-lg-4 ml-md-2">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="mr-lg-3" href="#">Про нас</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav id="link-imgs" class="">
                    <b-nav-item href="/">
                        <img src="../assets/img/facebook-logo.png" alt="Facebook link">
                    </b-nav-item>
                    <b-nav-item href="/">
                        <img src="../assets/img/telegram-logo.png" alt="Telegram link">
                    </b-nav-item>
                    <b-nav-item href="/">
                        <img src="../assets/img/instagram-logo.png" alt="Instagram link">
                    </b-nav-item>
                    <b-nav-item href="/">
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
        data: function() {
            return {
                lastDropDownMenuId: ""
            }
        },
        mounted: function() {
            this.$root.$on('bv::dropdown::show', bvEvent => {
                console.log("open", bvEvent.componentId)
                this.lastDropDownMenuId = bvEvent.componentId;
            })
            this.$root.$on('bv::dropdown::hide', bvEvent => {
                console.log('close', bvEvent.componentId)
                if (bvEvent.componentId === this.lastDropDownMenuId){
                    this.lastDropDownMenuId = ""
                }
                if (bvEvent.componentId !== this.lastDropDownMenuId && this.lastDropDownMenuId.length !== 0){
                    bvEvent.preventDefault();
                }
            })
        },
        methods: {

        }
    }
</script>

<style scoped>
    #logo {
        font-weight: 600;
    }

    #logo-img {
        max-width: 100px;
    }

    #link-imgs img {
        width: 32px;
        height: 32px;
    }
</style>