import arrow from '../assets/arrow-down.svg'
const QOne = () => {
  
  return (
    <div className="bg-[#00001d] h-screen rounded-lg text-center p-4">
        <h2 className="text-white my-4">{"What time do you go to bed for sleep?"}</h2>
        <div id="options" className="flex flex-col justify-center items-center">
            <input type="time" name="sleep-time" id="sleep-time" defaultValue={'22:30'} />
        </div>
        <div id="submit" className="cursor-pointer m-4 text-center bg-yellow-400 inline-block rounded-full"><img src={arrow} className='cursor-pointer pointer-events-none w-10' alt="" /></div>
      
    </div>
  )
}

export default QOne
