var str = prompt('Введите что-то на подобие border-left-width', 'border-left-width');
var strArr = str.split('');
var strTrue = [];
var c = 0;

for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] == '-') continue;
    else if (strArr[i-1] == '-') strTrue[c] = strArr[i].toUpperCase();
    else strTrue[c] = strArr[i];
    c++;
}

alert(strTrue.join('')); // Сделал универсальный конвертатор)