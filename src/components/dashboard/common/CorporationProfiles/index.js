import React, { useEffect, useState } from 'react';
import { apiAxios, config } from '../../../../config/api';
import FaqRow from '../../Admin/FAQ/FaqRow';
import './style.css';


export const CorporationProfiles = ({ props }) => {

    const { idCorporation } = props.match.params;

    const [corporation, saveCorporation] = useState({});
    const [contactInfo, saveContactInfo] = useState([]);
    const [faq, saveFaq] = useState([]);
 
    useEffect(() => {

        const getCorporationData = async () => {

            const CorporationInfo = await apiAxios(`/corporation/${idCorporation}`);
            const Contactcorporation = await apiAxios(`/corporation/${idCorporation}/contact`);

            saveCorporation(CorporationInfo.data.corporation);
            saveContactInfo(Contactcorporation.data.contactCorporation);

        }

        getCorporationData();

        const Faqs = async () => {

            try {

                const { data } = await apiAxios.get(`/corporation/${idCorporation}/FAQ`);
                
                saveFaq(data.faq);

            } catch (error) {
                console.log(error.request);
            }
        }

        Faqs();

    }, []);
console.log(faq);
    return (
        <main>
            <div className="container">
                <div className="main-body">
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav>

                    <div className="row gutters-sm">
                        <div className="col-md-5 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={corporation.image ? `${config.RESOURCES_API_URL}/${corporation.image}` : `https://conceptodefinicion.de/wp-content/uploads/2019/08/Empresa-.jpg`} alt="Corporation Profile" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{corporation.name}</h4>
                                            <p className="text-secondary mb-1">{corporation.description}</p>
                                            <button className="btn btn-primary">Crear Ticket</button>
                                            <button className="btn btn-outline-primary">Mis Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                        <span className="text-secondary">https://airtek.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                        <span className="text-secondary">@airtek</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                        <span className="text-secondary">airtek</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                        <span className="text-secondary">airtek</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h2 className="text-center">Preguntas frecuentes</h2>
                                    <div className="questions">
                                        <div className="row">
                                        <div className="col-sm-12">
                                        <tbody>
                                    {faq.map(faq => (
                                        <FaqRow
                                            key={faq._id}
                                            faq={faq} />
                                    ))}
                                </tbody>
                                            </div>
                                            <div className="col-sm-12">
                                                <h4 className="mb-0">Actualizar tu información de cuenta es fácil</h4>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 text-secondary">
                                                <p>Para actualizar la información de pago, entra a la sección de Administración de Cuenta desde un navegador web
                                                    de un computador y sigue las indicaciones </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="questions">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h4 className="mb-0">Métodos de pago para Cantv</h4>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 text-secondary">
                                                <p>Conocer los métodos de pago para DIRECTV GO es estar un paso adelante en tu programación mensual.
                                                    Recuerda que los cobros de DIRECTV GO serán facturados al comienzo de cada ciclo de facturación y serán tomados del método de pago establecido cuando configuras tu cuenta.
                                                    Métodos de pago aceptados:
                                                    Solo puedes registrarte con tarjetas de crédito Mastercard o Visa (nacionales que acepten cobros internacionales). </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>

    )
}