import { ICardProps } from '../components/card/card';
import { IPillProps } from '../components/pill/pill';
import { IReport } from '../types';
import { cardConfig } from './insightCardConfig';

type TInsightCardData = ICardProps & { isOnTrack: boolean; detailUrl?: string };

const getInsightCards = (report: IReport): TInsightCardData[] => {
  return cardConfig(report).map((card) => {
    const pills = [
      {
        text: `${card.isOnTrack ? 'On' : ' Off'} track`,
        type: card.isOnTrack ? 'onTrack' : 'offTrack',
      },
    ];

    // hide the impact pill if there is an extra insight detail
    if (!card.detailUrl) {
      pills.push({
        text: `${card.impact} impact`,
        type: 'impact',
      });
    }

    return {
      ...card,
      pills: pills as IPillProps[],
    };
  });
};

export default getInsightCards;
