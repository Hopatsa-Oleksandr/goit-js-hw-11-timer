//Таймер написанный через класс
class Countdown {
    constructor(date, selector) {
    
        this.targetDate = new Date(date);
        this.selector = selector;
        this.anchorTag = document.querySelector(this.selector);
        this.days = this.anchorTag.querySelector('[data-value="days"]');
        this.hours = this.anchorTag.querySelector('[data-value="hours"]');
        this.mins = this.anchorTag.querySelector('[data-value="mins"]');
        this.secs = this.anchorTag.querySelector('[data-value="secs"]');
    }
    
    startTimer() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate.getTime() - currentTime;

            this.updateClockface(this.calculateTime(deltaTime)); 
        }, 1000);
    }
       
    updateClockface({ days, hours, mins, secs }) {
        this.days.textContent = days;
        this.hours.textContent = hours;
        this.mins.textContent = mins;
        this.secs.textContent = secs;
    }

    calculateTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return ({ days, hours, mins, secs });
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const newYearTimer = new Countdown('Jan 01, 2022', "#timer-1");

newYearTimer.startTimer();

//Таймер написанный функциями
/*const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
    start() {

        const targetDate = new Date('Jan 01, 2022');
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetDate.getTime() - currentTime;

            updateClockface(deltaTime);
            
        }, 1000);
    }
};

timer.start();

function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

*/