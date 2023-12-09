export type Fable = {
  id: number;
  title: string;
  content: string;
};

export type ImageData = {
  filename: string;
  alt: string;
};

export type Part = {
  id: number;
  images: [ImageData, ImageData, ImageData];
  fables: Fable[];
};
