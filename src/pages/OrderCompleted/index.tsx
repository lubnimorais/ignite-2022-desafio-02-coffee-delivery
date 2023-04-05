import { useTheme } from 'styled-components';

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';

import deliverymanImg from '../../assets/deliveryman.svg';

import { Topic } from "../../components/Topic";

import { OrderCompletedContainer, OrderDetailContainer, Text, TextTopic, Title } from "./styles";

const OrderCompleted = () => {
  const theme = useTheme();

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
                Entrega em <strong>Rua de Teste da entrega, 102</strong>
                <br />
                Teste City - Caruaru, PE
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
                <strong>Cartão de Crédito</strong>
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