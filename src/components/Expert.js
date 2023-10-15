import React from 'react'
import laptop from '../asset/img/laptop.jpg'

function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={laptop} alt="Laptop" className='inline hover:scale-110 duration-500' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
          <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque, mollitia saepe dolores, magnam suscipit, explicabo fugit reiciendis iusto quisquam veniam possimus ut quasi qui totam vero deleniti voluptatum facilis fugiat nobis unde alias quos eveniet. Libero dolores adipisci hic.</p>
          <button className='w-[20%] bg-black text-white p-3 rounded-bl-full'>Start</button>
        </div>
    </div>
  )
}

export default Expert
