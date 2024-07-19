
import './App.css'
import Cards from './Cards'
function App() {
  

  return (
    <>
      <section className='flex flex-col items-center mt-3 '>
     <nav className=' bg-[#FFFFFF] h-[70px] w-[550px] drop-shadow-md flex items-center'> 
         <img src="/airbnb 1.svg" alt="" className='px-2'/> 
     </nav>
  <section className='bg-white  '>


     <div className='  w-[550px] '>
       <img src="/Group 77.svg" alt="" className='px-10 mt-8' />
       <h1 className='text-3xl font-bold mt-8 px-7'>Online Experiences </h1>
       <div className='leading-relaxed font-normal text-sm mt-3 px-7'>
  <span className='block'>Join unique interactive activities led by</span>
  <span className='block'>one-of-a-kind hosts—all without leaving</span>
  <span className='block'>home.</span>
         <p className='text-xs font-medium flex justify-center mt-4'>ONLINE</p>
</div>
     </div>
  
     <div className='flex gap-4 mt-10 px-7'>
     <Cards img="/image 12.svg"
        star= "/Star 1.svg"
       title="Life lessons with Katie Zaferes"
       price="From $136"
       points="5.0"
       person = "/person"
       location="(6).USA"
       soldOut={true}
     />
     <Cards
        img="/wedding-photography 1.svg"
        star= "/Star 1.svg"
       title="Learn wedding photography"
       price="From $125"
       points="5.0"
       person = "/person"
       location="(30).USA"
       soldOut={false}
     />
     <Cards
         img="/mountain-bike 1.svg"
         star= "/Star 1.svg"
        title="Group Mountain Biking"
        price="From $125"
        points="4.8"
        person = "/person"
        location="(2).USA"
        soldOut={false}
     />
     </div>
</section>
     </section>
    </>
  )
}

export default App
