import React from 'react';
import Main from '../template/main';

const Home = props =>
    <Main icon="home" title="Início" subtitle="Segundo projeto do caṕitulo de React.">
        <div className="display-4">Bem-vindo!</div>
        <hr></hr>
        <p className="mb-0">Sistema para exemplificar a construção de um cadastro de usuário desenvolvido em React.</p>

    </Main>


export default Home;