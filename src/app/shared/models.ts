export interface Profile {
  address: string;
  birthdate: string;
  email: string;
  email2: string;
  first_name: string;
  gender: string;
  last_name: string;
  localid: number;
  loyalty_member_id: string;
  modified: string;
  phone: string;
  photo: string;
  prefix: string;
  suffix: string;
}

export interface StatusFacts {
  id: string;
  tier: string;
  pts: string;
}

export interface TopFacts {
  topOne: string;
  topTwo: string;
  topThree: string;
}

export interface RfmScore {
  total: number;
  r: number;
  f: number;
  m: number;
}

export interface OtherFacts {
  totalStays: number;
  nights: number;
  avgNights: string;
  lastVisit: string;
  lifetimeValue: number;
}

export interface RetrieveQuickFacts {
  statusFacts: StatusFacts;
  topFacts: TopFacts;
  rfmScore: RfmScore;
  otherFacts: OtherFacts;
}
