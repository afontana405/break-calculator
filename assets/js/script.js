$(document).ready(function() {
    var currentTimeEl = $('#currentTime');
    var endBreakEl = $('#endBreak');
    var suggestedEndEl = $('#suggestedEnd');
    var presentTime = dayjs();
    var newTime = presentTime.add(15, 'minute');

    $(function() {
        // displays current time
        currentTimeEl.text('It is currently ' + presentTime.format('h:mm A'));
        // displays end break time
        endBreakEl.text('Come back from break at ' + newTime.format('h:mm A'));
        // if newtime is not divisible by 5, calls the roundEndBreak function
        if (newTime.format('mm') % 5 !== 0) {
            roundEndBreak();
        } else {
            suggestedEndEl.css('display', 'none');
            endBreakEl.css('border-bottom', '10px solid');
        };
    });
    // checks end break time and rounds it up to the nearest 5 minute
    function roundEndBreak() {
        if (newTime.format('mm') % 5 === 0) {
            // displays rounded time
            suggestedEndEl.text('Or we could round up and call it '+ newTime.format('h:mm A'));
        } else {
            // if time is not divisible by 5, adds 1 until it is
            newTime = newTime.add(1, 'minute');
            roundEndBreak();
        };
    };
});