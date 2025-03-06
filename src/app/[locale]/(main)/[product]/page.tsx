import SectionWithLocale from "@/components/Section/SectionWithLocale";
import ProductPageSkeleton from "@/components/Skeletons/ProductPageSkeleton";
import { LocaleOptions } from "@/i18n/routing";
import { Suspense } from "react";
import ProductComp from "./components/ProductComp";

async function Page({
	params,
}: {
	params: Promise<{ product: string; locale: LocaleOptions }>;
}) {
	const { product } = await params;
	const prodName = decodeURIComponent(product);
	return (
		<SectionWithLocale sectionName="product-page" className="pt-6">
			<Suspense key={"product-page"} fallback={<ProductPageSkeleton />}>
				{prodName ? (
					<ProductComp productName={prodName} />
				) : (
					<ProductPageSkeleton />
				)}
			</Suspense>
		</SectionWithLocale>
	);
}

export default Page;
