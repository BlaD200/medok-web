<template>
    <BaseLayout title="Кабачок">
        <b-row class="justify-content-center">
            <img src="../../assets/img/vegetables/zucchini.jpg" alt="Кабачок">
        </b-row>
        <br>
        <b-row>
            <b-col class="text-justify">
                <p><b>Корисні властивості:</b></p>
                <p>Кабачок - дуже корисний овоч, він легко засвоюється і добре впливає на травну систему та здоров'я шкіри. Користь кабачків знайшла застосування у різних сферах. Нaсіння кабачків активно застосовують у сучасній косметології, як компонент кремів, які впливають на роботу жирових залоз. </p>
                <p>Народна медицина рекомендує використовувати відвар з квіті кабачка для лікування дерматологічних захворювань. За кількістю корисних властивостей, кабачок можна порівняти з огірком або зеленим листковим салатом. У кабачках міститься велика кількість мінеральних солей, які надзвичайно важливі для підтримання хорошого обміну речовин в організмі. До його складу входять солі фосфору, калію, кальцію та магнію, а також невелика кількість заліза, натрію та сірки.</p>
                <p>Присутність у кабачках вітаміну С, каротину, вітамінів В1, В2 та нікотинової кислоти характеризують цей овоч виключно з позитивного, для здоров'я людини, боку та демонструють безсумнівну користь кабачків. Вживання кабачків не викликає подразнення шлунку та кишківника, тому вони корисні для людей, що мають проблеми з функціонуванням шлунково-кишкового тракту, а також для людей, що хворіють на цукровий діабет. Кабачки добре впливають на відновлення крові, блокують розвиток атеросклерозу.</p>
                <p>Кабачки - чудовий сечогінний засіб, добре допомагає при набряках; характеризуються протиалергічними властивостями. Цукор та мікроелементи, які міститься в кабачках, корисні для діабетиків. А властивість кабачків, що сприяє виведенню з організму надлишок солі, корисна при артритах. Регулярне вживання кабачків, допомагає покращити роботу суглобів. Щоб звільнити організм від шлаків, достатньо, протягом тижня, кожен день вживати 200г кабачків. </p>
                <p>Завдяки властивості виводити зайву рідину з організму, кабачок допомагає жінкам боротися з такою проблемою, як целюліт. </p>
                <p>Важливим аспектом є ще й те, що кабачок виступає одним з найбільш поширених та популярних дієтичних продуктів: адже він володіє рекордно низьким вмістом калорій. На 100 грам кабачків припадає лише 24 кілокалорії.</p>
                <p><b>Шкідливі властивості:</b></p>
                <p>Основна шкідлива властивість кабачків полягає у тому, що він містить велику властиві калію, тому кабачок не рекомендують вживати людям, які страждають від захворювання нирок. </p>
                <p>Сирі кабачки протипоказані при виразковій хворобі та гастритах.</p>
            </b-col>
        </b-row>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "@/views/BaseLayout";

    export default {
        name: "Zucchini",
        components: {
            BaseLayout
        }
    }
</script>

<style scoped>
    img {
        max-height: 15rem;
    }
</style>