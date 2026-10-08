export type CategoryType = "ALL" | "TABLE" | "FLOOR" | "STAIRS" | "WALL";

export interface ExhibitionPiece {
  id: string;
  slug?: string;
  category: "TABLE" | "FLOOR" | "STAIRS" | "WALL";
  title: string;
  spec: string;
  desc: string;
  price: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  badge: string;
}

export interface ExcellencePoint {
  index: string;
  title: string;
  desc: string;
}

export interface ArchivalEdition {
  id: string;
  slug?: string;
  category: "TABLE" | "FLOOR" | "STAIRS" | "WALL";
  title: string;
  desc: string;
  price: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  isSecondary?: boolean;
}
