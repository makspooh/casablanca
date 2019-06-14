<template>
    <div class="introduction">
        <h1>introduction</h1>
        <div class="shape"></div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Accusamus cum enim eos id, eligendi cumque ab tempore neque 
            culpa maxime atque architecto nemo aperiam sunt saepe at?
        </p>
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
        src: url('../assets/fonts/big-john.otf');
    }

    @font-face {
        font-family: 'amble-light';
        src: url('../assets/fonts/amble-light.ttf');
    }

    .introduction {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        background-color: #fff;
        height: 495px;
    }

    h1 {
        text-transform: uppercase;
        font-family: 'bigJohn';
        font-weight: 100;
        font-size: 40px;
    }

    .shape {
        width: 100px;
        height: 2px;
        background: #000;
        margin: 40px 0 40px;
    }

    p {
        width: 50%;
        text-align: center;
        font-size: 22px;
        font-weight: 100;
        font-family: 'amble-light';
    }
    
    @media (min-width: 320px) {
        h1 {
            font-size: 30px;
        }

        p {
            width: 80%;
        }
    }
    
    @media (min-width: 950px) {
        h1 {
            font-size: 50px;
        }
    }
</style>