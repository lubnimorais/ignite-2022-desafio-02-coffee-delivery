import { ReactNode } from "react";
import { SectionTitleContainer, TextMedium, TextSmall } from "./styles";

interface ISectionTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const SectionTitle = ({icon, title, subtitle}: ISectionTitleProps) => {
  return (
    <SectionTitleContainer>
      {icon}

      <div>
        <TextMedium>
          {title}
        </TextMedium>

        <TextSmall>
          {subtitle}
        </TextSmall>
      </div>
    </SectionTitleContainer>
  )
}

export { SectionTitle }