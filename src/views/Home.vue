<template>
    <BaseLayout title="Головна">
        <div class="embed-responsive embed-responsive-16by9">
            <video class="embed-responsive-item"
                   src="../assets/videos/team-presentation.mp4"
                   type="video/mp4"
                   controls>
                <p>Браузер не підтримує вміст сайту</p>
            </video>
        </div>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "@/views/BaseLayout";

    export default {
        name: "Home",
        components: {
            BaseLayout
        }
    }
</script>

<style scoped>

</style>