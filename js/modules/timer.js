function timer(id, deadline) {
        /* const dealine = new Date(2022, 3, 20, 0); */

        function getRemainingTime(deadline) {
            let t = Date.parse(deadline) - Date.parse(new Date()), /* считаем разницу в млсек */
                  days = Math.floor(t / (1000 * 60 * 60 * 24)), 
                  hours = Math.floor(t / (1000 * 60 * 60) % 24),
                  minutes = Math.floor((t / 1000 / 60) % 60),
                  seconds = Math.floor((t / 1000) % 60);
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    
        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        } 
    
        function setClock (selector, deadline) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);
    
            updateClock(); /* чтобы при обновлении не отобр значения по дефолту */
    
            function updateClock () {
                const t = getRemainingTime(deadline);
    
                function zeroing(timeValue, timeSelector) {
                    if (timeValue <= 0) {
                      timeSelector.innerHTML = '00';  
                    } else {
                      timeSelector.innerHTML = getZero(timeValue);
                    }
                }
    
                zeroing(t.days, days);
                zeroing(t.hours, hours);
                zeroing(t.minutes, minutes);
                zeroing(t.seconds, seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
    
        setClock(id, deadline);
}

export default timer;