import React from 'react';
import { userDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled'
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = userDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <>
      <Container>
        <Title>
          Login
          <small>Oie</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit vel neque ullam unde quasi expedita, ex consectetur nam sunt delectus aliquam perspiciatis corrupti sint, natus dolorum! Facilis, eius accusamus!</Paragrafo>
        <button type='button' onClick={handleClick}>
          Enviar
        </button>
      </Container>
    </>
  );
}
