import React from 'react';
import { apiAxios, config } from '../../../../config/api';
import { Link, withRouter } from 'react-router-dom';
const FaqRow = ({ faq }) => {


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
            <td><a className="ticket-link" href="#">
                <h4>{faq.title}</h4>
            </a>

            </td>
            <br></br>
            <br></br>
            <td>{faq.description}</td>
            <br></br>
            <br></br>

            <td><span>
                <Link to={`/admin/faq/edit/${faq._id}`}><i className="las la-pen"></i></Link>
            </span></td>
            <td>



                <span className="">
                    <i className="las la-trash-alt" onClick={() => deletefaq()} ></i>
                </span>









            </td>



            </td>
        </tr>
    )

}

export default FaqRow;