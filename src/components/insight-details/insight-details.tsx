import { ERROR_MESSAGE } from "../../lib/constants";
import { IInsightDetails } from "../../lib/hooks/useInsightDetails";
import Pill from "../pill";
import { InsightDetailsContainer } from "./insight-details.styled";

interface IInsightDetailsProps {
  data?: IInsightDetails;
  isOnTrack?: boolean;
}

export default function InsightDetails({
  data,
  isOnTrack,
}: IInsightDetailsProps) {
  if (!data) {
    return <h1>{ERROR_MESSAGE}</h1>;
  }

  const { title, onTrackDescription, offTrackDescription, details } = data;

  return (
    <InsightDetailsContainer>
      <Pill
        text={isOnTrack ? "ON TRACK" : "OFF TRACK"}
        type={isOnTrack ? "onTrack" : "offTrack"}
      />
      <header>
        <h1>{title}</h1>
        <p>{isOnTrack ? onTrackDescription : offTrackDescription}</p>
      </header>
      {details.map(({ title, description }) => (
        <section key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      ))}
    </InsightDetailsContainer>
  );
}
