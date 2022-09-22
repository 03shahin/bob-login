///////////////get elemnt/////////////////////
let rightEye = document.querySelector('.righteye')
let leftEye = document.querySelector('.lefteye')
let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput')


/////////////////////eye setting//////////////////////
/////////////left eye/////////////////////////
let leftEyeTop = 75
let leftEyeLeft = 110
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

/////////////right eye/////////////////
let rightEyeTop = 75
let rightEyeLeft = 175
let rightEyePaddingLeft = 0
let rightEyePaddingTop = 0



//////////////////////////functions///////////////////////////
const userInputFocus = () => {
    console.log('userInputFocus');
    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 10) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyePaddingTop++
        leftEyeLeft--
        rightEyePaddingTop++
        rightEyeLeft--

    }, 10)
}

const userInputBlur = () => {
    console.log('userInputBlur');
    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 0) {
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyePaddingTop--
        leftEyeLeft++
        rightEyePaddingTop--
        rightEyeLeft++

    }, 10)
} 


const userKeyHandler = (event) => {
    console.log('userKeyHandler', event);

    if (leftEyePaddingLeft > 20) {
        return false
    }

    if (event.keyCode === 8) {
        leftEyePaddingLeft--
        rightEyePaddingLeft--
    } else {
        leftEyePaddingLeft++
        rightEyePaddingLeft++
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px'
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px'



}


/////////////////////pass elem function/////////////////
const passInputFocus = () => {
    console.log('passInputFocus');
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 60) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'



        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft--

    }, 10)
}

const passInputBlur = () => {
    console.log('passInputBlur');

    let eyePosition = setInterval(() => {
        if (leftEyeTop === 75) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'

        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'



        leftEyeTop++
        leftEyeLeft--
        rightEyeTop++
        rightEyeLeft++

    }, 10)
}


/////////////////////set event///////////////////////////////
userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keydown', userKeyHandler)

///////////////////////set event for pass elem//////////////////////
passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)