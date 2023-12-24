import Image from 'next/image'
import AnimeGirlImage from './animeGirlImage'

export default function Home() {
  return (
    <main className='flex items-center justify-center pt-40 body-font font-poppins'>
      <div>
        <div className='text-center pb-5 lg:pr-60 md:pr-16'>
          <h1 className='text-[30px] pb-2 font-Sevillana'>Zapytasz pewnie co to?</h1>
          <span className='text-[18px] font-Roboto font-thin'>
            Otóż po twojej prawej stronie możesz zaobserwować parę Anime Dziewczynek, <br />
            czyli to w jaki sposób Kacperek wykorzystuje zaciąganie zdjęć za pomocą API <br /><br />
            Strona w fazie produkcji, dlatego na ekranach smartfonow brak Anime, nie mozna <br />
            walic konia ://////
          </span>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 md:mr-5 sm:grid-cols:1  max-md:hidden'>
        <div className='justify-center border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 1</span>
        </div>
        <div className='border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 2</span>
        </div>
        <div className='border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 3</span>
        </div>
        <div className='border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 4</span>
        </div>
        <div className='border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 5</span>
        </div>
        <div className='border-solid border-1 text-center'>
          <AnimeGirlImage />
          <hr className='mt-2'/>
          <span>Anime Dziewczynka nr 6</span>
        </div>
      </div>
    </main>
  )
}
