import { HeaderButtonContainer, HeaderContainer, HeaderButton } from "./styles"

import { MapPin, ShoppingCart } from 'phosphor-react';

import coffeeLogoImg from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Caruaru, PE
          </HeaderButton>

          <NavLink to="/complete_order">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill"/>            
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export { Header }