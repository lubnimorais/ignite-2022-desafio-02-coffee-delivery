import { useEffect, useState } from "react";

import { data } from "../../../../database/data";

import { formatMoney } from "../../../../utils/Utils";

import { CoffeesContent, ListCoffeesContainer, Title } from "./styles"

import { CardCoffee } from "../CardCoffee"

type ICoffee = {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number,
  price_formatted: string;
}

const ListCoffees = () => {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  useEffect(() => {
    async function loadData() {
      const coffeesData: ICoffee[] = data.map(coffee => {
        return {
          id: coffee.id,
          tags: coffee.tags,
          name: coffee.name,
          description: coffee.description,
          photo: coffee.photo,
          price: coffee.price,
          price_formatted: formatMoney(coffee.price),
        }
      });

      setCoffees(coffeesData);
    }

    loadData();
  }, [])

  return (
    <ListCoffeesContainer>
      <Title>Nossos cafés</Title>

      <CoffeesContent>
        {coffees.map(coffee => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}
        
      </CoffeesContent>
    </ListCoffeesContainer>
  )
}

export { ListCoffees }