import React, { Component } from 'react';
import classNames from 'classnames';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import './Login.css';

/* const Button = ({ onClick, className = '', children }) =>

    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>
 */

var styles = {
    foo: {      
        background: 'rgb(0, 142, 173)', 
        padding: '7px 15px', 
        borderRadius: '4px', 
        //border: '1px solid rgb(26, 117, 152)', 
        borderImage: 'none', 
        color: 'rgb(255, 255, 255)', 
        fontWeight: 'bold',    
      } 
};

class Button extends Component {
    render() {
        const { onClick='',
            className = '',
            children
        } = this.props;
        return (
            <button style={styles.foo}
                onClick={onClick}
                className={className}
                type="button"
            >
                {children}
            </button>
        );
    }
}
export default Button;