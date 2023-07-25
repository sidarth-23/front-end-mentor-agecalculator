const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const yearCal = document.querySelector('#year-cal');
const dayCal = document.querySelector('#day-cal');
const monthCal = document.querySelector('#month-cal');
const check1 = document.querySelector('.error-1');
const check2 = document.querySelector('.error-2');
const check3 = document.querySelector('.error-3');

function allFilled(year, month, day){
    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);
    if (!yearValue || !dayValue || !monthValue){
        check1.textContent = 'This field is required';
        check2.textContent = 'This field is required';
        check3.textContent = 'This field is required';
    }
    else{
        return true;
    }
}

function withinRange(year, month, day){
    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);
    if (1>dayValue || dayValue>31){
        check1.textContent='Must be a valid day';
    }
    else if (1>monthValue || monthValue>12){
        check2.textContent='Must be a valid month';
    }
    else if(new Date().getFullYear() < yearValue){
        check3.textContent='Must be a valid year';
    }
    else{
        return true
    }
}

function validDate(year, month, day){
    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);
    const selectDate = new Date(yearValue, monthValue - 1, dayValue);
    if (!selectDate){
        check1.textContent = 'Must be a valid date'
    }
    else{
        console.log(selectDate);
        console.log("you ran");
        return true;
    }
}

function getDateDiff(date1, date2) {
    const diffInMs = date2.getTime() - date1.getTime(); // difference in milliseconds
    const diffInDays = Math.floor(diffInMs / 86400000); // difference in days
  
    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const days = diffInDays - years * 365 - months * 30;
  
    return { years, months, days };
  }

const button = document.querySelector('.send-input');
button.addEventListener('click', () => {
    check1.textContent = '';
    check2.textContent = '';
    check3.textContent = '';
    if (allFilled(year, month, day)){
        if (withinRange(year, month, day)){
            if (validDate(year, month, day)){
                check1.textContent = '';
                check2.textContent = '';
                check3.textContent = '';
                const dayValue = parseInt(day.value);
                const monthValue = parseInt(month.value);
                const yearValue = parseInt(year.value);
                const selectDate = new Date(yearValue, monthValue - 1, dayValue);
                const currenDate = new Date();
                const diff = getDateDiff(selectDate,currenDate);
                yearCal.textContent = diff.years;
                monthCal.textContent = diff.months;
                dayCal.textContent = diff.days;
            }
        }
    }
})