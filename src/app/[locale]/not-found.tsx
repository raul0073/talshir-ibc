import LogoComp from '@/components/Root/Logo/LogoComp'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full flex justify-center items-center p-24'>
      <h2>TALSHIR-IBC</h2>
      <LogoComp />
      <p>Could not find requested resource</p>
      <Link href="/en">Return Home</Link>
    </div>
  )
}