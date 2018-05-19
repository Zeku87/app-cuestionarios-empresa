import React, {Component} from 'react';
import '../css/App.css';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            totalTemas:12
        };
    }

    render(){

        let tema = [];

        for( let i = 0; i < this.state.totalTemas; ++i){
            tema.push(
            <div className="card col-sm-6 col-md-3 col-lg-2 col-xl-2" key={i}>
                <h3>Tema {i+1}</h3>
                <p>Última puntuación: n/a</p>
                <button type="button" className="btn btn-info">Hacer test</button>
            </div>
             );
        }


        return (
            <div className="container">
                <h4 className="hero">Bienvenida Estefanía</h4>
                <div className="row">
                    { tema.map(e => e) }
                </div>
            </div>
        );    
    }
}

