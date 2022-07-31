module.exports = function toReadable (number) {
    const ones = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    const hundred = ' hundred';
    let output = '';
    const numString = number.toString();

    if (number < 20) {
        output = ones[number];
        return output.trim();
    }

    if (numString.length === 3) {
        output = ones[parseInt(numString.charAt(0))] + hundred;

        //for 10-19 numbers return from ones array
        parseInt((numString.charAt(1)) + numString.charAt(2)) < 20 && parseInt((numString.charAt(1)) + numString.charAt(2)) > 9 
        ? output += ones[parseInt((numString.charAt(1)) + numString.charAt(2))] : output += tens[parseInt(numString.charAt(1))];
        
        //for 10-19 numbers do not return name of last number. If number ends with 0 don't return 'zero' word from ones array 
        parseInt((numString.charAt(1)) + numString.charAt(2)) < 20 && parseInt((numString.charAt(1)) + numString.charAt(2)) > 9
        ? output : numString.charAt(2) !== '0' 
        ? output += ones[parseInt(numString.charAt(2))] : output;

        return output.trim();
    }

    output += tens[parseInt(numString.charAt(0))];
    //if number ends with 0 don't return 'zero' word from ones array
    numString.charAt(1) !== '0' ? output += ones[parseInt(numString.charAt(1))] : output;
    
    return output.trim();
}