<template>
    <div class="reasons">
        <h1>why choose us</h1>
        <div class="shape"></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Velit eligendi labore molestias numquam aperiam accusantium
             explicabo repellendus quod facere dolor quam, itaque quaerat!
        </p>
        <carousel perPage="3" paginationColor="grey" paginationActiveColor="#ff5b00" class="desktop images">
            <slide class="image">
                <img src="../assets/images/iphone.png" alt="">
                <h2>App Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/ipad.png" alt="">
                <h2>Responsive Layout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/macbook.png" alt="">
                <h2>Pixel Perfect Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/iphone.png" alt="">
                <h2>App Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/ipad.png" alt="">
                <h2>Responsive Layout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/macbook.png" alt="">
                <h2>Pixel Perfect Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
        </carousel>
        <carousel perPage="1" paginationColor="grey" paginationActiveColor="#ff5b00" class="mobile images">
            <slide class="image">
                <img src="../assets/images/iphone.png" alt="">
                <h2>App Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/ipad.png" alt="">
                <h2>Responsive Layout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
            <slide class="image">
                <img src="../assets/images/macbook.png" alt="">
                <h2>Pixel Perfect Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam nulla facere architecto neque saepe.</p>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data() {
        return {
        }
    },
    components: {
        Carousel,
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
        font-family: 'amble-light';
        src: url('../assets/fonts/amble-light.ttf');
    }

    @font-face {
        font-family: 'amble-regular';
        src: url('../assets/fonts/amble-regular.ttf');
    }

    .reasons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f4f4f4;
        padding: 40px 0;
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

    .images {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-top: 50px;
        width: 100%;
    }

    .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image p {
        width: 80%;
        text-align: center;
        font-size: 16px;
        font-weight: 100;
        font-family: 'amble-regular';
    }

    h2 {
        font-family: 'amble-regular';
        font-weight: 100;
        font-size: 24px;
        margin-block-end: 0.5em;
        margin-top: 40px;
    }

    @media (min-width: 320px) {
        .reasons {
            padding-top: 0;
        }

        h1 {
            font-size: 30px;
            margin-top: 50px;
        }

        p {
            width: 80%;
        }

        .desktop {
            display: none;
        }

        .image p {
            width: 280px;
        }
    }

    @media (min-width: 950px) {
        .mobile {
            display: none;
        }

        .desktop {
            display: flex;
        }

        .image {
            justify-content: flex-end;
        }

        h1 {
            font-size: 40px;
        }
    }
</style>
