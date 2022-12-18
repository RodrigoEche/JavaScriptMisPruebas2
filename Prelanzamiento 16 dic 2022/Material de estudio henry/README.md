Trabajamos sobre el index.js
Antes de comenzar, vamos a la consola y corremos npm start

Primero nos aseguramos de importar react y reactDOM

Vamos a guardar el lugar donde queremos renderizar nuestro
componente en una variable, para que el codigo quede mas limpio

Tenemos que saber que SIEMPRE, los componentes en react, deben
ser nombrados con su primera letra en MAYUSCULA asi como lo
haciamos cuando creabamos objetos con classes.

```javascript
import React from "react";
import ReactDOM from "react-dom";

//Creamos un componente funcional de tipo flecha

const Hola = () => {
  return (
    <div>
      <h1>HOLA MUNDO</h1>
    </div>
  );
};

// Renderizamos el componente

const root = document.getElementById("root");

ReactDOM.render(<Hola />, root);
```

Ahora vamos a anidar un componente, para ver como se trabaja
con los childrens o hijos de nuestros componentes, ya que no
React no los renderiza si primero no especificamos en que lugar
queremos que lo haga

seguimos trabajando sobre index.js

Cada vez que querramos definir un componente de tipo clase,
debemos hacerlo como cuando creabamos una clases trabajando con
objetos, pero debemos aclarar que esta clase que creamos, "extiende"
de React.Component, basicamente lo que hacemos acá es crear esta
nueva clase, ligandola a React.Component, para tener todas las
funciones que esta hereda

Como lo es por ejemplo, render(){} que es el metodo que utilizamos
para mostrar informacion en pantalla.

Cada vez que querramos renderizar un componente dentro de otro, o
querramos utilizar un valor que ingresemos en una etiqueta, debemos
de utilizar la propiedad "children" que viene dentro de "props"

En este primer caso, nos va a permitir renderizar nuestro componente
saludo, dentro de nuestro componente Contenedor.

```javascript
import React from "react";
import ReactDOM from "react-dom";

//Creamos un componente funcional de tipo flecha

const Saludo = () => {
  return (
    <div>
      <h1>HOLA MUNDO</h1>
    </div>
  );
};

// Creamos un componente de tipo clase

class Contenedor extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

const root = document.getElementById("root");

ReactDOM.render(
  <Contenedor>
    <Saludo />
  </Contenedor>,
  root
);
```

Ahora vamos a hacer lo mismo pero con dos componentes funcionales
Para poder hacer uso del props.children, lo que tenemos que hacer
es especificarle al componente Contenedor que vamos a recibir "props"

```javascript
import React from "react";
import ReactDOM from "react-dom";

//Creamos un componente funcional de tipo flecha

const Saludo = () => {
  return (
    <div>
      <h1>HOLA MUNDO</h1>
    </div>
  );
};

// Creamos un componente funcional tambien de tipo flecha

const Contenedor = (props) => {
  return <div>{props.children}</div>;
};

const root = document.getElementById("root");

ReactDOM.render(
  <Contenedor>
    <Saludo />
  </Contenedor>,
  root
);
```

Tambien podemos utilizar los childrens o texto que ingresemos
entre la etiqueta de nuestro componente de la siguiente manera
y mostrarlos en nuestro contenedor

```javascript
import React from "react";
import ReactDOM from "react-dom";

//Creamos un componente funcional de tipo flecha

const Saludo = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

// Creamos un componente funcional tambien de tipo flecha

const Contenedor = (props) => {
  return <div>{props.children}</div>;
};

const root = document.getElementById("root");

ReactDOM.render(
  <Contenedor>
    <Saludo>Hola Alan</Saludo>
  </Contenedor>,
  root
);
```

Estamos tomando el texto ingresado entre las tags de nuestro
componente saludo, como children de saludo, lo especificamos
como argumento en nuestra funcion/componente Saludo y posteriormente
lo renderizamos

De la siguiente manera vemos como podemos seguir anidando componentes
en React, pero esta vez vamos a verlo como un archivo separado

