import Image from 'next/image'
import mati from './../../../../app/assets/images/certifications/mati.png'

function Footer() {
  return (
    <section className='footer pt-24'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-between'>
            <div className='flex items-center'>
              <Image
                src={mati}
                alt='מכו�� התקנים בי��ראל'
                width={30}
                height={30}
              />
              <span className='text-xs'>מ.ת.י</span>
            </div>
            <div className='flex items-center'>
              <a href='https://www.talshir.co.il/' target='_blank' rel='noopener noreferrer'>
              Talshir-IBC
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer