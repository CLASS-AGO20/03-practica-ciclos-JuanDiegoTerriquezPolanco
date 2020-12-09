export default class App {    
    factorial(numero){
        let resultado=1;
        for(let i=numero;i>0;i--){
            resultado=resultado*i;
            console.log(resultado);
        }
        return resultado;
    }
    convertirAString(numero){
        let cadena="",i=1;
        while(i <= numero){
            cadena = cadena + "*";
            i++;
            console.log(cadena);
        }
        return cadena;
    }
}

let app = new App();
app.factorial(5);
app.convertirAString(5);