Creamos una carpeta llamada "components" dentro de la carpeta "src"
y creamos un archivo llamado "Button.js" siempre tenemos que crear
estos archivos con su primera letra en mayuscula, ya que de esta
manera se trabajan los componentes

Para poder usar este componente en otro archivo de javascript debemos
exportarlo, ya que sabemos que los componentes tienen que seguir siempre
el principio de responsabilidad unica, podemos crear un archivo por cada
componente, lo que va a hacer mas simple la tarea a la hora de la
exportacion, podemos directamente exportarlo con:
export default NombreDelComponente

```javascript
const Button = (props) => {
  return <button>{props.children}</button>;
};

export default Button;
```

Ya tenemos nuestro boton, que va a recibir un children, para aplicarlo
en su etiqueta, ahora vamos a importarlo en nuestro index.js
para importarlo, lo hacemos de la misma manera que importamos React en
nuestro proyecto.

```javascript
import Button from "./components/button";
```

Al haber aclarado que nos iba a venir algo como children, podemos nombrar
el boton simplemente ingresando texto dentro de los tags cuando llamemos
al componente, de la siguiente manera

```javascript
<Button>Hola soy un boton</Button>
```

Un ejemplo de como podría quedar dentro de nuestro codigo:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";

//Creamos un componente funcional de tipo flecha

const Saludo = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <Button>Hola soy un Boton</Button>
    </div>
  );
};

// Creamos un componente funcional tambien de tipo flecha

const Contenedor = (props) => {
  return <div>{props.children}</div>;
};

const root = document.getElementById("root");

ReactDOM.render(
  <Contenedor>
    <Saludo>Hola Alan</Saludo>
  </Contenedor>,
  root
);
```

Ahora vamos a probar darle un poco de funcionalidad a nuestro
boton usando un manejador de eventos que nos va a permitir ejecutar
una funcion cuando hagamos click sobre el boton, el eventListener
que vamos a usar se llama "onClick"
Para darle un poco mas de onda a nuestro codigo, y para ir practicando
el como imbuir codigo javascript dentro de las strings, vamos a
utilizar las comillas invertidas para concatenar texto y variables
de JS

```javascript
const nombre = "alan";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        alert(`Hola ${nombre}`);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
```

Tambien podemos pasar funciones como argumento de un componente
a otro de la siguiente manera, primero creamos la funcion, luego
la pasamos como argumento dentro del tag en el que querramos que
se incluya, esto hará que lo tome como una prop de "props" para
luego poder acceder a ella

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";

const unaAlerta = () => {
  alert("Hola Alan!");
};

const Saludo = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <Button unaAlerta={unaAlerta}>Hola soy un Boton</Button>
    </div>
  );
};

// Creamos un componente funcional tambien de tipo flecha

const Contenedor = (props) => {
  return <div>{props.children}</div>;
};

const root = document.getElementById("root");

ReactDOM.render(
  <Contenedor>
    <Saludo>Hola Alan</Saludo>
  </Contenedor>,
  root
);
```

Button.js

```javascript
const Button = (props) => {
  return <button onClick={props.unaAlerta}>{props.children}</button>;
};

export default Button;
```

Vamos a ver otro ejemplo del como importar/exportar y usar props
como argumento de componentes

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import UnComponente from "./components/UnComponente";

const root = document.getElementById("root");

ReactDOM.render(<UnComponente title="Hola esto es un mensaje" />, root);
```

Cuando llamamos a UnComponente en index.js para su renderizado, le
estamos pasando "title" como prop/argumento

Para despues poder usar ese argumento dentro de nuestro componente
en otro archivo.

UnComponente.js

```javascript
const UnComponente = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default UnComponente;
```

Vamos a ver ahora como podemos hacer un renderizado de por ejemplo
los elementos dentro de un Array que contiene nombres de peliculas
en su interior utilizando el prototipo de arreglos .map

Cuando hacemos el mapeo, preguntamos si el array existe, de esta manera
nos aseguramos que en el supuesto caso que la variable que definimos

```javascript
import { v4 as uuidv4 } from "uuid";

