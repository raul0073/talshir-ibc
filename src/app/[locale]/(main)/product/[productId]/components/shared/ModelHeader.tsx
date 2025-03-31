import React, { Fragment } from 'react'
import { ProductItem } from '../../../../../../../../types/products'
import { ButtonPlayDemo } from '@/components/ui/button-arrow'
import { useTranslations } from 'next-intl';

function ModelHeader({thisProd, no3D}: {thisProd: ProductItem, no3D?: boolean}) {
    const tPage = useTranslations("ProductPage");
  return (
    <div className="model-header p-3 sm:p-4 flex justify-center items-center relative">
    <div className="w-full text-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl uppercase text-appTextBlue">
            {thisProd.modelNamePage}
        </h1>
    {!no3D && (
    <Fragment>

        <div className='mt-2 sm:mt-0'><ButtonPlayDemo videoUrl={thisProd.modelDemoVideo || '#'}>{tPage("playDemoVideo")}</ButtonPlayDemo></div>
       
    </Fragment>
    )}
     <p className="mt-4 text-lg text-appSubTextBlue">
            {thisProd.modelPatentNo}
        </p>
    </div>
</div>
  )
}

export default ModelHeader