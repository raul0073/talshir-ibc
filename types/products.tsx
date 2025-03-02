import { StaticImageData } from "next/image";

export type ProductImage = {
  thumbnail: StaticImageData;
  productPageMain: string;
  usage1: string;
  usage2: string;
  usage3: string;
};

export type ProductItem = {
  id: number;
  modelName: string;
  modelDescription: string;
  modelUsage: string[];
  modelImages: ProductImage;
  modelSizes: string[];
  modelDemoVideo: string;
  modelSpecification: string;
  modelCertification: string;
  model3DObject: string;
  modelPatentNo: string;
};