const peliculas = ["Lord Of The Rings", "Star Wars", "Back from the Future"];

const UnComponente = () => {
  return (
    <div>
      {peliculas?.map((pelicula) => (
        <h1 key={uuidv4()}>{pelicula}</h1>
      ))}
    </div>
  );
};

export default UnComponente;
```

Aca vemos que por cada elemento del array, vamos a renderizar un <h1>
con el nombre de la pelicula en cuestion.
Cuando estamos trabajando con un array, necesitamos que cada elemento
tenga su propio ID unico para esto vamos a instalar una dependencia
que nos va a ayudar a asignar un ID a cada elemento, generado
automaticamente para cada uno.
La dependencia que vamos a utilizar va a ser UUID
Como cualquier otra dependencia hay que importarla y luego se utiliza
como si fuese un componente/funcion cualquiera.

https://www.npmjs.com/package/react-uuid

Lo instalamos en la consola:

npm i react-uuid

y la importamos de la siguiente manera:

import { v4 as uuidv4} from "uuid"

**WEBPACK**

Webpack es la extension que se encarga de compilar nuestro codigo
JSX en codigo de JS puro, para configurarlo lo hacemos de la siguiente
manera
dentro de webpack.config.js:

```javascript

module.exports = {
  entry: "./app.js" // Aca definimos el archivo que se renderiza
  output: {
    path: __dirname + "/dist", // Carpeta contenedora de nuestro bundle
    filename: "bundle.js" // Nombre del bundle
  },
  module: {
    rules:[ //reglas, archivos que queremos omitir, que loader vamos a usar
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                  }
            }
        }
    ]
  }
}

