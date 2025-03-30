import React from 'react'
import { ProductItem } from '../../../../../../../../types/products'
import { ButtonPlayDemo } from '@/components/ui/button-arrow'
import { useTranslations } from 'next-intl';

function ModelHeader({thisProd}: {thisProd: ProductItem}) {
    const tPage = useTranslations("ProductPage");
  return (
    <div className="model-header p-3 sm:p-4 flex justify-center items-center relative">
    <div className="w-full text-center">
        <h1 className="font-bold text-2xl md:text-5xl uppercase text-appTextBlue">
            {thisProd.modelNamePage}
        </h1>
    <div className='mt-2 sm:mt-0'><ButtonPlayDemo videoUrl={thisProd.modelDemoVideo || '#'}>{tPage("playDemoVideo")}</ButtonPlayDemo></div>
        <p className="mt-4 text-lg text-appSubTextBlue">
            {thisProd.modelPatentNo}
        </p>
    </div>
</div>
  )
}

export default ModelHeader