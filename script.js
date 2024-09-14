// Dictionary for Hindi numbers
const hindiNumbers = {
    1: 'एक', 2: 'दो', 3: 'तीन', 4: 'चार', 5: 'पाँच', 6: 'छह', 7: 'सात', 8: 'आठ', 9: 'नौ', 10: 'दस',
    11: 'ग्यारह', 12: 'बारह', 13: 'तेरह', 14: 'चौदह', 15: 'पंद्रह', 16: 'सोलह', 17: 'सत्रह', 18: 'अठारह', 19: 'उन्नीस', 20: 'बीस',
    21: 'इक्कीस', 22: 'बाईस', 23: 'तेईस', 24: 'चौबीस', 25: 'पच्चीस', 26: 'छब्बीस', 27: 'सत्ताईस', 28: 'अट्ठाईस', 29: 'उनतीस',
    30: 'तीस', 31: 'इकतीस', 32: 'बत्तीस', 33: 'तैंतीस', 34: 'चौंतीस', 35: 'पैंतीस', 36: 'छत्तीस', 37: 'सैंतीस', 38: 'अड़तीस', 39: 'उनतालीस',
    40: 'चालीस', 41: 'इकतालीस', 42: 'बयालीस', 43: 'तैंतालीस', 44: 'चौवालीस', 45: 'पैंतालीस', 46: 'छियालीस', 47: 'सैंतालीस', 48: 'अड़तालीस', 49: 'उनचास',
    50: 'पचास', 51: 'इक्यावन', 52: 'बावन', 53: 'तिरेपन', 54: 'चौवन', 55: 'पचपन', 56: 'छप्पन', 57: 'सत्तावन', 58: 'अट्ठावन', 59: 'उनसठ',
    60: 'साठ', 61: 'इकसठ', 62: 'बासठ', 63: 'तिरसठ', 64: 'चौंसठ', 65: 'पैंसठ', 66: 'छियासठ', 67: 'सड़सठ', 68: 'अड़सठ', 69: 'उनहत्तर',
    70: 'सत्तर', 71: 'इकहत्तर', 72: 'बहत्तर', 73: 'तिहत्तर', 74: 'चौहत्तर', 75: 'पचहत्तर', 76: 'छिहत्तर', 77: 'सत्तहत्तर', 78: 'अठहत्तर', 79: 'उन्यासी',
    80: 'अस्सी', 81: 'इक्यासी', 82: 'बयासी', 83: 'तिरासी', 84: 'चौरासी', 85: 'पिचासी', 86: 'छियासी', 87: 'सत्तासी', 88: 'अठासी', 89: 'नवासी',
    90: 'नब्बे', 91: 'इक्यानवे', 92: 'बानवे', 93: 'तिरानवे', 94: 'चौरानवे', 95: 'पचानवे', 96: 'छियानवे', 97: 'सत्तानवे', 98: 'अठानवे', 99: 'निन्यानवे',
    100: 'सौ'
};
// Dictionary for English numbers
const englishNumbers = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    21: 'twenty-one', 22: 'twenty-two', 23: 'twenty-three', 24: 'twenty-four', 25: 'twenty-five', 26: 'twenty-six', 27: 'twenty-seven', 28: 'twenty-eight', 29: 'twenty-nine',
    30: 'thirty', 31: 'thirty-one', 32: 'thirty-two', 33: 'thirty-three', 34: 'thirty-four', 35: 'thirty-five', 36: 'thirty-six', 37: 'thirty-seven', 38: 'thirty-eight', 39: 'thirty-nine',
    40: 'forty', 41: 'forty-one', 42: 'forty-two', 43: 'forty-three', 44: 'forty-four', 45: 'forty-five', 46: 'forty-six', 47: 'forty-seven', 48: 'forty-eight', 49: 'forty-nine',
    50: 'fifty', 51: 'fifty-one', 52: 'fifty-two', 53: 'fifty-three', 54: 'fifty-four', 55: 'fifty-five', 56: 'fifty-six', 57: 'fifty-seven', 58: 'fifty-eight', 59: 'fifty-nine',
    60: 'sixty', 61: 'sixty-one', 62: 'sixty-two', 63: 'sixty-three', 64: 'sixty-four', 65: 'sixty-five', 66: 'sixty-six', 67: 'sixty-seven', 68: 'sixty-eight', 69: 'sixty-nine',
    70: 'seventy', 71: 'seventy-one', 72: 'seventy-two', 73: 'seventy-three', 74: 'seventy-four', 75: 'seventy-five', 76: 'seventy-six', 77: 'seventy-seven', 78: 'seventy-eight', 79: 'seventy-nine',
    80: 'eighty', 81: 'eighty-one', 82: 'eighty-two', 83: 'eighty-three', 84: 'eighty-four', 85: 'eighty-five', 86: 'eighty-six', 87: 'eighty-seven', 88: 'eighty-eight', 89: 'eighty-nine',
    90: 'ninety', 91: 'ninety-one', 92: 'ninety-two', 93: 'ninety-three', 94: 'ninety-four', 95: 'ninety-five', 96: 'ninety-six', 97: 'ninety-seven', 98: 'ninety-eight', 99: 'ninety-nine',
    100: 'one hundred'
};


