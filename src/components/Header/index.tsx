import { HeaderButtonContainer, HeaderContainer, HeaderButton } from "./styles"

import { MapPin, ShoppingCart } from 'phosphor-react';

import coffeeLogoImg from '../../assets/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={coffeeLogoImg} alt="" />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Caruaru, PE
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill"/>            
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export { Header }