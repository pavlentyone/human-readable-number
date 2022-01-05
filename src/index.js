const units = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const dozens = [
    '', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
const gitNumbers = [
    'hundred', 'thousand', 'million', 'billion', 'trillion'
];

module.exports = function toReadable (number) {
    const unit = number % 10;
    const dozen = Math.trunc(number % 100 / 10);
    const hundred = Math.trunc(number % 1000 / 100);
    const thousand = Math.trunc(number % 10000 / 1000);
    
    let result =
        dozen > 1 ?
        [dozens[dozen], units[unit]].join(' ') :
        units[dozen * 10 + unit];
    
    if(hundred > 0){
        result = [unit[hundred], 'hundred', result].join(' ');
    }
    
    if(thousand > 0){
        result = [unit[thousand], 'thousand', result].join(' ');
    }
    
    return result;
}
