<template>
    <div id="touch" class="touch">
        <div class="block-1">
            <h1>get in touch</h1>
            <div class="shape"></div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Accusamus cum enim eos id, eligendi cumque ab tempore neque 
                culpa maxime atque architecto nemo aperiam sunt saepe at?
            </p>
        </div>
        <div class="desktop block-2">
            <div class="block-2__block-1">
                <div class="text">
                    <h2>our location</h2>
                    <p>174 Mimosa ST. NW</p>
                    <p>Casablanca, MA 20370</p>
                    <p>(212) 123 456 7</p>
                    <p>Samir Timezguida</p>
                </div>
                <div class="images">
                    <a href=""><img src="../assets/images/tw.png" alt=""></a>
                    <a href=""><img src="../assets/images/fa.png" alt=""></a>
                    <a href=""><img src="../assets/images/li.png" alt=""></a>
                    <a href=""><img src="../assets/images/v.png" alt=""></a>
                    <a href=""><img src="../assets/images/be.png" alt=""></a>
                </div>
            </div>
            <div class="block-2__block-2">
                <form id="form" action="" method="get">
                    <div class="form-block">
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                    </div>
                    <input class="message" type="text" placeholder="Message">
                    <div class="button">
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="mobile block-2">
            <div class="block-2__block-1">
                <div class="text">
                    <h2>our location</h2>
                    <p>174 Mimosa ST. NW</p>
                    <p>Casablanca, MA 20370</p>
                    <p>(212) 123 456 7</p>
                    <p>Samir Timezguida</p>
                </div>
                <div class="images">
                    <a href=""><img src="../assets/images/tw.png" alt=""></a>
                    <a href=""><img src="../assets/images/fa.png" alt=""></a>
                    <a href=""><img src="../assets/images/li.png" alt=""></a>
                    <a href=""><img src="../assets/images/v.png" alt=""></a>
                    <a href=""><img src="../assets/images/be.png" alt=""></a>
                </div>
            </div>
            <div class="block-2__block-2">
                <form id="form" action="" method="get">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <input type="text" placeholder="Message">
                    <div class="button">
                        <button>Send</button>
                    </div>
                </form>
            </div>
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
        font-family: 'amble-light';
        src: url('../assets/fonts/amble-light.ttf');
    }

    .touch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        background-color: #fff;
    }

    .block-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        text-transform: uppercase;
        font-family: 'bigJohn';
        font-weight: 100;
        font-size: 40px;
        margin-top: 100px;
    }

    .shape {
        width: 100px;
        height: 2px;
        background: #000;
        margin: 40px 0 40px;
    }

    .block-1 p {
        width: 50%;
        text-align: center;
        font-size: 22px;
        font-weight: 100;
        font-family: 'amble-light';
        margin-bottom: 100px;
    }

    .block-2 {
        display: flex;
        width: 100%;
        height: 400px;
    }

    .block-2__block-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        background-color: #f2f2f2;
    }

    .text {
        background-color: #f2f2f2;
    }

    .block-2__block-1 p {
        text-align: left;
        width: auto;
        font-family: 'amble-light';
        font-style: italic;
    }

    .block-2__block-1 p:last-of-type {
        margin-bottom: 40px;
    }

    .block-2__block-1 h2 {
        text-align: left;
        width: auto;
        font-family: 'bigJohn';
        margin-bottom: 40px;
    }

    .block-2__block-2 {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e4e4e4;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        border: none;
        border-bottom: 1px solid #afafaf;
        width: 285px;
        margin: 0 55px 55px 0;
        padding: 15px 0 15px 30px;
        background-color: #e4e4e4;
        color: #676767;
        font-family: 'amble-regular';
        font-style: italic;
        font-size: 24px;
    }

    ::placeholder {
        color: #676767;
        font-family: 'amble-regular';
        font-style: italic;
        font-size: 18px;
    }

    .block-form {
        width: 100%;
    }

    .message {
        width: 655px;
    }

    .button {
        width: 685px;
        text-align: right;
    }

    button {
        background: none;
        border: 3px solid black;
        width: 180px;
        height: 55px;
        font-family: 'amble-bold';
        font-size: 24px;
        cursor: pointer;
    }

    .images {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 320px) {
        h1 {
            font-size: 30px;
            text-align: center;
            margin-top: 50px;
        }

        .block-1 p {
            width: 80%;
            margin-bottom: 50px;
        }

        .images {
            width: 100%;
            justify-content: space-around;
            margin-bottom: 50px;
        }

        .desktop {
            display: none;
        }

        .block-2 {
            flex-direction: column;
            height: auto;
        }

        .block-2 p,
        .block-2 h2 {
            text-align: center;
        }

        .block-2 h2 {
            margin-top: 50px;
        }

        .block-2__block-1 {
            width: 100%;
        }

        .block-2__block-2 {
            width: 100%;
        }

        form {
            justify-content: center;
            align-items: center;
            margin-top: 30px;
        }

        input {
            margin: 0;
        }

        .button {
            width: auto;
            margin: 30px 0 50px;
        }
    }

    @media (min-width: 550px) {
        .images {
            width: 70%;
        }

        input {
            width: 350px;
        }
    }

    @media (min-width: 600px) {
        .images {
            width: 70%;
        }

        input {
            width: 350px;
        }
    }

    @media (min-width: 800px) {
        input {
            width: 550px;
        }
    }

    @media (min-width: 950px) {
        h1 {
            font-size: 40px;
        }
    }

    @media (min-width: 1100px) {
        .desktop {
            display: flex;
        }

        .block-1 {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            text-transform: uppercase;
            font-family: 'bigJohn';
            font-weight: 100;
            font-size: 40px;
            margin-top: 100px;
        }

        .shape {
            width: 100px;
            height: 2px;
            background: #000;
            margin: 40px 0 40px;
        }

        .block-1 p {
            width: 50%;
            text-align: center;
            font-size: 22px;
            font-weight: 100;
            font-family: 'amble-light';
            margin-bottom: 100px;
        }

        .block-2 {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 400px;
        }

        .block-2__block-1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30%;
            background-color: #f2f2f2;
        }

        .text {
            background-color: #f2f2f2;
        }

        .block-2__block-1 p {
            text-align: left;
            width: auto;
            font-family: 'amble-light';
            font-style: italic;
        }

        .block-2__block-1 p:last-of-type {
            margin-bottom: 40px;
        }

        .block-2__block-1 h2 {
            text-align: left;
            width: auto;
            font-family: 'bigJohn';
            margin-bottom: 40px;
        }

        .block-2__block-2 {
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #e4e4e4;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        input {
            border: none;
            border-bottom: 1px solid #afafaf;
            width: 285px;
            margin: 0 55px 55px 0;
            padding: 15px 0 15px 30px;
            background-color: #e4e4e4;
            color: #676767;
            font-family: 'amble-regular';
            font-style: italic;
            font-size: 24px;
        }

        ::placeholder {
            color: #676767;
            font-family: 'amble-regular';
            font-style: italic;
            font-size: 18px;
        }

        .block-form {
            width: 100%;
        }

        .message {
            width: 655px;
        }

        .button {
            width: 685px;
            text-align: right;
        }

        button {
            background: none;
            border: 3px solid black;
            width: 180px;
            height: 55px;
            font-family: 'amble-bold';
            font-size: 24px;
            cursor: pointer;
        }

        .images {
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .mobile {
            display: none;
        }
    }
</style>