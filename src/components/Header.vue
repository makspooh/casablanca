<template>
    <header>
        <Slide disableOutsideClick>
            <a id="home" href="#">
                <span>Home</span>
            </a>
            <a id="home" href="#our_work">
                <span>Our work</span>
            </a>
            <a id="home" href="#our_clients">
                <span>Our clients</span>
            </a>
            <a id="home" href="#about">
                <span>About us</span>
            </a>
            <a id="home" href="#touch">
                <span>Contacts</span>
            </a>
        </Slide>
        <h1>we`ve got the talent</h1>
        <div class="shape"></div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae doloremque unde labore suscipit saepe.
        </p>
    </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    data() {
        return {
        }
    },
    components: {
        Slide
    }
}
</script>

<style scoped>
    @font-face {
        font-family: 'bigJohn';
        src: url('../assets/fonts/big-john.otf');
    }

    @font-face {
        font-family: 'amble-regular';
        src: url('../assets/fonts/amble-regular.ttf');
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 900px;
        background: url('../assets/images/header-bg.png');
    }

    .bm-burger-bars {
      background-color: #fff !important;
    }

    a {
        font-family: 'bigJohn';
    }

    h1 {
        text-transform: uppercase;
        font-family: 'bigJohn';
        text-align: center;
        font-weight: 100;
        font-size: 50px;
    }

    .shape {
        width: 100px;
        height: 2px;
        background: #fff;
        margin: 10px 0 30px;
    }

    p {
        width: 50%;
        text-align: center;
        font-size: 22px;
        font-family: 'amble-regular';
        letter-spacing: 1.5px;
    }

    @media (min-width: 320px) {
        p {
            width: 80%;
        }
    }

    @media (min-width: 1000px) {
        p {
            width: 50%;
        }
    }
</style>
