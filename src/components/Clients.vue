<template>
    <div id="our_clients" class="clients">
        <h1>our clients</h1>
        <div class="shape"></div>
        <div class="images">
            <img src="../assets/images/google.png" alt="">
            <img src="../assets/images/samsung.png" alt="">
            <img src="../assets/images/flickr.png" alt="">
            <img src="../assets/images/foursquare.png" alt="">
            <img src="../assets/images/pinterest.png" alt="">
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

    .clients {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        background-color: #f4f4f4;
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
        margin: 40px 0 100px;
    }

    .images {
        width: 1150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 50px;
    }

    @media (min-width: 320px) {
        h1 {
            font-size: 30px;
        }

        .shape {
            margin: 20px 0 30px;
        }

        .images {
            flex-direction: column;
            margin-bottom: 0;
            width: 100%;
        }

        img {
            margin-bottom: 20px;
        }
    }

    @media (min-width: 950px) {
        .clients {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #000;
            background-color: #f4f4f4;
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
            margin: 40px 0 100px;
        }

        .images {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 50px;
        }
    }
</style>