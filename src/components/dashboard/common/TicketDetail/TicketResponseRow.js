import React from 'react';
import dayjs from 'dayjs';


const TicketResponseRow = ({ ticketResponse }) => {
console.log(ticketResponse);
    return (

       <div>
           <br></br>
<h4>



                    { ticketResponse.user.auth_level == 2 ? <span className="">
                        <i className="las la-id-card" onClick={() =>  deletefaq()} ></i>
                    </span>
  : <span className="">
 </span>
} {ticketResponse.user.lastname} {ticketResponse.user.name} (  {dayjs(ticketResponse.create_at).format('DD/MM/YYYY h:mm A')}) : {ticketResponse.message}

</h4>
<h5>
{ticketResponse.user.email} 

</h5>
<br></br>
            

         
   
  

       </div>
             )

}

export default TicketResponseRow;