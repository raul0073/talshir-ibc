import React, { Fragment } from 'react'
import { ProductItem } from '../../../../../../../../types/products'
import { ButtonPlayDemo } from '@/components/ui/button-arrow'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function ModelHeader({thisProd, no3D, noPatent, patentLogo}: {thisProd: ProductItem, no3D?: boolean, noPatent?: boolean, patentLogo?: boolean}) {
    const tPage = useTranslations("ProductPage");
  return (
    <div className="model-header p-3 sm:p-4 flex justify-center items-center relative">
    <div className="w-full sm:w-2/3 text-center">
    <h1 className="text-4xl sm:text-5xl uppercase text-appTextBlue font-suez">
            {thisProd.modelNamePage}
        </h1>
        {
          patentLogo && (

            <div className="py-8 sm:py-6 px-4 sm:px-8 flex flex-col items-center gap-1 sm:gap-3 uppercase border-gray border-4 w-full sm:w-fit sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
            <Image
              width={80}
              height={80}
              alt="patent"
              src={thisProd.modelExtraContent.images[1]}
            />
            <span>{thisProd.modelPatentNo}</span>
          </div>
          )
        }
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