import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import Card from "../../components/Card";

import backgroundLoginImg from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const handleToSignUp = () => {
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <Background image={backgroundLoginImg} />
            <Card width="403px">
                <img src={logoInter} width={172} height={61} alt="Logo Inter" />

                <InputContainer>
                    <Input placeholder="NOME" />
                    <Input placeholder="SOBRENOME" />
                    <Input placeholder="EMAIL" />
                    <Input type="password" placeholder="SENHA" />
                    <Input type="password" placeholder="CONFIRMAR SENHA" />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignUp}>Cadastrar</Button>
                    <p>Já tem uma conta? <Link to="/">Entre já!</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp