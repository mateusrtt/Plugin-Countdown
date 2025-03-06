import Countdown from "./countdown.js";

const TempoParaNatal = new Countdown('24 December 2025 23:59:59 GMT-0300');
const TempoParaAnoNovo = new Countdown('31 December 2025 23:59:59 GMT-0300');

console.log(TempoParaNatal.total);
console.log(TempoParaAnoNovo.total);

//setInterval(() =>{
    //console.log(TempoParaAnoNovo.total);
//}, 1000)


