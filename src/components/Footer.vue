<template>
    <footer>
        <img src="../assets/images/logo-footer.png" alt="">
        <div class="block"><p>2014 (c) <span>Samir Timezguida. </span>All Rights Reserved.</p></div>
    </footer>
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
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        background-color: #222222;
        color: #fff;
        font-family: 'amble-regular';
    }

    .block {
        margin-top: 30px;
    }

    p {
        margin-block-end: 0;
    }

    span {
        color: #d87843;
        font-family: 'amble-bold';
    }

    @media (min-width: 320px) {
        img {
            width: 80%;
        }

        p {
            text-align: center;
        }
    }

    @media (min-width: 550px) {
        img {
            width: 60%;
        }
    }

    @media (min-width: 800px) {
        img {
            width: 50%;
        }
    }

    @media (min-width: 950px) {
        img {
            width: auto;
        }
    }
</style>