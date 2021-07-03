import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import gravatar from '../../../../utils/gravatar';
import './style.css';

export const TicketDetail = ({ props }) => {

    const { idTicket } = props.match.params;

    const [ticket, saveTicket] = useState({});

    useEffect(() => {

        const getTicket = async () => {

            const request = await apiAxios.get(`/ticket/${idTicket}`);

            console.log(request)

            saveTicket()
        }
        getTicket();
    }, [])

    console.log(ticket);

    return (
        <main className="body ticket-details">
            <div className="container-fluid mt-100">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card ticket-detail mb-4">
                            <div className="card-header ticket-detail">
                                <div className="media flex-wrap w-100 align-items-center"> <img src="https://i.imgur.com/iNmBizf.jpg" className="d-block ui-w-40 rounded-circle" alt="" />
                                    <div className="media-body ml-3"> { }<a href="" data-abc="true"> </a>
                                    </div>
                                    <div className="text-muted small ml-3">
                                        <div>Member since <strong>01/1/2019</strong></div>
                                        <div><strong>134</strong> posts</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body ticket-detail">
                                <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days. With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business. </p>
                                <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days. With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business. </p>
                            </div>
                            <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                <div className="px-4 pt-3"> <a href="" className="text-muted d-inline-flex align-items-center align-middle" data-abc="true"> <i className="fa fa-heart text-danger"></i>&nbsp; <span className="align-middle">445</span> </a> <span className="text-muted d-inline-flex align-items-center align-middle ml-4"> <i className="fa fa-eye text-muted fsize-3"></i>&nbsp; <span className="align-middle">14532</span> </span> </div>
                                <div className="px-4 pt-3"> <button type="button" className="btn btn-primary"><i className="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card ticket-detail mb-4">
                            <div className="container-form">
                                <div className="title">Cambiar estado</div>
                                <form>
                                    <div className="input-box">

                                        <span>Seleccione una estado</span>
                                        <select name="corporation" >
                                            <option value=""> Seleccione una corporación</option>
                                        </select>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}