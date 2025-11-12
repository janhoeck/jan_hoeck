import { HomeView } from '@/components/views/home/HomeView'
import { loadData } from '@/lib/load-data'

export default function HomePage() {
  const categoriesWithVideos = loadData()

  return <HomeView categoriesWithVideos={categoriesWithVideos} />
}
