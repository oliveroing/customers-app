import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('handleOnClick');
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            <img src={require('./../img/imagenCurso.png')} alt='Imagen del curso'/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>  
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }

};

export default HomeContainer;