import React, { Fragment } from 'react'
import { ProductItem } from '../../../../../../../../types/products'
import { ButtonPlayDemo } from '@/components/ui/button-arrow'
import { useTranslations } from 'next-intl';

function ModelHeader({thisProd, no3D, noPatent}: {thisProd: ProductItem, no3D?: boolean, noPatent?: boolean}) {
    const tPage = useTranslations("ProductPage");
  return (
    <div className="model-header p-3 sm:p-4 flex justify-center items-center relative">
    <div className="w-full sm:w-2/3 text-center">
    <h1 className="text-4xl sm:text-5xl uppercase text-appTextBlue font-suez">
            {thisProd.modelNamePage}
        </h1>
    {!no3D && (
    <Fragment>

        <div className='mt-2 sm:mt-0'><ButtonPlayDemo videoUrl={thisProd.modelDemoVideo || '#'}>{tPage("playDemoVideo")}</ButtonPlayDemo></div>
       
    </Fragment>
    )}
     {!noPatent && (
      <p className="mt-4 text-lg text-appSubTextBlue">
      {thisProd.modelPatentNo}
  </p>
     )}
    </div>
</div>
  )
}

export default ModelHeader