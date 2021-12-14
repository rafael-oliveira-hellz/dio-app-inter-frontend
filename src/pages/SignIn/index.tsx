import { Link, useNavigate } from "react-router-dom";

import useAuth from '../../hooks/useAuth';
import { useState, useEffect } from 'react';

import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import backgroundLoginImg from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const handleToSignIn = async () => {
        const data = {
            email,
            password
        }

        const response = await userSignIn(data);

        if(response.id){
            navigate('/dashboard')
            return
        }

        alert('Usuário e/ou senha inválidos!')
    }

    return (
        <Wrapper>
            <Background image={backgroundLoginImg} />
            <Card width="403px">
                <img src={logoInter} width={172} height={61} alt="Logo Inter" />

                <InputContainer>
                    <Input placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="SENHA" value={password} onChange={e => setPassword(e.target.value)} />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já!</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn