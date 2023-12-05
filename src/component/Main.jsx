import React from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-center mt-[50px] xs:mt-[0px] xs:block'>
        <h1 className='text-bold text-[25px] mt-[200px]  mb-[30px] xs:mt-[-20px] xs:text-center'>A Little About Olawale  Oladimeji</h1>
        <div>
            <div>

            <p className=' w-[97vw] items-center justify-center mb-[50px] xs:h-[40vh] '>
            hmm where to begin, lets take a trip down memory lane every since i was little always had the drive to invent something new, could remember loosing my perfectly working bike in the hope of creating a better bike but as expected from a  
            9year old i ruined it. Web development is my way to express myself and bring things to life so far in my 1year plus it has been an amazing journey and
             what excites me the most is the infinite possibility of development and learning  
            My passion for developing aesthetically pleasing and intuitive user interfaces, combined with my expertise in the latest web development 
            technologies,makes me a strong fit for this role. I have experience working on both small and large-scale projects, and I am confident in my
            ability to contribute to the success of your team.
            </p>
            </div>
            <div className='flex items-center justify-center  gap-[10px] mb-[50px] xs:flex-wrap'>
                
                <img  className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]'  src='/bros.jpg' alt=''/>
                <img className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]'  src='/ope.png' alt=''/>
                <img className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]'  src='/nysc.png' alt=''/>
                <img className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]'  src='omo-ope.png' alt=''/>
                <img  className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' src='/men.png' alt=''/>
            </div> 
        </div>
        <h3 className='text-bold text-[25px] mb-[30px] xs:text-center'>Little Insight to my Brilliance</h3>
        <div className = 'flex justify-center items-center gap-[10px] mb-[100px] xs:flex-wrap' >
            <div  className='flex flex-col items-center justify-center'>
                <img src='/project5.jpeg'   className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' alt =''/>
                <h3>Tetris Game for Pc</h3>
                <Link to='https://tetris-game-iota.vercel.app/' target="_blank">
                <p>click here and play the amazing game</p>
                </Link>
            </div>
            <div  className='flex flex-col items-center justify-center'>
                <img src='project1.jpeg'   className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' alt =''/>
                <h3>Car Dealership</h3>
                <Link to='https://car-dealership-website.vercel.app/' target="_blank">
                <p>click here and get the best car </p>
                </Link>
            </div>
            <div  className='flex flex-col items-center justify-center'>
                <img src='project4.jpeg'   className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' alt =''/>
                <h3>Dimz Chat</h3>
                <Link to='https://dimzchat.vercel.app' target="_blank">
                <p>click here and connect to the world</p>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src='project3.jpeg'   className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' alt =''/>
                <h3>Eazipay</h3>
                <Link to='https://eazipay-psi.vercel.app/' target="_blank">
                <p>click here and pay with Eazipay</p>
                </Link>
            </div>
            <div  className='flex flex-col items-center justify-center'>
                <img src='project2.jpeg'   className='w-[240px] h-[280px] rounded-[20px] hover:w-[260px] hover:h-[300px]' alt =''/>
                <h3>Youtube Clone</h3>
                <Link to='https://youtube-clone-ruddy-seven.vercel.app/' target="_blank">
                <p className='flex flex-col items-center justify-center'>click here and activate your day <br /> <span>with amazing videos</span></p>
                </Link>
            </div>
        </div>
    </div>
  )
}
 