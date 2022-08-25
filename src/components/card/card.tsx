import Pill, { IPillProps } from "../pill";
import {
  CardContainer,
  CardContent,
  CardCta,
  CardDescription,
} from "./card.styled";

export interface ICardProps {
  heading: string;
  text: string;
  pills?: IPillProps[];
  cta?: {
    ctaText: string;
    ctaHandler: () => void;
  };
}

export default function Card({ heading, text, pills, cta }: ICardProps) {
  return (
    <CardContainer>
      {pills &&
        pills.map(({ text, type }) => (
          <Pill text={text} type={type} key={text} />
        ))}
      <CardContent>
        <h3>{heading}</h3>
        <CardDescription>{text}</CardDescription>
      </CardContent>
      {cta ? <CardCta onClick={cta.ctaHandler}>{cta.ctaText}</CardCta> : null}
    </CardContainer>
  );
}
