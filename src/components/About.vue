<template>
    <div id="about" class="work">
        <h1>about us</h1>
        <div class="shape"></div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Accusamus cum enim eos id, eligendi cumque ab tempore neque 
            culpa maxime atque architecto nemo aperiam sunt saepe at?
        </p>
        <div class="row-1">
            <div v-for="(image, index) of images1" :key="index" to="item">
                <a href="#touch"><div class="image">
                    <div class="inner">
                        <img class="link" src="../assets/images/link.png" alt="">
                        <h2 class="headliner">first name</h2>
                        <p class="description">Position</p>
                    </div>
                    <img :src="image" alt="">
                </div></a>
            </div>
            <div class="button">
                <h2>we are hiring</h2>
                <div class="shape"></div>
                <a href="#touch"><button>Apply</button></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images1: [
                require ("../assets/images/john.png"),
                require ("../assets/images/sarah.png"),
                require ("../assets/images/kate.png"),
            ]
        }
    }
}
</script>

<style scoped>
    @font-face {
        font-family: 'bigJohn';
        src: url('../assets/fonts/big-john.otf');
    }

    @font-face {
        font-family: 'amble-bold';
        src: url('../assets/fonts/amble-bold.ttf');
    }

    @font-face {
        font-family: 'slimJoe';
        src: url('../assets/fonts/slim-joe.otf');
    }

    .work {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        background-color: #fff;
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
        margin: 20px 0 50px;
    }

    p {
        width: 50%;
        text-align: center;
        font-size: 22px;
        font-weight: 100;
        font-family: 'amble-light';
        margin-bottom: 50px;
    }
    
    .row-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 90%;
    }

    .link {
        width: auto;
        height: auto;
    }

    .button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        width: 270px;
        height: 360px;
        margin-bottom: 60px;
    }

    .button h2 {
        text-align: center;
        width: 60%;
        font-family: 'bigJohn';
        font-weight: 100;
        font-size: 24px;
    }

    button {
        font-family: 'amble-bold';
        font-weight: 100;
        font-size: 24px;
        background: none;
        border: 3px solid #000;
        cursor: pointer;
        width: 180px;
        height: 55px;
    }

    .inner {
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        color: #fff;
        background-color: rgba(58,58,58,0.8);
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

    @media (min-width: 320px) {
        h1 {
            font-size: 30px;
            text-align: center;
            padding: 0;
            margin-top: 30px;
        }

        img:not(.link) {
            margin-bottom: 30px;
        }

        .shape {
            margin: 20px 0 40px;
        }

        p {
            width: 80%;
        }

        a {
            margin-bottom: 10px;
        }

        .row-1 {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .inner {
            text-align: center;
            width: 180px;
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            color: #fff;
            background-color: rgba(58,58,58,0.9);
            margin-top: -30px;
        }
    }

    @media (min-width: 950px) {
        h1 {
            margin-top: 50px;
            font-family: 'bigJohn';
            font-weight: 100;
            font-size: 40px;
            border: 3px solid #fff;
            padding: 30px 60px;
        }

        p {
            width: 50%;
        }

        img:not(.link) {
            margin-bottom: 60px;
        }

        .shape {
            width: 100px;
            height: 2px;
            background: #000;
            margin: 20px 0 50px;
        }

        .inner {
            width: 20%;
            height: 30%;
        }
    }

    @media (min-width: 1000px) {
        .row-1 {
            flex-direction: row;
            justify-content: space-around;
            width: 90%;
        }
        
        .inner {
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            color: #fff;
            background-color: rgba(58,58,58,0.8);
            width: 200px;
            height: 250px;
        }
    }

    .image:hover .inner {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        color: #fff;
        background-color: rgba(58,58,58,0.3);
        width: 272px;
        height: 360px;
    }

    .image:hover .headliner,
    .image:hover .description,
    .image:hover .link {
        display: none;
    }
</style>