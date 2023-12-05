
import { FaReact } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';

export default function Header({clicked , setClicked, handleClick}) {


        let currentTime = new Date();
  
   
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeString = hours + ':' + minutes;
       
    
          // const [clicked, setClicked] = useState(false);
        
          // const handleClick = () => {
          //   setClicked(!clicked);
          // };

  return (
    <div className='flex items-center justify-between p-[25px] mb-[100px] bg-[#73BBC9]'>
        <h1 className='text-[30px]'>DIMZ World</h1>
        <div className='flex items-center gap-[40px]'>
            <span >{timeString}</span>
            <span className='xs:hidden'>Personal Info</span>
            <div className='flex items-center xs:hidden'>

              <MdWbSunny className='mr-[-20px]'  color='white'/>
            <div
      className={`mr-[30px] icon-container ${clicked ? 'move-right' : ''}`}
      onClick={handleClick}
      >
      <FaReact className="react-icon" />
    </div>
    <IoMdMoon  color='grey' />
      </div>
        </div>
    </div>
  )

}
