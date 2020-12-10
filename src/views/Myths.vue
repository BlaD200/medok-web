<template>
    <BaseLayout title="Міфи">
        <b-row class="justify-content-center">

        </b-row>
        <br>
        <b-row>
            <b-col class="text-justify">
                <ol class="steps">
                    <li>
                        <b>Морква поліпшує зір</b>
                        <p></p>
                        <b-row class="justify-content-center">
                            <img src="../assets/img/vegetables/carrot-myth.jpg" alt="Індичка">
                        </b-row>

                        <p></p>
                        <p>Морква дійсно містить велику кількість вітаміну А, який позитивно впливає на зір людини, але в дуже рідкісних випадках. Якщо ж у людини нема проблем з цим вітаміном, то посилене вживання моркви не поліпшить зір.</p>
                        <p>Цей міф виник за часів Другої світової війни. Британські інженери винайшли новий радар, який дозволяв бачити ворога вночі. Щоб приховати цю інформацію, були поширені чутки про те, що льотчики дотримуються особливої дієти, яка включала велику кількість моркви.</p>
                    </li>
                </ol>
            </b-col>
        </b-row>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "@/views/BaseLayout";

    export default {
        name: "Myth",
        components: {
            BaseLayout
        }
    }
</script>

<style scoped>
    img {
        max-height: 8rem;
    }

    ol {
        list-style: none;
        counter-reset: my-awesome-counter;
    }
    ol li {
        counter-increment: my-awesome-counter;
    }
    ol li::before {
        content: counter(my-awesome-counter) ". ";
        color: red;
        font-weight: bold;
    }

</style>