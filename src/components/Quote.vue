<template>
    <div class="quote">
        <div class="container">
            <h2>Get a quote now.</h2>
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
        font-family: 'amble-bold';
        src: url('../assets/fonts/amble-bold.ttf');
    }

    .quote {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: url('../assets/images/quote-bg.png');
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
        width: auto;
        height: auto;
        line-height: 0;
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