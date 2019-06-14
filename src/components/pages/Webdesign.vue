<template>
    <div class="work">
        <h1>some of our work</h1>
        <div class="shape"></div>
        <nav>
            <router-link to="/"><a href="">all</a></router-link>
            <router-link to="branding"><a href="">branding</a></router-link>
            <router-link to="design"><a href="">web design</a></router-link>
            <router-link to="mobile"><a href="">mobile ui</a></router-link>
            <router-link to="illustrations"><a href="">illustrations</a></router-link>
        </nav>
        <div class="row-1">
            <router-link v-for="(image, index) of images1" :key="index" to="item">
                <div class="image">
                    <div class="inner">
                        <img class="link" src="../../assets/images/link.png" alt="">
                        <h2 class="headliner">web design</h2>
                        <p class="description">Description</p>
                        <div class="shape-orange"></div>
                    </div>
                    <img :src="image" alt="">
                </div>
            </router-link>
        </div>
        <div class="row-2">
            <router-link v-for="(image, index) of images2" :key="index" to="item">
                <div class="image">
                    <div class="inner">
                        <img class="link" src="../../assets/images/link.png" alt="">
                        <h2 class="headliner">web design</h2>
                        <p class="description">Description</p>
                        <div class="shape-orange"></div>
                    </div>
                    <img :src="image" alt="">
                </div>
            </router-link>
        </div>
        <router-link to="/"><button>Go to main</button></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images1: [
                require ("../../assets/images/row1-1.png"),
                require ("../../assets/images/row1-2.png"),
                require ("../../assets/images/row1-3.png"),
            ],
            images2: [
                require ("../../assets/images/row2-1.png"),
                require ("../../assets/images/row2-2.png"),
                require ("../../assets/images/row2-3.png"),
            ]
        }
    }
}
</script>

<style scoped>
    @font-face {
        font-family: 'bigJohn';
        src: url('../../assets/fonts/big-john.otf');
    }

    @font-face {
        font-family: 'amble-bold';
        src: url('../../assets/fonts/amble-bold.ttf');
    }

    @font-face {
        font-family: 'slimJoe';
        src: url('../../assets/fonts/slim-joe.otf');
    }

    .work {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
    }

    h1 {
        margin-top: 100px;
        font-family: 'bigJohn';
        font-weight: 100;
        font-size: 40px;
        border: 3px solid #fff;
        padding: 30px 60px;
    }

    .shape {
        width: 100px;
        height: 2px;
        background: #000;
        margin: 20px 0 90px;
    }

    nav {
        width: 60%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 90px;
    }

    a {
        font-family: 'slimJoe';
        font-size: 20px;
        text-decoration: none;
        color: #000;
    }

    a:hover {
        font-family: 'bigJohn';
    }

    .row-1,
    .row-2 {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin-bottom: 30px;
    }

    .link {
        width: auto;
        height: auto;
    }

    button {
        font-family: 'amble-bold';
        font-weight: 100;
        font-size: 24px;
        background: none;
        padding: 15px 99px;
        border: 3px solid #000;
        margin: 30px 0 50px;
        cursor: pointer;
    }

    .inner {
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: #fff;
        background-color: rgba(58,58,58,0.8);
        width: 370px;
        height: 420px;
    }

    .headliner {
        text-transform: uppercase;
        margin-block-end: 0;
        font-family: 'bigJohn';
        font-size: 20px;
        font-weight: 100;
    }

    .inner p {
        margin-bottom: 30px;
        font-family: 'amble-regular';
    }

    .shape-orange {
        width: 50px;
        height: 2px;
        background-color: #d87843;
    }

    @media (min-width: 320px) {
        h1 {
            font-size: 30px;
            text-align: center;
            padding: 0;
            margin-top: 50px;
        }

        .shape {
            margin: 20px 0 40px;
        }

        nav {
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
        }

        a {
            margin-bottom: 10px;
        }

        .row-1,
        .row-2 {
            flex-direction: column;
            margin-bottom: 0;
        }

        .row-2 {
            margin-bottom: 30px;
        }

        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        img {
            width: 80%;
            height: 80%;
        }

        .inner {
            text-align: center;
            width: 180px;
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            color: #fff;
            background-color: rgba(58,58,58,0.9);
        }
    }

    @media (min-width: 600px) {
        img {
            width: 70%;
            height: 70%;
        }
    }

    @media (min-width: 700px) {
        img:not(.link) {
            width: 60%;
            height: 60%;
        }
    }

    @media (min-width: 850px) {
        nav {
            width: 100%;
            flex-direction: row;
        }

        img {
            width: 50%;
            height: 50%;
        }
    }

    @media (min-width: 950px) {
        h1 {
            margin-top: 100px;
            font-family: 'bigJohn';
            font-weight: 100;
            font-size: 40px;
            border: 3px solid #fff;
            padding: 30px 60px;
        }
        
        nav {
            margin-bottom: 90px;
        }

        .shape {
            width: 100px;
            height: 2px;
            background: #000;
            margin: 20px 0 90px;
        }

        .inner {
            width: 30%;
            height: 40%;
        }
    }

    @media (min-width: 1000px) {
        .row-1,
        .row-2 {
            flex-direction: row;
            justify-content: space-around;
            width: 90%;
        }

        .row-1 {
            margin-bottom: 20px;
        }

        .row-2 {
            margin-bottom: 80px;
        }

        img:not(.link) {
            width: 90%;
            height: 90%;
        }
        
        .inner {
            justify-content: center;
            align-items: center;
            position: absolute;
            color: #fff;
            background-color: rgba(58,58,58,0.8);
            width: 250px;
            height: 300px;
        }
    }

    @media (min-width: 1300px) {
        nav {
            width: 60%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 90px;
        }

        img {
            width: auto;
            height: auto;
        }
    }

    .image:hover .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: #fff;
        background-color: rgba(58,58,58,0.8);
        width: 333px;
        height: 380px;
    }
</style>