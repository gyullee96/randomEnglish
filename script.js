const button = document.querySelector('button');
const p = document.querySelector('p')

const sentences = [
    "I'm busy -< I'm swamped",
    "I'm undecided -> I'm on the fence",
    "Don't worry about it -> It's no big deal",
    "It's too late -> That ship has sailed",
    "It's raining a lot -> It's pouring",
    "I totally forgot -> It slipped my mind"
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length)
    return sentences[randomIndex];
}

button.addEventListener('click', function () {
    p.innerText = getRandomSentence();
});

// const random = () => {
//     return Math.floor(Math.random() * 3);
// }

// button.addEventListener('click', function () {
//     const randomEnglish = random()

//     if (randomEnglish === 1) {
//         p.innerText = "I'm busy -> I'm swamped"
//     } else if (randomEnglish === 2) {
//         p.innerText = "I'm undecided -> I'm on the fence"
//     } else {
//         p.innerText = "Don't worry about it -> It's no big deal"
//     }
// })

//버튼 누를 때 실행 될 이벤트

// 랜덤하게 뽑아 낼 자료

// 자료를 랜덤하게 뽑게 해주는 코드

// 그 자료를 출력해주는 코드

// (265 랜덤컬러러)

// git 저장 수시로 하기 git add .