import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios } from '../../../../config/api';

const ticketForm = ({props}) => {
  
    const {idCorporation} = props.match.params;

  
    const [ticket, saveTicket] = useState({
        subject: '',
        description: '',
        corporation: ''
    });

    const [corporation, saveCorporation] = useState([]);
    const [corporationp, saveCorporationp] = useState({});
    useEffect( () => {
       
        



        const setCorporation = async () =>{

            try {

                const  {data}  = await apiAxios.get('/corporation');
                
                saveCorporationp(data.corporation);
               

            } catch (error) {
                console.log(error.request);
            }
        }
    setCorporation();







    
        const actualCorporation = async () => {
            try {
                const {data}  = await apiAxios.get(`/corporation/${idCorporation}`);
            
    
                saveCorporation(data.corporation);
    
            } catch (error) {
                console.log(error.request);
         
            }
            
          
            
        }
      actualCorporation();




      



    
     



      
        
        
        









       


        

     }, []) 
     


    
    const readData = e => {

        saveTicket({
            ...ticket,
            [e.target.name]: e.target.value
        });
     
    }

    

    const registerTicket = async e => {

        e.preventDefault();

        try {

            const {data} = await apiAxios.post('/ticket/new', ticket);

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
        props.history.push('/admin/ticket')
  

    }

    return (
        <main>
            <div className="container-form">
                <div className="title">Registra la empresa</div>
                <form onSubmit={registerTicket}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Asunto</span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="No Internet"
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                            <span className="details">descripcion</span>
                            <input
                                type="text"
                                name="description"
                                placeholder="Descripcion de la incidencia"
                                
                                onChange={readData}
                                required />
                        </div>
                        <div className="input-box">
                         
                    {corporationp != undefined


                        ?
                        <select onChange={readData} >
                        
                        <option key={corporationp._id} value={corporationp._id}>{corporationp.name}</option>

                        </select>

                        : 
                           <select name="corporation" onChange={readData} >
                           
                           {corporation.map(corp => (
                                     
                                     <option key={corp._id} value={corp._id}>{corp.name}</option>
                                     
                                ))}
                           </select>

}
         



                        </div>
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

export const NewTicketForm = withRouter(ticketForm)