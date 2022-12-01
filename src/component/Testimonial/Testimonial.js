import React,{useState} from 'react'
import "./testimonial.css"




const Testimonial = () => {

    const data = [
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name":"Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
        {
            "img":"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            "content":"it is not every dayy that you come across a passionate and trustworthly financial advisor",
            "name": "Luke",
            "position":"designer"
        },
    ];

    const [showMorePost,setShowMorePost] = useState(6)

    const loadMore = ()=> {
        setShowMorePost((prev) => prev + 3);
    };



  return (
    <div className='container testimonial-section'>
        <div className='section_title'>
                <h5>Testimonial</h5>
                <span className="line"></span>
                </div>

                <div className='row'>
                    {data.slice(0, showMorePost).map((item,index)=> (
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>

                            <div className={index==1  ? "marked-content-card":"content-card"}>
                                <img src={item.img} alt="image"/>
                                
                                

                            </div>


                            </div>
                    ))}

                    {showMorePost>=data.length ? null : (
                        <span className='laod-mores-button' onClick={loadMore}>
                        Load More
                </span>
                    )}

                    


                </div>
    </div> 
  );
};

export default Testimonial