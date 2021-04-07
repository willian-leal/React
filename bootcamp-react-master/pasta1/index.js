var container = document.getElementById("app");

function Contador(props){
    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        // numero++
        // numero = numero + 1
        console.log("somei e ficou =" + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("subtrai e ficou =" + numero)
    }
    
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App(){
    return(
        <React.Fragment>
            <h1>Vote no seu time preferido!</h1>
            <Contador titulo="Flamego"/>
            <Contador titulo="Resende"/>
            <Contador titulo="Ituano"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);

// 1. PascalCase -> Componentes em React seguem esse padrão
// 2. camelCase -> funções em JavaScript
// 3. Componentes só podem retornar um elemento por Componente
// saída => aninhar em React.Fragment
// 4. Podemos criar propriedades para nossos Componentes (props)