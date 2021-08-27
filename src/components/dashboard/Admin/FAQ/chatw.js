import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { apiAxios,config } from '../../../../config/api';
import {Modal, Button} from 'react-bootstrap';


    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               CHAT
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
        
            <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>

    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
    <div className="message">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://larepublica.pe/resizer/C83GgLtQqqTeCCaPTqJMjI4gByI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AFLPFVH3PJDQXJNYUJHEJHRYKA.jpg"
          alt=""
        />
        <p className="messageText">hola</p>
      </div>
      <div className="messageBottom">hace 1 hora</div>
    </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
      export const ChatUser = ({props}) => {
        const [modalShow, setModalShow] = React.useState(false);
      
        return (
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
         Mostrar chat
            </Button>
      
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        );
      }
      


