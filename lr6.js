function getWeeksAfterBirthDay() {
    var start = new Date(2001, 6, 13);
    var finish = new Date();

    function calcWeeks(start, finish) {
        return Math.round(finish - start) / (7 * 24 * 60 * 60 * 1000);
    }

    var weeks = calcWeeks(start, finish);
    document.getElementById('outputWeeksFromBirthDay').value = weeks + ' weeks';
}

function getDaysFromNewYear() {
    function calcDays(start, finish) {
        var start = new Date(2021, 1, 1);
        var finish = new Date();

        let result = Math.round(finish - start) / (24 * 60 * 60 * 1000);
        alert("Days From NewYear 2021 = " + result + " days");
    }
    
    return calcDays()    
}

function printToConsoleDataFromBeginingOfTheDay() {
    function calc() {
        var start = new Date();
        start.setUTCHours(0,0,0,0);
        var finish = new Date();
        
        var minutes = Math.round(finish - start) / (60 * 1000);
        var hours = Math.round(finish - start) / (60 * 60 * 1000);

        window.status = 'Годин від початку цього дня пройшло - ' + hours;
        console.log(window.status);

        window.status = 'Хвилин від початку цього дня пройшло - ' + minutes;
        console.log(window.status);
    }

    return calc()
}