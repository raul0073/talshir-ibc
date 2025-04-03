import { StaticImageData } from "next/image";

export type ProductImage = {
  thumbnail: StaticImageData;
  productPageMain: string;
  usages: string[]
};
export type AltImages = {
  label: string;
  img: string | StaticImageData
}
export type ProductImageAlternative = {
  thumbnail: StaticImageData;
  productPageMain: string;
  usages: AltImages[]
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
  images: string
  extraContent?: string
}
export type ModelExtraContentAlt = {
  header: string;
  desc: string;
  img: string ;
  images: string[] | StaticImageData[]
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
export type ProductItemAlt = {
  id: string;
  modelName: string;
  modelNamePage: string;
  modelDescription: string;
  modelUsage: string[];
  modelImages: ProductImageAlternative
  modelSizesCustomize: boolean;
  modelSizes: string[];
  modelDemoVideo: string;
  modelLinks: ModelLinks;
  modelSpecification: string;
  modelCertification: string;
  modelCustomizable: boolean;
  model3DObject: string;
  modelPatentNo: string;
  modelExtraContent: ModelExtraContentAlt
};