// Generate Hindi numbers
for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[101] = 'एक सौ एक';
    } else {
        hindiNumbers[100 + i] = `एक सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[201] = 'दो सौ एक';
    } else {
        hindiNumbers[200 + i] = `दो सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[301] = 'तीन सौ एक';
    } else {
        hindiNumbers[300 + i] = `तीन सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[401] = 'चार सौ एक';
    } else {
        hindiNumbers[400 + i] = `चार सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[501] = 'पांच सौ एक';
    } else {
        hindiNumbers[500 + i] = `पांच सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[601] = 'छ सौ एक';
    } else {
        hindiNumbers[600 + i] = `छ सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[701] = 'सात सौ एक';
    } else {
        hindiNumbers[700 + i] = `सात सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[801] = 'आठ सौ एक';
    } else {
        hindiNumbers[800 + i] = `आठ सौ ${hindiNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        hindiNumbers[901] = 'नौ सौ एक';
    } else {
        hindiNumbers[900 + i] = `नौ सौ ${hindiNumbers[i]}`;
    }
}

// Generate English numbers
for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[101] = 'one hundred one';
    } else {
        englishNumbers[100 + i] = `one hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[201] = 'two hundred one';
    } else {
        englishNumbers[200 + i] = `two hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[301] = 'three hundred one';
    } else {
        englishNumbers[300 + i] = `three hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[401] = 'four hundred one';
    } else {
        englishNumbers[400 + i] = `four hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[501] = 'five hundred one';
    } else {
        englishNumbers[500 + i] = `five hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[601] = 'six hundred one';
    } else {
        englishNumbers[600 + i] = `six hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[701] = 'seven hundred one';
    } else {
        englishNumbers[700 + i] = `seven hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        englishNumbers[801] = 'eight hundred one';
    } else {
        englishNumbers[800 + i] = `eight hundred ${englishNumbers[i]}`;
    }
}

for (let i = 1; i < 100; i++) {
    if (i === 1) {
        englishNumbers[901] = 'nine hundred one';
    } else {
        englishNumbers[900 + i] = `nine hundred ${englishNumbers[i]}`;
    }
}

// Function to convert numbers into Hindi words
function numberToHindi(n) {
    if (hindiNumbers[n]) {
        return hindiNumbers[n];
    } else if (n < 100) {  // For numbers from 1 to 99
        const tens = Math.floor(n / 10) * 10;  // e.g., Math.floor(63 / 10) * 10 = 60
        const ones = n % 10;  // e.g., 63 % 10 = 3
        return ones !== 0 ? `${hindiNumbers[tens]} ${hindiNumbers[ones]}` : hindiNumbers[tens];
    } else if (n < 200) {  // For numbers from 101 to 199
        return hindiNumbers[n];
    } else if (n < 250) {  // For numbers from 201 to 249
        return hindiNumbers[n];
    } else {
        return n.toString();  // Return as-is for unsupported numbers
    }
}

// Function to convert numbers into English words
function numberToEnglish(n) {
    if (englishNumbers[n]) {
        return englishNumbers[n];
    } else if (n < 100) {  // For numbers from 1 to 99
        const tens = Math.floor(n / 10) * 10;  // e.g., Math.floor(63 / 10) * 10 = 60
        const ones = n % 10;  // e.g., 63 % 10 = 3
        return ones !== 0 ? `${englishNumbers[tens]} ${englishNumbers[ones]}` : englishNumbers[tens];
    } else if (n < 200) {  // For numbers from 101 to 199
        return englishNumbers[n];
    } else if (n < 250) {  // For numbers from 201 to 249
        return englishNumbers[n];
    } else {
        return n.toString();  // Return as-is for unsupported numbers
    }
}
document.getElementById('logo').addEventListener('click', function() {
    location.reload(); // Refresh the page
});


// Generate multiplication table
function generateTable() {
    const number = parseInt(document.getElementById('number').value, 10);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (isNaN(number) || number < 1) {
        resultDiv.innerHTML = 'Please enter a valid number greater than 0.';
        return;
    }

    let resultHtml = '';
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const resultInHindi = numberToHindi(result);
        const resultInEnglish = numberToEnglish(result);
        resultHtml += `${number} x ${i} = ${result}  (${resultInHindi})  (${resultInEnglish})<br>`;
    }

    resultDiv.innerHTML = resultHtml;
}
