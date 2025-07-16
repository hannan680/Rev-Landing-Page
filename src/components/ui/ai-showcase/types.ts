
export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  type: 'inbound' | 'outbound' | 'support' | 'follow-up';
  audioUrl?: string;
  features: string[];
  resultStats: {
    metric: string;
    value: string;
  }[];
}
