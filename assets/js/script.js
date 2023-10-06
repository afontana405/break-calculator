var Time = dayjs().format('hh:mm')
var currentTime = $('#currentTime');
var endBreak = $('#endBreak');
var suggestedEnd = $('#suggestedEnd');

console.log(Time);

$(function() {
    currentTime.text('It is currently ' + Time);
});

$(function() {
    var plus15 = Time.add(15, 'm')
    endBreak.text('Come back from break at ' + plus15);
});