import GoogleAds from '@/components/GoogleAds'
import MoviesBanner from '@/components/MoviesBanner'
import { Metadata } from 'next'
import HotCategories from '@/components/HotCategories'
import ListCountries from '@/components/ListCountries'

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
      <ListCountries />
    </main>
  )
}

export default Page