```

Para instalar webpack lo hacemos desde la consola de la siguiente manera:

Primero instalamos webpack:

npm i -D webpack webpack-cli

webpack es la base de webpack, el bundler, webpack-cli nos habilita los
comandos en la consola

Luego instalamos React:

npm i react react-dom

react es la libreria de react, react-dom es la libreria de react que nos
permite interactuar con el DOM

Luego instalamos babel y sus dependencias

npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

@babel/core es la base de babel, el compilador de JS
@babel/preset-env es lo que le permite a babel compilar en ECMAS6
@babel/preset-react es lo que le permite a babel compilar jsx
babel-loader es lo que le permite a webpack utilizar babel

Podemos saltearnos esto creando directamente nuestro proyecto con:
npx create-react-app nuestro-proyecto

**_PropTypes_**

Con los proptypes podemos hacer comprobaciones directas sobre los datos
que ingresamos por props

---

---

---

\***\*ACLARAR DESPUES\*\*\*\***

---

---

---

**_Estados_**

Los estados dentro de un componente no son mas que valores que podemos
manipular, variables que utilizamos a lo largo de nuestro codigo para
hacer determinadas funciones, los componentes de tipo clase, tienen esta
funcion integrada al poseer el metodo constructor, cuando querramos utilizar
estados en un componente de clase, primero debemos inicializar el constructor
y dentro del mismo primero, inciar el metodo "super", que incializa react
components y nos permite recibir props, y luego definir el estado inicial
Una vez que hacemos esto, ya podemos leer y o modificar el estado que
hayamos creado, pero hay un pero, estamos trabajando con un componente tipo
clase, así que no tenemos que olvidarnos del uso del indentificador "this"
por ejemplo, si nosotros definimos funciones clasicas, para que estas puedan
interactuar con nuestros estados, estas deben estar bindeadas en el
constructor, el porque de esto es sencillo, cuando nosotros llamamos a la
funcion como vemos en el ejemplo, el this, va a apuntar al contexto de
ejecucion desde donde esta siendo ejecutada, entonces puede o no existir
el estado en ese entorno de ejecucion, es como si estuviesemos intentando
acceder a una variable definida en un componente hijo, desde un componente
padre, la funcion no va a encontrar el estado al que estamos apuntando, para
remediar este "error" lo unico que hay que hacer es bindear la funcion que
hayamos creado, dentro del constructor

```javascript
class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
    this.resetear = this.resetear.bind(this);
  }

  incrementar() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementar() {
    this.setState({ counter: this.state.counter - 1 });
  }

  resetear() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrementar}>-</button>
        <span>El valor del contador es: {this.state.counter}</span>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.resetear}>Reset</button>
      </div>
    );
  }
}
```

Tambien podemos, de manera más limpia y rapida, utilizar funciones
tipo flecha para modificar nuestros estados, ya que este tipo de funciones
toma el contexto de ejecucion desde donde esta pocisionada en nuestro
codigo

```javascript
class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementar = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementar = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  resetear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrementar}>-</button>
        <span>El valor del contador es: {this.state.counter}</span>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.resetear}>Reset</button>
      </div>
    );
  }
}
```

Algo que tenemos que tener en cuenta, es que cada una de estas funciones,
de la manera en la que las hemos escrito, pueden hacer solo una modificacion
a nuestro estado a la vez, por ejemplo, en caso que queramos aumentar de dos
en dos nuestro contador, no podremos hacer lo siguiente:

```javascript
incrementar = () => {
  this.setState({ counter: this.state.counter + 1 });
  this.setState({ counter: this.state.counter + 1 });
};
```

Ya que el this.state.counter se lee cada vez que se llama a la funcion, en nuestro caso inicial, en el que el counter tiene un valor de cero, se comportaria
de la siguiente manera, lee el this.state.counter, le asigna el valor que ya
posee +1, o sea, 0 + 1, en el siguiente caso, vuelve a leer el estado, y vuelve
a sumarle 1, pero el this.state.counter, nunca dejó de ser 0, ya que los cambios
recién son aplicados cuando el codigo de la función incrementar se acabe, esto
podemos solucionarlo simplemente llamando a una funcion anonima dentro del
argumento de this.setState() de la siguiente manera
Saber esto nos va a ser util en los casos en los que querramos hacer mas de una
modificación a un estado dentro de la misma funcion, en un contador no parece
demasiado util, pero tarde o temprano nos vamos a encontrar con funciones de
mayor complejidad que van a requerir el uso de estas tecnicas.

```javascript
incrementar = () => {
  this.setState((state) => ({ counter: state.counter + 1 }));
  this.setState((state) => ({ counter: state.counter + 1 }));
};
```

Ahora dentro del setState(), tenemos una funcion de flecha que toma el estado
actual, y aplica el cambio directamente cada vez que es llamada, agregamos los
paréntesis para tener un return implicito, o sea que, se va a leer nuestra linea
de codigo y se van a aplicar los cambios automaticamente.
Ya no debemos llamar el .this en counter, ya que estamos tomando el estado
como parametro, por lo que ya no es necesario decirle hacia donde debe apuntar
o cual estado es el tiene que leer/modificar

Cuando utilizamos un componente de tipo clase, tenemos que recordar que estos
solo pueden manejar un objeto de estado a la vez, este puede tener muchos valores
dentro, pero solo un this.state, no podemos inicializar otro objeto dentro del
mismo componente

Algo para recordar, estamos trabajando con clases, asi que las funciones se
declaran como si fuesen metodos, no se permite usar const para declarar una
funcion dentro de una clase, podemos crearla de la manera clasica, con el
function, o con sintaxis tipo flecha, pero si definimos la funcion dentro de
una variable, nos va a arrojar un error!

**_HOOKS_**

Los hooks se introdujeron en React para que podamos tener la misma funcionalidad
que teniamos con los componentes de clase, con los componentes funcionales,
basicamente, nos permiten manejar estados, cosa que antes no se podía, para
utilizarlos, lo primero que tenemos que hacer es importarlos, vamos a reescribir
el codigo de nuestro contador, pero ahora vamos a hacer uso de componentes
funcionales

Como ven, lo primero que tuvimos que hacer fue importar la funcion "useState"
que nos permite manejar estados en componentes funcionales, creamos un array
que contiene nuestro estado, y una funcion que se encarga de modificar ese
estado, y a esto lo igualamos a la funcion useState, y le pasamos como argumento
lo que queramos que sea nuestro estado inicial

```javascript
import React from "react";
import { useState } from "react";

