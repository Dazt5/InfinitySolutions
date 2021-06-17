import React from 'react';

export const CorporationForm = () => {

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra la empresa</div>
                <form>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nombre de la empresa</span>
                            <input type="text" name="name" placeholder="Cantv C.A" required />
                        </div>
                        <div className="input-box">
                            <span className="details">RIF</span>
                            <input type="text" name="rif" placeholder="J-12345678" defaultValue="J-" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Descripción</span>
                            <select required name="description" >
                                <option defaultValue value="">--- Seleccione ----</option>
                                <option value="Telecomunicaciones">Telecomunicaciónes</option>
                                <option value="Televisión">Televisión</option>
                                <option value="Telefonía" >Telefonía</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-box">
                        <span className="details">Imagen representativa o Logo </span>
                        <input type="file" required />
                        <small className="input-requeriment">Solo PNG y JPG</small>
                    </div>
                    <div className="button-box">
                        <div className="button-form">
                            <input type="submit" value="Registrar" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}