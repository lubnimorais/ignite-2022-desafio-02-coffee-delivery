import { OrderCompletedContainer, OrderDetailContainer, Text, Title } from "./styles";

import deliverymanImg from '../../assets/deliveryman.svg';

const OrderCompleted = () => {
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
          <p>oi</p>
        </OrderDetailContainer>


        <img src={deliverymanImg} alt="" />
      </section>
    </OrderCompletedContainer>
  )
}

export { OrderCompleted }