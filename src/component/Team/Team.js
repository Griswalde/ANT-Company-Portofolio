import React from 'react'
import "./team.css";
const Team = () => {

    const data = [
        {
            id:1,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        {
            id:2,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        {
            id:3,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        {
            id:4,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        {
            id:5,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        {
            id:6,
            name:"Luke",
            content: "it is not every day that you came across a passionate",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

        },
        
        
    ]

  return (
    <div className='container team-members'>
        <div className='section_title'>
                <h5>Team</h5>
                <span className="line"></span>
                </div>

                <div className='row'>
                  {data.map((item,index)=>(
                    <div className='col-xl-4 col-lg-4 col-md-2 col-sm-12'>
                        <div className='card team-member-item'>
                            <img src={item.img} alt="team image"/>
                            <div className='team-info'>
                                <h6>
                                    {item.name}
                                </h6>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                        </div>

                    </div>
                  ))}
                </div>
    </div>
  );
};

export default Team