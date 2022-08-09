document.addEventListener("DOMContentLoaded", function(){

    const Timer = document.querySelector('.timer');
    const Hours = Timer.querySelector('.hours');
    const Minutes = Timer.querySelector('.minutes');
    const Seconds = Timer.querySelector('.seconds');
    const Miliseconds = Timer.querySelector('.miliseconds');

    const ButtonWrap = document.querySelector('.buttonWrap');
    const BtnStart = ButtonWrap.querySelector('.btnStart');
    const BtnStop = ButtonWrap.querySelector('.btnStop');
    const BtnReset = ButtonWrap.querySelector('.btnReset');

    ButtonWrap.addEventListener("click", btnClick);

    function btnClick(e) {
        
        let Target = e.target;
        
        if(Target.classList.contains('btnStart')) { //시작
            setInterval(startTimer,1000);
        }else if(Target.classList.contains('btnStop')) { //중지
            console.log('중지')
        }else if(Target.classList.contains('btnReset')) { //리셋
            console.log('다시시작')
        }

    }

    function startTimer() {
        console.log(11)
    }

    function stopTimer() {

    }

    function resetTimer() {

    }

})