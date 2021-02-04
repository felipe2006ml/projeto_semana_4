const numSerie = document.getElementById('num-serie')

numSerie.addEventListener('input', function() {
    var tmp = numSerie.value.replaceAll('.', '');
    var str = tmp.split("");
    var newStr = '';
    
    str.unshift(0);

    for( let i = 1; i < str.length; i++ ){
        if(i > 0 && i%3 == 0){
            newStr += str[i] + '.' ;
        }
        else if( i == 3){
            newStr += str[i] + '.';
        }
        else{
            newStr += str[i];
        }
        
    }
    numSerie.value = newStr;

    
})

numSerie.addEventListener('input', minhaFunc)


function minhaFunc(e) {
    console.log(isNaN(e.data))
    if(isNaN(e.data) == true ) {
        
        e.target.value = e.target.value.replace(e.data,'')
    }
}