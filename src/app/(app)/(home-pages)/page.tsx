import { Metadata } from 'next'
import MoviesBanner from '@/components/MoviesBanner'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the Stay application',
}

async function Page() {

  return (
    <main className="w-full">
    <MoviesBanner />
    </main>
  )
}

export default Page
