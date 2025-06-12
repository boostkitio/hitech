export interface FAQ {
  question: string;
  answer: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  benefits?: string[];
  treatmentOptions?: string[];
  treats?: string[];
  services?: string[];
  productLines?: string[];
  peelTypes?: string[];
  treatmentAreas?: string | string[];
  sessions?: string;
  course?: string;
  frequency?: string;
  touchups?: string;
  duration?: string;
  results?: string;
  recovery?: string;
  downtime?: string;
  price: string;
  faqs: FAQ[];
  beforeAfter?: BeforeAfter[];
} 