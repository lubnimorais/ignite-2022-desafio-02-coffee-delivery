import { BenefitsContainer, HighlightContainer, HighlightContent, HighlightText, HighlightTitle } from "./styles"

import { useTheme } from "styled-components";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import highlightCoffeeImg from '../../../../assets/highlight-coffee-img.svg';

import { Topic } from "../../../../components/Topic";

const Highlight = () => {
  const theme = useTheme();

  return (
    <HighlightContainer>
      <HighlightContent>
        <div>
          <section>
            <HighlightTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HighlightTitle>

            <HighlightText>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </HighlightText>
          </section>

          <BenefitsContainer>
            <Topic
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={theme.colors["brand-yellow-dark"]}
            />

            <Topic
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor={theme.colors["base-text"]}
            />

            <Topic
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor={theme.colors["brand-yellow"]}
            />
            
            <Topic
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor={theme.colors["brand-purple"]}
            />
          </BenefitsContainer>

        </div>

        <img src={highlightCoffeeImg} 
          alt="Imagem de um copo de café para viagem com uma inclinação para a direita" 
        />
      </HighlightContent>
    </HighlightContainer>
  )
}

export { Highlight }