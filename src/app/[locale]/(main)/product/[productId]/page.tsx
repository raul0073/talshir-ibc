import SectionWithLocale from "@/components/Section/SectionWithLocale";
import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { LocaleOptions } from "@/i18n/routing";
import { Suspense } from "react";
import { PRODUCTS_COMPONENTS } from "../../../../../../messages/products";

async function Page({
	params,
  }: {
	params: Promise<{ productId: string; locale: LocaleOptions }>;
  }) {
	const { productId } = await params;
	const prodID = decodeURIComponent(productId);
	const ProductComponent = PRODUCTS_COMPONENTS[prodID.trim()];
  
	return (
	  <SectionWithLocale sectionName="product-page" className="pt-32">
		<Suspense key={"product-page"} fallback={<ProductPageSkeleton />}>
		  {ProductComponent || <ProductPageSkeleton />}
		</Suspense>
	  </SectionWithLocale>
	);
  }
  
  export default Page;
