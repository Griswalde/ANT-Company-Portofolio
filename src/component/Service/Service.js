import React from 'react'
import "./service.css"
import { FcOk } from "react-icons/fc";


const Service = () => {

    const servicedata= [

        {
            id:1,
            service1: "ANT Production",
            service2: "ANT Media",
            service3: "ANT Idea",

        },
        {
            id:2,
            service1: "ANT Production",
            service2: "ANT Media",
            service3: "ANT Idea",

        },
        {
            id:3,
            service1: "ANT Production",
            service2: "ANT Media",
            service3: "ANT Idea",

        }
    ];

    const colors = [
        "#CD5C5C",
        "#808000",
        "#800080",
        "#000080",
        "#303095",
        "#9FE2BF",
        "#40E0D0",
        "#6495ED"
    ]

  return (
    <div className='container service-section'>

            {/* section tittle */}

            <div className='section_title'>
                <h5>Service</h5>
                <span className="line"></span>
                </div>

                <div className='row'>
                    {servicedata.map((item,index)=>(
                       
                       <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'
                       key={index}>
                       
                       <div className='services'>

                            <span className='service-number' style={{ backgroundColor:colors[index] }}>
                            
                                <p>{item.id}</p>
                            </span>

                           <div className='list-of-service'>

                            <p>
                                <FcOk size={20} style={{ margin: "5px" }} /> 
                                {item.service1}
                                </p>
                                <span className='service_line'></span>
                            <p>
                                <FcOk size={20} style={{ margin: "5px" }} /> 
                                {item.service2}
                                </p>
                                <span className='service_line'></span>
                            <p>
                                <FcOk size={20} style={{ margin: "5px" }} /> 
                                {item.service3}
                                </p>
                                

                            </div> 
                            

                       </div>


                       </div>
                        
                    ))}
                </div>

    </div>



  )
}

export default Service