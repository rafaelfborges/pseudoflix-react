import NavBar from "../../components/NavBar";
import {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";


function Profile() {
    const [nome, setNome] = useState("Carlos");
    const [dataNasc, setDataNasc] = useState("02/11/2200");
    const [email, setEmail] = useState("carlos@gmail.com");

  return (
    <>
      <NavBar/>
      <div className='container'>
          <div className='row'>
              <div className='col-sm-12 text-center'>
                  <h1>Perfil do Usuário</h1>
              </div>
          </div>
          <div className='row'>
              <div className='col-sm-4'>
                  <p>Nome              </p>
                  <p>Email             </p>
                  <p>Data de Nascimento</p>
                  <p><label htmlFor='formAvatar'>Insira a imagem do seu avatar</label></p>
              </div>
              <div className='col-sm-8 font-weight-bold'>
                  <p><span >{nome}</span></p>
                  <p><span>{email}</span></p>
                  <p><span>{dataNasc}</span></p>
                  <p>
                      <Form>
                          <Form.Group>
                              <Form.File id="formAvatar"/>
                          </Form.Group>
                      </Form>
                  </p>
              </div>
          </div>
      </div>

    </>
  );
}

export default Profile;
