<template>
    <div class="creativity">
        <div class="container">
            <h2>Pure Creativity.</h2>
        </div>
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
        font-family: 'amble-bold';
        src: url('../assets/fonts/amble-bold.ttf');
    }

    .creativity {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: url('../assets/images/creativity-bg.png');
        background-position: center;
        height: 500px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 425px;
        height: 95px;
        border: 3px solid #fff;
    }

    h2 {
        font-family: 'amble-bold';
        font-weight: 100;
        font-size: 30px;
    }

    @media (min-width: 320px) {
        .container {
            width: 280px;
        }
    }

    @media (min-width: 850px) {
        .container {
            width: 425px;
        }
    }
</style>