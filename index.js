var container = window.document.getElementById("app");

// var titulo = document.createElement("h1");
// titulo.innerHTML = "Título inserido por JavaScript";
// container.appendChild(titulo);

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
    }

    function subtrair() {
        setNumero(numero - 1);
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="CR7" />
            <Contador titulo="Messi" />
            <Contador titulo="Neymar Jr" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,null,null), container);
// ReactDOM.render(App(), container);