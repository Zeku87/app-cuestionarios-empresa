import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component{
    render(){
        return (
            <div>
                <h1>Bienvenida Estefanía</h1>
                <h4>En esta app podrás practicar los cuestionarios de la asignatura de 
                    organización de empresa. <b>¡Un beso guapa! :)</b>
                </h4>
            </div>
        );    
    }
}

ReactDom.render( <App/>, document.getElementById('root'));