const UnComponente = () => {
  return (
    <div>
      <Contador />
    </div>
  );
};

function Contador() {
  const [state, setState] = useState({ counter: 0 });

  const decrementar = () => {
    setState({ counter: state.counter - 1 });
  };

  function incrementar() {
    setState({ counter: state.counter + 1 });
  }

  function resetear() {
    setState({ counter: 0 });
  }

  return (
    <div>
      <span>El valor del contador es: {state.counter}</span>
      <button onClick={decrementar}> - </button>
      <button onClick={incrementar}> + </button>
      <button onClick={resetear}> Reset </button>
    </div>
  );
}

export default UnComponente;
```

Con este tipo de sintaxis, tampoco podemos modificar dos veces el mismo estado
dentro de una función, pero podemos solucionarlo de la misma manera que lo
hicimos con los componentes de clase:

```javascript
function incrementar() {
  setState((state) => ({ counter: state.counter + 1 }));
  setState((state) => ({ counter: state.counter + 1 }));
}
```

Otra cosa que nos permite el uso de los componentes funcionales, es que podemos
tratar a los estados como una variable simple, no necesariamente tiene que ser
un objeto, vamos a verlo de la siguiente manera

```javascript
function Contador() {
  const [contador, setState] = useState(0);

  const decrementar = () => {
    setState(contador - 1);
  };

  function incrementar() {
    setState(contador + 1);
  }

  function resetear() {
    setState(0);
  }

  return (
    <div>
      <span>El valor del contador es: {contador}</span>
      <button onClick={decrementar}> - </button>
      <button onClick={incrementar}> + </button>
      <button onClick={resetear}> Reset </button>
    </div>
  );
}
```

Los componentes funcionales, nos permiten usar todos los estados que queramos
siempre y cuando los definamos al comienzo como lo hicimos con el contador,
siempre y cuando no repitamos los nombres, podemos definir cuantos necesitemos.

**_ANIDAR ESTADOS_**

Cuando tenemos varios estados, si bien podemos definirlos uno a uno, de esta
manera:

```js
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
}
```

pero tambien podemos hacerlo de manera mas eficiente, anidando los estados en uno
solo, devolviendo un objeto con tantas propiedades como estados quisieramos manejar,
esto se puede hacer de la siguiente manera:

```js
function Formulario() {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    segundoNombre: "",
  });
}
```

Luego podremos acceder a estos valores con dot notation o bracket notation, como con
cualquier otro objeto.

**_Ciclos de vida_**

Nuestros componentes tienen un determinado ciclo de vida, cuando se montan,
cuando se modifican y cuando se desmontan, ya vimos como montar un componente,
como cambiar sus estados, o sea, como modificarlos, y ahora vamos a ver como,
poder montar o desmontar un componente a voluntad.

Primero vamos a ver como funciona esto con componentes de clase, y que nos
permite hacer
En el componente "UnComponente" creamos un estado para mostrar u ocultar nuestro
componente contador de clase, para eso hacemos uso de useState, ya que es un
componente funcional, condicionamos la etiqueta del boton, para que cambie
dependiendo de si nuestro componente ContadorClase esta montado o no, y el
montaje o no de nuestro ContadorClase va a depender de la comprobación entre
nuestro estado "mount" y el propio contador, obviamente, nuestro contador al
existir, ya es true, asi que el que se muestre depende pura y exclusivamente
del valor de mount, que controlamos con el onClick del boton que creamos

```javascript
import React from "react";
import { useState } from "react";

const UnComponente = () => {
  const [mount, setMount] = useState(false);

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? "Ocultar Componente" : "Mostrar Componente"}
      </button>
      {mount && <ContadorClase />}
    </div>
  );
};

