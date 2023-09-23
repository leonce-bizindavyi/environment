import Nav from '@/Components/navBar'
import Make from '@/Components/make'
import Picture from '@/Components/picture'
import Post from '@/Components/post'
import About from '@/Components/about'
import Footer from '@/Components/footer'

export default function Home() {
  return (
      <div className='container w-[100%]  flex flex-col space-y-8 mx-auto md:rounded-md '>
        <Picture />
        <Post />
        <Make />
        <About />
        <Footer />
      </div>
  )
}
