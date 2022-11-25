import React from "react";
import Header from "../../components/Header";
import './index.css'
import { Button } from "react-bootstrap";

const register = () => {
    return (
        
        <div className="container">
            <Header/>
            <div className="container-form">
                <form className="form-container">
                    <div className="form-input">
                        <label>
                            Nome:
                            <input type="text"/>
                        </label><br/><br/>
                        <label>
                            Nome:
                            <input type="text"/>
                        </label><br/><br/>
                        <label py-2>
                            Nome:
                            <input mb-5 type="text"/>
                        </label><br/><br/>
                        <label>
                            Nome:
                            <input type="text"/>
                        </label><br/><br/>
                    </div>
                    <Button placeholder="Cadastrar" color="red" /> 
                </form>
            </div>
        </div>
    )
}

export default register;