class ContadorClase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <span>El valor del contador es: {this.state.contador}</span>
        <div>
          <button onClick={this.incrementar}> incrementar </button>
          <button onClick={this.decrementar}> decrementar </button>
        </div>
      </div>
    );
  }
}
export default UnComponente;
```

Una de las ventajas de trabajar con componentes tipo clase, es que nos permite
utilizar todos los metodos heredados de React.Component, y vamos a poder realizar
accciones y ejecutar funciones, dependiendo del estado de nuestro componente,
vamos a ver algunos de ellos y que nos permiten hacer, cabe aclarar que siempre
debemos de definir estos metodos ANTES del metodo render, ya que este ejecuta lo que tiene dentro y sale de la ejecución

```javascript
    componentDidMount(){
        console.log("el componente se montó")
    }

    componentDidUpdate(){
        console.log(`el estado del componente sufrio cambios, ahora tiene un valor de ${this.state.contador}`)
    }

    componentWillUnmount(){
        console.log("el componente se desmontó")
    }
```

Este ejemplo es simple, pero nos da la idea de lo que podemos llegar a hacer con
nuestros componentes, podemos por ejemplo, solicitar informacion o conectarnos a
una API cuando el componente se monte, mostrar informacion en pantalla en caso
que cambie, o enviar informacion a un backend en caso que se desmonte, ya iremos
viendo con mas profundidad este tipo de funciones con el tiempo.

Ahora vamos a ver como hacer lo mismo, pero con componentes funcionales, para
hacerlo, debemos importar un hook, que se llama useEffect, que nos permite emular
lo que hicimos anteriormente con el componente tipo clase, pero con algunas
diferencias que ya vamos a ver

useEffect es una funcion que necesita de 2 argumentos para funcionar, el primero
es la función callback que vamos a ejecutar, y el segundo, es el valor al que
queremos suscribirnos por asi decirlo

```javascript
useEffect(() => {
  console.log("se monto el componente");
}, []);

useEffect(() => {
  console.log(`Se modifico el estado del componente, 
      ahora su valor es ${estado}`);
}, [estado]);

useEffect(() => {
  return () => alert("Se desmonto el componente");
}, []);
```

Utilizando APIs externas, para utilizar una api debemos hacer un fetch, esto
accede a una API y nos devuelve por ejemplo, un objeto con la informacion que
necesitamos

```javascript
fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
)
  .then((r) => r.json())
  .then((recurso) => {});
```

Fetch me devuelve una instancia de la clase response,esa instancia tiene un
metodo Json que me convierte esa respuesta en un objeto de json o un array
que yo pueda manejar
Cuando fetch nos da la respuesta, el primer .then lo que hace es convertir
esa respuesta en un objeto, que llamamos recurso en el segundo .then(), en el
segundo nosotros aplicamos una funcion al objeto que recibimos, para poder
tomar datos de el.

```javascript
function onSearch(ciudad) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };
        setCities((oldCities) => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
}
```

**_REACT Routing_**

React routing nos permite poder navegar en nuestra App como si fuese un conjunto
de paginas, en vez de un conjunto de apps, nos permite emular lo que fueron en
un tiempo las paginas de internet, una pagina main de html, conectada a muchas
otras paginas HTML, de esta manera nos permite navegar por la pagina, pudiendo
volver hacia atras o ir hacia adelante en nuestro navegador, para esto lo primero
que tenemos que hacer es instalar la dependencia de la siguiente manera:

npm i react-router-dom

y luego tenemos que importarlo en nuestro archivo de js/jsx

import { BrowserRouter } from "react-router-dom";

Algo importante a aclarar, es que el routing se puede trabajar de dos maneras
distintas, y va a depender de que tipo de componentes estemos usando, si estamos
utilizando componentes de tipo clase, debemos trabajarlo de una manera, bastante
engorrosa para ser sincero, y si estamos trabajando con componentes de tipo
funcionales, podemos usar hooks, lo que nos simplifica mucho el codigo, primero
vamos a ver como se trabaja con componentes de clase, y luego con los funcionales

Siempre que trabajemos con una aplicacion que va a hacer uso de routing, vamos a
tener que decidir que tipo de router vamos a usar, con react-routing tenemos dos
posibilidades, el <HashRouter /> http://ejemplo.com/#/index que nos agrega un
hash a la direccion de nuestra pagina, aunque es mas simple de configurar, y el
<BrowserRouter /> http://ejemplo.com/index que nos da una URL mas prolija, pero
requiere configuraciones extra dependiendo del ambiente de produccion.

---

---

---

ACLARAR MAS ADELANTE CUANDO SEPA DE QUE ESTA HABLANDO ACA XD

---

---

---

---

Vamos a ver un poco de ejemplos practicos

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
```

