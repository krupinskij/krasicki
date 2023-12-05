export type Fable = {
  id: number;
  title: string;
  content: string;
};

export type Part = {
  id: number;
  fables: Fable[];
};
