const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let regex = /[01*]{10}/g;
    let arrWords = expr.match(regex);
    let convert = arrWords.map(word => word.replace(/[01]{2}/g, function (match) {
        if (match == "00") return "";
        if (match == "10") return ".";
        if (match == "11") return "-";
    }));

    let resultString = "";
    for (let i = 0; i < convert.length; i++) {
        if (convert[i] == "**********") {
            resultString += " ";
        }
        else {
            resultString += MORSE_TABLE[convert[i]];
        }
    }

    return resultString;
}

module.exports = {
    decode
}