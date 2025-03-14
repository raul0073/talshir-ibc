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
  modelSizesCustomize: boolean;
  modelSizes: string[];
  modelDemoVideo: string;
  modelSpecification: string;
  modelCertification: string;
  modelCustomizable: boolean;
  model3DObject: string;
  modelPatentNo: string;
};
