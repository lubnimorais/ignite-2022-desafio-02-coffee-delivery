import { ReactNode } from "react";

import { IconContainer, TopicsContainer } from "./styles"

interface ITopicProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

const Topic = ({ icon, text, iconColor }: ITopicProps) => {
  return (
    <TopicsContainer>
      <IconContainer iconColor={iconColor}>
        {icon}
      </IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </TopicsContainer>
  )
}


export { Topic }