let prepodsImg =[
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
    './img/prepods-ivan-shablakov.png',
]
let counter = 1;
let slideCount = document.getElementsByClassName('prepods-slider_counter')


function nextSlide(params) {
    let prepod = document.getElementById("prepod-"+counter)
    prepod.style.opacity = "0"
    counter++;
    if (counter == 9) {
        counter = 1
        slideCount.innerHTML = counter + "/8"
    }
    let nextPrepod = document.getElementById("prepod-"+counter)
    nextPrepod.style.opacity = '1'
    slideCount[counter - 1].innerHTML = counter + "/8"

    let prepodImg = document.getElementById('prepod-slide-'+counter)
    prepodImg.style.backgroundImage = "url(" + prepodsImg[counter - 1] + ")"
    console.log(prepodsImg[counter -1])
    
}
function prevSlide(params) {
    let prepod = document.getElementById("prepod-"+counter)
    prepod.style.opacity = "0"
    counter--;
    if (counter < 1) {
        counter = 8
        slideCount[counter - 1].innerHTML = counter + "/8"
    }
    let nextPrepod = document.getElementById("prepod-"+counter)
    nextPrepod.style.opacity = '1'
    slideCount[counter - 1].innerHTML = counter + "/8"

    let prepodImg = document.getElementById('prepod-slide-'+counter)
    prepodImg.style.backgroundImage = "url(" + prepodsImg[counter - 1] + ")"
    console.log(prepodsImg[counter -1])
    
}
function showAnswer(number) {
    let answer = document.getElementsByClassName('faq-answer_desc')
    number--;
    for(let i = 0; i <= answer.length; i++){
        if (i != number) {
            answer[i].style.opacity = "0"
        }
        if (i === number) {
            answer[i].style.opacity = "1"
        }
    }

}