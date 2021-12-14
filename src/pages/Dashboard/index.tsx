/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { pay, request } from '../../services/resources/pix'

import useAuth from '../../hooks/useAuth';

import Statement from './Statement';

const Dashboard = () => {

    const {user, getCurrentUser} = useAuth();

    const wallet = user?.wallet || 0;

    const [key, setKey] = useState('');
    const [generetadKey, setGeneretadKey] = useState('');
    const [value, setValue] = useState('');

    const handleNewPayment = async() => {
        console.log('Entrou')

        const {data} = await request(Number(value))
        
        console.log('Valor', data);

        if(data.copyPasteKey){
            setGeneretadKey(data.copyPasteKey);
        }
    }

    const handlePayPix = async () => {
        try {
            const {data}= await pay(key);
            if(data.msg){
                alert(data.msg);
                return
            }
            alert('Não foi possível efetuar o pagamento');
        } catch (e) {
            console.log(e)  
            alert('Não é possível pagar um pix para você mesmo');       
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, []);

    if(!user){
        return null;
    }

    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Saldo Atual</h2>
                       </InlineTitle>
                       <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineContainer>
                   </Card>
                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Receber PIX</h2>
                       </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} onChange={e=> setValue(e.target.value)} placeholder="Valor"/>
                            <Button onClick={handleNewPayment}>Gerar Código</Button>
                        </InlineContainer>

                        {generetadKey && (
                            <>
                                <p className="primary-color">Pix copia e cola:</p>
                                <p className="primary-color">{generetadKey}</p>
                            </>
                        )}
                        
                        
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} value={key} onChange={e=> setKey(e.target.value) }placeholder="Insira a chave"/>
                            <Button onClick={handlePayPix}>Pagar PIX</Button>
                        </InlineContainer>
                   </Card>
                </div>
                <div id="statement">
                    <Card noShadow width="90%">
                      <InlineTitle>
                        <h2 className="h2">Extrato da conta</h2>
                      </InlineTitle>
                      <Statement />
                   </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard