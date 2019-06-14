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
        <div class="item">
            <img src="../../assets/images/row1-1.png" alt="">
            <div class="text">
                <h1 class="headliner">headliner of item</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates voluptatibus sequi laborum doloremque officia
                    incidunt eos similique saepe, totam quibusdam.</p>
            </div>
        </div>
        <router-link to="/"><button>Go to main</button></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
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

    .item {
        display: flex;
        width: 57%;
        height: auto;
        margin-bottom: 30px;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .headliner {
        margin: 0;
        border: none;
    }

    .description {
        font-family: 'amble-light';
        padding: 0 60px;
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

        .item {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 80%;
            height: 80%;
            margin-bottom: 30px;
        }

        .item p {
            width: 80%;
            text-align: center;
            padding: 0;
            margin-bottom: 0;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        button {
            width: 232px;
            height: 55px;
            padding: 0;
            margin: 10px 0 50px;
        }
    }

    @media (min-width: 600px) {
        img {
            width: 70%;
            height: 70%;
        }
    }

    @media (min-width: 700px) {
        img {
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
        .item {
            flex-direction: row;
        }

        h1 {
            margin-top: 100px;
            font-family: 'bigJohn';
            font-weight: 100;
            font-size: 40px;
            border: 3px solid #fff;
            padding: 30px 60px;
            text-align: left;
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

        .item {
            display: flex;
            width: 57%;
            height: auto;
            margin-bottom: 30px;
        }

        img {
            width: auto;
            height: auto;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .headliner {
            margin: 0;
            border: none;
        }

        .item p {
            font-family: 'amble-light';
            padding: 0 60px;
            text-align: left;
        }

        button {
            font-family: 'amble-bold';
            font-weight: 100;
            font-size: 24px;
            background: none;
            border: 3px solid #000;
            margin: 30px 0 50px;
            cursor: pointer;
        }
    }
</style>