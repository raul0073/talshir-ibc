import { StaticImageData } from "next/image";

export type ProductImage = {
  thumbnail: StaticImageData;
  productPageMain: string;
  usages: string[]
};

export type ModelLinks = {
  modelPikod: string;
  modelMati: string;
  modelProspect: string;
  modelExtra?: string
}
export type ModelExtraContent = {
  header: string;
  desc: string;
  img: string;
  extraContent?: string
}
export type ProductItem = {
  id: string;
  modelName: string;
  modelNamePage: string;
  modelDescription: string;
  modelUsage: string[];
  modelImages: ProductImage;
  modelSizesCustomize: boolean;
  modelSizes: string[];
  modelDemoVideo: string;
  modelLinks: ModelLinks;
  modelSpecification: string;
  modelCertification: string;
  modelCustomizable: boolean;
  model3DObject: string;
  modelPatentNo: string;
  modelExtraContent: ModelExtraContent
};
