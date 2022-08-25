import { useState } from "react";
import { LOADING_MESSAGE } from "../../lib/constants";
import getInsightCards from "../../lib/getInsightCards";
import useInsightDetails from "../../lib/hooks/useInsightDetails";
import { IReport } from "../../types";
import Card from "../card";
import Drawer, { useDrawerContext } from "../drawer/drawer";
import InsightDetails from "../insight-details";
import { InsightCardLayout, InsightContainer } from "./insight.styled";

interface IInsightsProps {
  data: IReport;
}

interface IActiveInsight {
  url?: string;
  isOnTrack?: boolean;
}

export default function Insights({ data }: IInsightsProps) {
  const insightCards = getInsightCards(data);
  const [activeInsight, setActiveInsight] = useState<IActiveInsight>();
  const { data: insightData, fetching } = useInsightDetails(activeInsight?.url);
  const { showDrawer } = useDrawerContext();

  return (
    <InsightContainer>
      <h1>Insights</h1>
      <InsightCardLayout>
        {insightCards.map(({ heading, text, pills, detailUrl, isOnTrack }) => (
          <Card
            heading={heading}
            text={text}
            key={heading}
            pills={pills}
            {...(detailUrl && {
              cta: {
                ctaHandler: () => {
                  setActiveInsight({
                    url: detailUrl,
                    isOnTrack,
                  });
                  showDrawer();
                },
                ctaText: "Learn more",
              },
            })}
          />
        ))}
      </InsightCardLayout>
      <Drawer>
        {fetching ? (
          <h1>{LOADING_MESSAGE}</h1>
        ) : (
          <InsightDetails
            data={insightData}
            isOnTrack={activeInsight?.isOnTrack}
          />
        )}
      </Drawer>
    </InsightContainer>
  );
}
