import React from 'react'
export const Education = () => {

  const Education = [
    {
      "id": 1,
      "year": "2025-PRESENT",
      "Course": "Full Stack Development Course",
      "Location": "Nettech India , Andheri",
      "p": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, architecto? Eos dignissimos fugit maiores. "

    },

    {
      "id": 2,
      "year": "2021-2024",
      "Course": "Bachelor's in Information Technology",
      "Location": "Smt. K. G Mittal College, Malad (West)",
       "p": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, architecto? Eos dignissimos fugit maiores. "

    },

    {
      "id": 3,
      "year": "2019-2021",
      "Course": "12th-Maharashtra HSC Board",
      "Location": "Nirmal JR College of Commerce and Science, kandivali ",
       "p": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, architecto? Eos dignissimos fugit maiores ."

    },

    {
      "id": 4,
      "year": "2019",
      "Course": "10th-Maharashtra SSC Board ",
      "Location": "St. Lawrence High School , Kandivali (East)",
       "p": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, architecto? Eos dignissimos fugit maiores. "

    }

  ]


  return (
    <>
      <div className="parent  w-full mt-20 ">

        <h1 className='text-center font-bold text-[30px]'>Experience & Education</h1>

        <div className="parent-Edu grid grid-cols-2  border-white w-350 gap-7 ">
            
            {
              Education.map((el, id) => (
                <div key={id} className='mt-12 flex  w-140'>

                  <div className="icon ">
                    <div className=' p-2 bg-amber-400'><i className="fa-solid fa-briefcase" style={{ color: "#ffffff", borderRadius:"50px"  }}></i></div>
                    <div className="blank border-2 w-[3px] h-[100px] ml-4 opacity-10"></div>
                  </div>

                  <div className="details ml-5 ">
                    <p className='bg-gray-900 rounded-3xl w-50 pl-3'>{el.year}</p>
                    <h1 className='mt-5 font-bold uppercase'>{el.Course}</h1>
                    <h2 className=' font-bold uppercase'>{el.Location}</h2>
                    <p className='mt-3'>{el.p}</p>
                  </div>

                </div>
              )) 
            }

        </div>

      </div>


    </>
  )
}


