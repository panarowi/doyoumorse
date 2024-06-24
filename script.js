const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

// LATIN TO MORSE
{
    function getLatinCharacterList(text) {
        return text.split("")
    }

    function translateLatinCharacter(letter) {
        if (letter==" ") {
            return "/"
        } else {
            const capsLetter = letter.toUpperCase()
            return latinToMorse[capsLetter]
        }
    }

    function encode(string) {
        const stringToList = getLatinCharacterList(string)
        let encodedMessage = ""
        for (let i=0; i<stringToList.length; i++) {
            encodedMessage+= `${translateLatinCharacter(stringToList[i])} `
        }
        return encodedMessage
    }
}

// console.log(encode("coucou flupa"))


// MORSE TO LATIN
{
    function getMorseCharacterList(text) {
        return text.split(" ")
    }

    // getMorseCharacterList("-.-. --- ..- -.-. --- ..- / .-- .. .-- .. ")

    function translateMorseCharacter(letter) {
        if (letter =="/") {
            return " "
        } else {
            return morseToLatin[letter]
        }
    }

    function decode(string) {
        const morseToList = getMorseCharacterList(string.replace(/\s*$/,''))
        let decodedMessage =""
        for (let i=0;i<morseToList.length; i++) {
            decodedMessage+=translateMorseCharacter(morseToList[i])
        }
        console.log(decodedMessage)
        return decodedMessage
    }
    // console.log(decode("-.-. --- ..- -.-. --- ..- / .-- .. .-- .."))
}

// DISPLAY
{
const encodeInput = document.querySelector(".encode-input")
const encodeButton = document.querySelector(".encode-button")
const encodeResult = document.querySelector(".encode-result")

const decodeInput = document.querySelector(".decode-input")
const decodeButton = document.querySelector(".decode-button")
const decodeResult = document.querySelector(".decode-result")

encodeButton.addEventListener("click", 
    () => {
        const encodedToDisplay = encode(encodeInput.value)
        encodeResult.innerHTML = encodedToDisplay
} )


decodeButton.addEventListener("click",
    () => {
        const decodedToDisplay = decode(decodeInput.value)
        console.log(decodedToDisplay)
        decodeResult.innerHTML = decodedToDisplay
    }
)

}