import React from 'react';
import { apiAxios, config } from '../../../../config/api';
import { Link, withRouter } from 'react-router-dom';
const FaqRow = ({faq}) => {
    
    const deletefaq = async () => {

        try {

            await apiAxios.delete(`/corporation/FAQ/${faq._id}`);

           

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr>
            <td></td>
            <td><a className="ticket-link" href="#">{faq.title}</a></td>
            <td>{faq.description}</td>
            <td><span>
                    <Link to={`/admin/faq/edit/${faq._id}`}><i className="las la-pen"></i></Link>
                </span></td>
                <td>



                <span className="">
                        <i className="las la-trash-alt" onClick={() =>  deletefaq()} ></i>
                    </span>








  
                </td>



        </tr>
    )

}

export default FaqRow;