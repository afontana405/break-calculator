var Time = dayjs().format('hh:mm');
const presentTime = dayjs();
var currentTime = $('#currentTime');
var endBreak = $('#endBreak');
var suggestedEnd = $('#suggestedEnd');
const newTime = presentTime.add(15, 'minute');
const endBreakHour = newTime.format('hh');
const endBreakMinutes = newTime.format('mm');

$(function() {
    currentTime.text('It is currently ' + Time);
});

$(function() {
    endBreak.text('Come back from break at ' + endBreakHour + ':' + endBreakMinutes);
});




// const currentDate = new Date();
// const currentHour = currentDate.getHours();
// const currentMinutes = currentDate.getMinutes();
// const plus15 = currentMinutes.add(15, 'minute');
// console.log(`Current time: ${currentHour}:${plus15}`);