var feet = document.getElementById('feet');
var Inche = document.getElementById('Inche');

feet.addEventListener('input', function () {
    let f = this.value;
    let i = f * 12;
    Inche.value = i;

})
Inche.addEventListener('input', function () {
    let i = this.value;
    let f = i / 12;
if(!Number.isInteger(f)){
    f=f.toFixed(3);
}



    feet.value = f;

})
