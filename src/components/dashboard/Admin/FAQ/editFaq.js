import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

export const editFaqForm = ({ props }) => {
    const { idFaq } = props.match.params;

    const [Faq, saveFaq] = useState({
        title: '',
        description: ''

    });
    const [Faqs, saveFaqs] = useState({});

    const editFaq = async e => {

        e.preventDefault();

        try {
            const { data } = await apiAxios.put(`/corporation/FAQ/${idFaq}`, Faq);

            Swal.fire({
                icon: 'success',
                title: 'Agregado Correctamente',
                text: data.message
            });

        } catch (error) {
            Swal.fire(
                'Error en registro',
                error.response.data.message,
                'error'
            );

        }
    }

    const readData = e => {
        saveFaq({
            ...Faq,
            [e.target.name]: e.target.value
        });
        saveFaqs({

            ...Faqs,
            [e.target.name]: e.target.value

        });

    }

    useEffect(() => {

        const actualFaq = async () => {

            const { data } = await apiAxios.get(`/corporation/FAQ/${idFaq}`)


            saveFaqs(data.faq)


        }
        actualFaq();
    }, [])

    return (
        <main>
            <div className="container-form">

                <form
                    onSubmit={editFaq}
                >
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">FAQ</span>
                            <input
                                type="text"
                                name="title"
                                placeholder="title C.A"
                                onChange={readData}
                                value={Faqs.title}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">Descripcion</span>
                            <input
                                type="text"
                                name="description"
                                placeholder="J-12345678"
                                value={Faqs.description}
                                onChange={readData}
                                required />
                        </div>

                    </div>



                    <div className="button-box">
                        <div className="button-form">
                            <input type="submit" value="Editar" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )

}

export const EditFaqForm = withRouter(editFaqForm)