$(document).ready(function() {
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
        endBreakEl.text('Come back from break at ' + newTime.format('hh:mm'));
        checkEndBreak();
    });

    // checks end break time and rounds it up to the nearest 5 minute
    function checkEndBreak() {
        if (newTime.format('mm') % 5 === 0) {
            // displays rounded time
            suggestedEndEl.text('Or we could round up and call it '+ newTime.format('hh:mm'));
        } else {
            // if time is not divisible by 5, round adds 1 until it is
            newTime = newTime.add(1, 'minute');
            checkEndBreak();
        };
    };
});