import { NavLink } from "react-router-dom";

import { useCart } from "../../hooks/cart";

import { MapPin, ShoppingCart } from 'phosphor-react';

import coffeeLogoImg from '../../assets/logo.svg';

import { HeaderButtonContainer, HeaderContainer, HeaderButton } from "./styles"

const Header = () => {
  const { totalItemsCartQuantity } = useCart();

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
              {totalItemsCartQuantity >= 1 && <span>{totalItemsCartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>            
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export { Header }