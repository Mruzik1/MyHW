var strFile = prompt('Введите название файла:', '');
var arrFile = strFile.split('');
var arrType = [];
var c = 0;

for (var i = arrFile.length - 1; i >= 0; i--) {
    arrType[c] = arrFile[i];
    if (arrFile[i] == '.') break;
    c++;
}

var strType = arrType.reverse();
alert('Тип вашего файла - ' + strType.join(''));