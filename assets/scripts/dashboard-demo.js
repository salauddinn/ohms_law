var Rt;
var R1;
var R2;
var R3;
var recipRt;
$(function () {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            voltage: '10 volt',
            rtotal: '0.5 ohms'
        }, {
            voltage: '15 volt',
            rtotal: '1.23 ohms'
        }, {
            voltage: '20 volt',
            rtotal: '0.8 ohms'
        }, {
            voltage: '25 volt',
            rtotal: '0.2 ohms'
        }, {
            voltage: '30 volt',
            rtotal: '2 ohms'
        }, {
            voltage: '35 volt',
            rtotal: '1.2 ohms'
        }],
        xkey: 'voltage',
        ykeys: ['rtotal'],
        labels: ['Total Resistance'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
});
$('.add-resistor').click(function() {
var text1= prompt ("Enter the resistance of R1 ","");
var text2= prompt ("Enter the resistance of R2 ","");
var text3= prompt ("Enter the resistance of R3 ","");
    R1 = parseFloat(text1);
    R2 = parseFloat(text2);
    R3 = parseFloat(text3);
    var circuitType = $('input[type=radio]:checked').val();
    if (circuitType === "parallel") {
        recipRt = 1/R1 + 1/R2 + 1/R3;
        Rt = 1/recipRt;
        renderParallelCircuit(R1, R2, R3, Rt);
    }else {
        Rt = R1 + R2 + R3;
        renderSeriesCircuit(R1, R2, R3, Rt);
    }
});
function renderParallelCircuit(R1, R2, R3, Rt) {
    $('#parallel').removeClass('active');
    $('#series').removeClass('active');
    $('#parallel').addClass('active');
    $('#parallel .r1 b, .result .r1').html(R1+"<i>&#8486;</i>");
    $('#parallel .r2 b, .result .r2').html(R2+"<i>&#8486;</i>");
    $('#parallel .r3 b, .result .r3').html(R3+"<i>&#8486;</i>");
    $('.result .rt').html(Rt+"<i>&#8486;</i>");
}
function renderSeriesCircuit(R1, R2, R3, Rt) {
    $('#series').removeClass('active');
     $('#parallel').removeClass('active');
    $('#series').addClass('active');
    $('#series .r1 b, .result .r1').html(R1+"<i>&#8486;</i>");
    $('#series .r2 b, .result .r2').html(R2+"<i>&#8486;</i>");
    $('#series .r3 b, .result .r3').html(R3+"<i>&#8486;</i>");
    $('.result .rt').html(Rt+"<i>&#8486;</i>");
}