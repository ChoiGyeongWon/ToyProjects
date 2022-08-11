// 1 초 = 1000 밀리초
// 60 초 (1분) = 60000 밀리초
// 3600 초 (1시간) = 3600000 밀리초
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

    let runningMiliSeconds = 0;
    let runningSeconds = 0;
    let runningMinutes = 0;
    let runningHours = 0;
    let intervalMiliSeconds;
    let intervalSeconds;
    let intervalMinutes;
    let intervalHours;

    BtnStart.addEventListener("click", startBtnClick);
    BtnStop.addEventListener("click", stopBtnClick);
    BtnReset.addEventListener("click", resetBtnClick);

    function startBtnClick() {
        
        intervalMiliSeconds = setInterval(startMiliSeconds,10);
        intervalSeconds = setInterval(startSeconds,1000);
        intervalMinutes = setInterval(startMinutes,60000);
        intervalHours = setInterval(startHours,3600000);



        if(!this.classList.contains('active')) {

            this.classList.add('active');
            this.textContent = 'Start';

            BtnStop.classList.remove('active');
            BtnReset.classList.remove('active');

        }else {

            this.classList.remove('active');
            
        }

    }

    function stopBtnClick() {
        
        console.log('중지')
        clearInterval(intervalMiliSeconds);
        clearInterval(intervalSeconds);
        clearInterval(intervalMinutes);
        clearInterval(intervalHours);



        if(!this.classList.contains('active')) {

            this.classList.add('active');

            BtnStart.textContent = 'ReStart';
            BtnStart.classList.remove('active');

        }else {

            this.classList.remove('active');

        }

    }

    function resetBtnClick() {

        clearInterval(intervalMiliSeconds);
        clearInterval(intervalSeconds);
        clearInterval(intervalMinutes);
        clearInterval(intervalHours);
        
        runningMiliSeconds = 0;
        runningSeconds = 0;
        runningMinutes = 0;
        runningHours = 0;

        Miliseconds.textContent = '0' + runningMiliSeconds;
        Seconds.textContent = '0' + runningSeconds;
        Minutes.textContent = '0' + runningMinutes;
        Hours.textContent = '0' + runningHours;

        BtnStart.textContent = 'Start';
        BtnStart.classList.remove('active');
        BtnStop.classList.add('active');
        this.classList.add('active');    

    }


    function startMiliSeconds() {

        runningMiliSeconds += 1;

        if(runningMiliSeconds < 10) {
            Miliseconds.textContent = '0' + runningMiliSeconds;
        }else if(runningMiliSeconds < 100) {
            Miliseconds.textContent = runningMiliSeconds;
        }else {
            runningMiliSeconds = 0;
            Miliseconds.textContent = '0' + runningMiliSeconds;
        }

    }

    function startSeconds() {

        runningSeconds += 1;

        if(runningSeconds < 10) {
            Seconds.textContent = '0' + runningSeconds;
        }else if(runningSeconds < 60) {
            Seconds.textContent = runningSeconds;
        }else {
            runningSeconds = 0;
            Seconds.textContent = '0' + runningSeconds;
        }

    }

    function startMinutes() {

        runningMinutes += 1;

        if(runningMinutes < 10) {
            Minutes.textContent = '0' + runningMinutes;
        }else if(runningMinutes < 60) {
            Minutes.textContent = runningMinutes;
        }else {
            runningMinutes = 0;
            Minutes.textContent = '0' + runningMinutes;
        }

    }

    function startHours() {

        runningHours += 1;

        if(runningHours < 10) {
            Hours.textContent = '0' + runningHours;
        }else if(runningHours < 10) {
            Hours.textContent = runningHours;
        }

    }
    
    function stopTimer() {

    }

    function resetTimer() {

    }

})