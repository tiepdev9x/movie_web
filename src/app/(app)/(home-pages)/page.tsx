import GoogleAds from '@/components/GoogleAds'
import MoviesBanner from '@/components/MoviesBanner'
import { Metadata } from 'next'
import HotCategories from '@/components/HotCategories'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the Stay application',
}

async function Page() {
  return (
    <main className="w-full">
      <MoviesBanner />
      <GoogleAds />
      <HotCategories />
    </main>
  )
}

export default Page
