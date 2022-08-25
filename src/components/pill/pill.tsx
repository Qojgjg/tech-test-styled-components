import { PillContainer, PillText } from "./pill.styled";

export interface IPillProps {
  text: string;
  type?: "onTrack" | "offTrack" | "impact";
}

export default function Pill({ text, type = "impact" }: IPillProps) {
  return (
    <PillContainer>
      <PillText className={type}>{text.toUpperCase()}</PillText>
    </PillContainer>
  );
}
