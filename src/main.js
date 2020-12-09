export default class App {    
    factorial(numero){
        let resultado=1;
        for(let i=numero;i>0;i--){
            resultado=resultado*i;
            console.log(resultado);
        }
        return resultado;
    }
}

let app = new App();
app.factorial(5);