Vamos viendo paso a paso como funciona esto, en el metodo de renderizado, lo que
hacemos es envolver la aplicacion principal que queremos renderizar dentro las
etiquetas <BrowserRouter></BrowserRouter> con esto le damos soporte para manejar
rutas

---

**\*\*\*\***\*\*\***\*\*\*\***COMPLETAR ROUTING**\*\***\*\***\*\***\*\***\*\***\*\***\*\***

---

---

**_FORMULARIOS_**

Tenemos dos tipos de formularios, los controlados y los no controlados, hasta
ahora vimos los no controlados.

Los no controlados son aquellos que ya hemos visto con anterioridad, los forms
de HTML puro, en los que para trabajar con sus valores, tenemos que sacarlo del
DOM { event.target.value } tienen como ventaja que son mucho mas simples de
codear, pero no podemos ver en vivo lo que esta pasando en nuestro imput,
podemos reaccionar a sus valores cuando ya fueron submiteados, asi que no
podemos controlar lo que pasa mientras se ingresa, esto hace que sea mucho
menos predecible.

Los controlados, como bien dice la palabra, son aquellos sobre los que vamos
a poder ejercer algun tipo de control, los valores de los inputs, o sea, lo que
ingresemos nosotros en el input, van a estar bindeados al estado del componente
esto que quiere decir, que por cada caracter que nosotros escribamos, vamos a
cambiar el estado del componente, lo que nos va a permitir reaccionar en vivo
a esos cambios, por ejemplo, si nosotros queremos que en nuestro formulario
solo se ingresen letras, podemos ir chequeando caracter a caracter en nuestro
estado, comprobando que cada uno sea una letra, en caso contrario, podriamos
arrojar una alerta, o no permitir directamente que se ingrese otro tipo de
simbolo. Esta es la forma recomendada por react, ya que sigue sus patrones y es
mas predecible.

Con este tipo de formulario, por ejemplo, puedo desabilitar condicionalmente el
boton de submit hasta que no se cumplan las condiciones de lo que uno necesite
que haya en el form, podemos forzar que formato queremos que se submitee, se
puede guardar varios inputs en la misma variable.

En los formularios controlados, es muy importante definir una "key" unica, el
porque de esto es sencillo, si nosotros no le definimos una key unica a cada
input, react pensara que todos los inputs son iguales, lo que generara que si
por alguna razon debemos cambiar el orden de los formularios, los valores que
ingresamos no ocuparan su lugar correspondiente

```javascript
import React from "react";
import { useState } from "react";

function Formulario() {
  const [lang, setLang] = useState(true);

  console.log(lang);

  function handleLang() {
    setLang(!lang);
  }

  if (lang === true) {
    return (
      <div>
        <h1>Mi first controlled form</h1>
        <form>
          <label>Name: </label>
          <input key="nombre" type="text" placeholder="Name" />
          <label>LastName: </label>
          <input key="apellido" type="text" placeholder="Last Name" />
          <label>Initial: </label>
          <input key="inicial" type="text" placeholder="Initial second name" />
        </form>
        <hr />
        <button onClick={handleLang}>Change Language</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Mi pimer formulario controlado</h1>
        <form>
          <label>Nombre: </label>

          <input key="nombre" type="text" placeholder="Nombre" />

          <label>Inicial: </label>
          <input
            key="inicial"
            type="text"
            placeholder="Inicial Segundo Nombre"
          />

          <label>Apellido: </label>
          <input key="apellido" type="text" placeholder="Apellido" />
        </form>
        <hr />
        <button onClick={handleLang}>Change Language</button>
      </div>
    );
  }
}

export default Formulario;
```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
