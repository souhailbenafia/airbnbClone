import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MeduimCard from '../components/MeduimCard'
import SmallCard from '../components/SmallCard'


export default function Home({exploreDate, liveData}) {
  return (
    <div className="">
     <Head>
      <title>Airbnb clone      </title>
     </Head>

     <Header/>
     <Banner />
     <main>
      <section className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreDate?.map((item)=>{
           return(
            <SmallCard img={item.img} location={item.location} distance= {item.distance} key={ item.img} />
           )
         })}
        </div>
      </section >
      
      <section className='pt-6 max-w-7xl mx-auto px-8 sm:px-16'>
      <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
      <div className=' flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 '>
        {liveData?.map((item)=>{
           return(
            <MeduimCard img={item.img} title={item.title} key={ item.img} />
           )
         })}
        </div>
      </section>

      <section className='pt-6 max-w-7xl mx-auto px-8 sm:px-16'>
     
        <LargeCard img="https://links.papareact.com/4cj "
        title={"The Greatest Outdoors"}
        description="Wishlists curated by Airbnb"
        buttonTexe={"Get Inspired"}
        />
      </section>
     </main>

     <footer className=' '>
      <Footer/>
     </footer>
     
    </div>
  )
}

export async function getStaticProps() {
          const exploreDate = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
            (res)=>res.json()
          );
          const liveData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
             (res)=>res.json()
          )
          return{
            props: {
              exploreDate,
              liveData
            }
          }
        }