import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTheme } from 'styled-components';

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';

import { paymentMethod } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions';
import { Topic } from "../../components/Topic";

import { OrderData } from '../CompleteOrder';

import deliverymanImg from '../../assets/deliveryman.svg';

import { OrderCompletedContainer, OrderDetailContainer, Text, TextTopic, Title } from "./styles";

interface ILocationProps {
  state: OrderData
}

const OrderCompleted = () => {
  const theme = useTheme();
  const navigation = useNavigate();

  const { state } = useLocation() as unknown as ILocationProps;

  useEffect(() => {
    if (!state) {
      navigation('/')
    }    
  }, [navigation]);

  // CASO NÃO TENHA O STATE
  if (!state) return <></> 

  return (
    <OrderCompletedContainer>
      <div>
        <Title>
          Uhu! Pedido confirmado
        </Title>

        <Text>
          Agora é so aguardar que logo o café chegará até você
        </Text>
      </div>

      <section>
        <OrderDetailContainer>
          <Topic
            icon={<MapPin weight='fill' />}
            iconColor={theme.colors['brand-purple']}
            text={
              <TextTopic>
                Entrega em <strong>{`${state.street}, ${state.number}`}</strong>
                <br />
                {`${state.neighborhood} - ${state.city}, ${state.uf}`}
              </TextTopic>
            }
          />

          <Topic
            icon={<Clock weight='fill' />}
            iconColor={theme.colors['brand-yellow']}
            text={
              <TextTopic>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </TextTopic>
            }
          />

          <Topic
            icon={<CurrencyDollar weight='fill' />}
            iconColor={theme.colors['brand-yellow']}
            text={
              <TextTopic>
                Pagamento na entrega
                <br />
                <strong>{paymentMethod[state.paymentMethod].label}</strong>
              </TextTopic>
            }
          />
        </OrderDetailContainer>


        <img src={deliverymanImg} alt="" />
      </section>
    </OrderCompletedContainer>
  )
}

export { OrderCompleted }