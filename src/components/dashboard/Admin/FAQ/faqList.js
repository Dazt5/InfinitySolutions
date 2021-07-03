import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { apiAxios } from '../../../../config/api';
import FaqRow from './FaqRow';

export const FaqList = (props) => {
    const { idCorporation } = props.match.params;
    const [Faqs, saveFaqs] = useState([]);



    const getFaqs = async () => {

        try {

            const { data } = await apiAxios.get(`/corporation/${idCorporation}/FAQ`);

 
            saveFaqs(data.faq);
          
        } catch (error) {
            console.log(error);
        }
    }
    

    const deletefaq = async (idFaq) => {

        try {

            await apiAxios.delete(`/corporation/FAQ/${idFaq}`);

           

        } catch (error) {
            console.log(error);
        }
    }
useEffect(() => {

getFaqs();


},[])


console.log(Faqs);
console.log(idCorporation);
   
    return (
        <main>
 
            <div className="card-table">
                <div className="card-header">
                    <h2>Compañias registradas</h2>

                  
               
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        <div className="table-wrapper">
                            <table className="fl-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Titulo</th>
                                        <th>Descripcion</th>
                                        <th>Mod</th>
                                        <th>Del</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {Faqs.map(faq => (
                                        <FaqRow
                                            key={faq._id}
                                            faq={faq}
                                           
                                          
                                           
                                        />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}


export const FAQList = withRouter(FaqList)