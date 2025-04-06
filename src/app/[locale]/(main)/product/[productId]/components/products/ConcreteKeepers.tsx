import ProductPageSkeleton from '@/components/Skeletons/ProductPageSkeleton';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { ProductItem } from '../../../../../../../../types/products';
import EnlargeableImage from '../shared/ImageComp';
import ModelHeader from '../shared/ModelHeader';

function ConcreteKeepers({ id }: { id: string }) {
	const t = useTranslations("Products");

	const thisProd = useMemo(() => {
		return t.raw("ProductsList").find((p: ProductItem) => p.id === id);
	}, [t, id]);
  return (
    <div className="container  mx-auto min-h-[70vh]">
    {thisProd ? (
        <div className="grid grid-cols-1 px-2">
            <div className="">
                <ModelHeader thisProd={thisProd} no3D />
                
                <div className="model-usage p-3 sm:p-4 flex flex-col items-center mt-12">
                    <EnlargeableImage
                        src={thisProd.modelImages.productPageMain}
                        alt={thisProd.modelName}
                        width={600}
                        height={600}
                    />
                    <div>
                        <p className="text-2xl uppercase text-appTextBlue mb-4 text-center my-6 font-bold">
                            {thisProd.modelDescription}
                        </p>
                        <ul className="text-sm md:text-lg capitalize w-fit mx-auto list-disc px-2 sm:px-1 space-y-1 mt-8">
                            {thisProd.modelUsage.map((line: string, index: number) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    ) : (
        <ProductPageSkeleton />
    )}
</div>
  )
}

export default ConcreteKeepers