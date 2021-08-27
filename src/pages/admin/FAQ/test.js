import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from '../../../components/dashboard';


const Testa = () => {

    return (

        <Layout >
       <main>
           <h1>
               hola
           </h1>
       </main>
        </Layout>

    )
}

export default withRouter(Testa)