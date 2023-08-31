//ejercio3 
//whiles
//numero 1
/*let usuario = parseFloat(prompt(`introduce un numero`));
console.log(usuario);
let empezamos = 1;


while (empezamos<=usuario) {
    if (empezamos%5===0) {
        console.log(`${empezamos} , ${empezamos%5===0} hasta ${usuario}`)
        
    }
    empezamos++;
}*/

//numero 2
/*let usuario = parseFloat(prompt('introduce un numero'));
let usuario2 = parseFloat(prompt('introduce un  otro numero'));
console.log(usuario);
console.log(usuario2);
let empezamos = 1 ;

while (empezamos <= 50) {
    let loteria=Math.floor(Math.random()*50)+1;
    console.log(`numero de loteria ${loteria}` );

        if (usuario===loteria) {
            alert(` GANASTE! LA LOTERIA CON ${usuario}`);
            console.log(`GANASTE! con ${loteria&&usuario}`);
            
        } else if(usuario2===loteria) {
            alert(`GANASTE! LA LOTERIA CON ${loteria}`);
            console.log(`ganaste con ${usuario2===loteria}`)
        }else{
            alert('PERDISTE!, sigue intentando, apretando  la tecla " ENTER " PARTICIPAS CON LOS MISMOS NUMER0S')
            console.log(`PERDISTE!, sigue intentando, apretando  la tecla " ENTER " PARTICIPAS CON LOS MISMOS NUMEROS`)
        }
        
empezamos++;
}*/

//numero 3
/*let numberCapture = [];

while (true) {
    let number = parseFloat(prompt('mete un numero'))  
    if (number === 0) {
        break;
    }
 numberCapture.push(number);   
}
console.log(numberCapture);*/


//numero 4
/*let capWords = [];
while (true) {
    let words = prompt('intruduce palabras  y/o aprieta la tecla ENTER para terminar ');
    if (words === '') {
        alert( capWords)
        break;
        
    }
    capWords.push(words)
}*/

//numero 5 

/*while (true) {
    let user = prompt(`introduce un dia de la semana`)
    if (user === 'lunes') {
        alert ('Es principio de semana, No voy a trabajar!');
        
    } else  if (user === 'martes'){
        alert ('Ni te cases ni te embarques, pa´q voy a arriesgarme, No voy a trabajar!');
    
    }if (user === 'miercoles') {
        alert('Se casa la patrona,hay que pachangona, No voy a trabajar!');
        
    } else if (user=== 'jueves') {
        alert('Estoy muy desvelado, me siento hasta mareado, No voy a trabajar!');
            
    }if (user==='viernes') {
        alert('Muere Jesucristo, donde se ha visto, No voy a trabajar!');
        
    } else if(user==='sabado') {
        alert('Trabajo medio día y por medio día, No voy a trabajar!');

    }if (user==='domingo') {
        alert('Ve a Descansar')
        break;    
    }     
}*/
