const youImage = new Image()
youImage.src = './img/you.png'
const MicrowaveImage = new Image()
MicrowaveImage.src = './img/enemy/MicrowaveIdle.png'

const chara = {
    you:{
        name: "you",
        position: {
            x: 280,
            y: 325
        },
        image: youImage,
        frames: {
            max: 1,
        },
        isEnemy: false,
    },
    Microwave: {
        name: "Microwave",
        position: {
            x: 650,
            y: -50
        },
        image: MicrowaveImage,
        frames: {
            max: 5,
            horizontal: true
        },
        isEnemy: true,
    }
}

