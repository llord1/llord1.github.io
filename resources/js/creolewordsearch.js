var creolegrid = [
	['N',	'N',	'E',	'D',	'O',	'K',	'C',	'H',	'A',	'T',	'L',	'U',	'O',	'P',	'A',	'Z',	'É',	'L',	'P'],
	['G',	'S',	'Ò',	'L',	'S',	'O',	'U',	'W',	'I',	'B',	'È',	'F',	'É',	'P',	'K',	'P',	'É',	'A',	'K'],
	['I',	'M',	'O',	'U',	'T',	'O',	'N',	'K',	'V',	'I',	'M',	'B',	'W',	'Y',	'A',	'Ò',	'N',	'V',	'Ò'],
	['T',	'M',	'K',	'W',	'A',	'P',	'O',	'Ò',	'K',	'W',	'N',	'É',	'O',	'N',	'B',	'U',	'K',	'T',	'B'],
	['Y',	'B',	'T',	'A',	'Z',	'A',	'A',	'F',	'E',	'O',	'S',	'N',	'T',	'U',	'O',	'I',	'I',	'D',	'O'],
	['Ò',	'É',	'L',	'K',	'A',	'Y',	'A',	'L',	'B',	'O',	'K',	'O',	'N',	'T',	'W',	'W',	'J',	'O',	'W'],
	['K',	'L',	'L',	'A',	'K',	'N',	'N',	'K',	'A',	'Y',	'U',	'I',	'A',	'E',	'B',	'I',	'X',	'W',	'A'],
	['Ò',	'Y',	'É',	'Z',	'P',	'S',	'E',	'V',	'Z',	'F',	'L',	'H',	'Y',	'A',	'D',	'M',	'K',	'A',	'N'],
	['L',	'É',	'F',	'É',	'O',	'I',	'O',	'Y',	'O',	'A',	'C',	'E',	'K',	'A',	'A',	'A',	'I',	'D',	'M'],
	['Ò',	'M',	'A',	'N',	'S',	'L',	'N',	'U',	'H',	'N',	'N',	'N',	'N',	'N',	'J',	'W',	'W',	'L',	'Y'],
	['M',	'A',	'N',	'K',	'A',	'I',	'Y',	'A',	'E',	'C',	'O',	'N',	'N',	'N',	'B',	'V',	'È',	'N',	'É'],
	['H',	'K',	'L',	'N',	'W',	'É',	'K',	'W',	'N',	'H',	'N',	'I',	'D',	'I',	'N',	'M',	'N',	'B',	'K'],
	['O',	'A',	'L',	'È',	'N',	'I',	'H',	'W',	'C',	'N',	'K',	'E',	'L',	'O',	'O',	'D',	'A',	'È',	'A'],
	['U',	'K',	'Y',	'I',	'W',	'C',	'B',	'O',	'I',	'O',	'A',	'I',	'J',	'K',	'L',	'N',	'K',	'Z',	'L'],
	['M',	'U',	'O',	'V',	'A',	'T',	'K',	'I',	'U',	'Y',	'K',	'K',	'A',	'T',	'V',	'I',	'É',	'I',	'M'],
	['A',	'H',	'N',	'M',	'V',	'J',	'U',	'G',	'C',	'R',	'É',	'J',	'B',	'V',	'É',	'L',	'L',	'S',	'A'],
	['I',	'N',	'I',	'F',	'L',	'A',	'M',	'O',	'N',	'H',	'T',	'A',	'W',	'É',	'T',	'W',	'É',	'I',	'S'],
	['K',	'W',	'A',	'B',	'H',	'T',	'Ò',	'T',	'I',	'S',	'O',	'U',	'W',	'I',	'T',	'R',	'P',	'S',	'O'],
	['A',	'Y',	'I',	'W',	'B',	'A',	'M',	'C',	'H',	'O',	'U',	'V',	'A',	'L',	'H',	'C',	'I',	'B',	'N']];
																			

var creolewords = ['KWAB', 'TÒTI', 'MANNIKOU', 'TOUTWÈL', 'VÈ', 'BALENN', 'KAYAL', 'LAPIN', 'TAZA', 'KOKIYAJ','KANNA', 'KÒF', 'KÒK','BÈT', 'PÉLÉKAN', 'MÈL', 'WÉTJEN', 'KÒBO',
    'MABWIYA', 'CHOUVAL', 'WAT', 'MAKAK', 'LYON', 'VOLAN', 'SIKWIYÉ', 'KWAPO', 'DANSÉ', 'KODENN', 'CHAT','POUL', 'LÉZA', 'LÉFAN', 'CHATOU', 'PAN',
    'WADENN', 'MÒLÒKÒY', 'SOUWI', 'HOUMA', 'KILIBWI', 'CHYEN', 'SÒLSOUWI', 'WANMYÉ', 'PWÉSON', 'MOUTON', 'DOWAD', 'PANTOUFOUYÉ', 'PIJON', 'BICH', 'SISIZÈB', 'BÉLYÉ',
    'MWENNSON', 'ZANNDOLI', 'JIBYÉ', 'BOUWIK', 'KABWIT', 'MACHWEN', 'MALFINI', 'JAKO', 'BÈF','TIG','KOCHON', 'ZÉ', 'KAY', 'KWIBICH' ];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var wordnames = getRandom(creolewords, 5)

ws = new WordSearch({
        "grid": creolegrid, // Your grid to search
        "words": wordnames, // The list of words to find
        "parentId": "mysearchtask",
        "onFindWord": function() { // When a word is found...
          console.log(this.getScore()); // Log score
          console.log(this.getTiming()); // Log time to find each word
        } 
    });