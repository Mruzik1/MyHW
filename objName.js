var obj = {
    name: 'John',
    lastname: 'Nejohnow',
    age: 21,
    city: 'NY'
}
var str = prompt('Введите значение:', '');

for (var p in obj) {
    if (str == p) console.log(obj[p]);
    else if (obj[str] == undefined) {
        console.error(false);
        break;
    }
}
