var Time = dayjs().format('hh:mm');
var presentTime = dayjs();
var currentTimeEl = $('#currentTime');
var endBreakEl = $('#endBreak');
var suggestedEndEl = $('#suggestedEnd');
var newTime = presentTime.add(15, 'minute');
var endBreakHour = newTime.format('hh');
var endBreakMinutes = newTime.format('mm');

$(function() {
    // displays current time
    currentTimeEl.text('It is currently ' + Time);
    // displays end break time
    endBreakEl.text('Come back from break at ' + endBreakHour + ':' + endBreakMinutes);
    checkEndBreak();
});

// suggests an alternative break time and displays it
function checkEndBreak() {
    if (endBreakMinutes % 5 == 0) {
        suggestedEndEl.text('Or we could round up and call it ' + endBreakHour + ':' + endBreakMinutes);
    } else {
        var endBreakMinutes = endBreakMinutes.add(1, 'minute');
        console.log(endBreakMinutes);
        checkEndBreak();
    };
    return;
};