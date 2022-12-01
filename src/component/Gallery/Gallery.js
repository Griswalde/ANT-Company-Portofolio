import React  from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./gallery.css";

const images = [
  
"https://drive.google.com/uc?export=view&id=1O3sBMbcpvcNjegiFARjvEyxJEG8GPIID",
"https://drive.google.com/uc?export=view&id=1E6J7TYM9W6TuxZjQ0ffe4T8A9KjPYGpl",
"https://drive.google.com/uc?export=view&id=1f_Huffq_Inr-cAYYePASH1kSRFS4A7Fg",
"https://drive.google.com/uc?export=view&id=1pvS4ab8jSKwdL3qmiB_AdvOCC-4jfU4s",
"https://drive.google.com/uc?export=view&id=1nO_kLMT1WIK2hDlG24_dPLGApA6cvfUS",
"https://drive.google.com/uc?export=view&id=1suRDK68WqYY1gMa3rdC4KbQ2folEMuS-",
"https://drive.google.com/uc?export=view&id=14oXkeup7zskB2OWk7sMDj_LWDZ73Ap87",
"https://drive.google.com/uc?export=view&id=1rrJ1jWcJIU3c_5ZiSTczKbuVs_06QkUN",
"https://drive.google.com/uc?export=view&id=1flBBJN5nwNNJ65F7OYCAmpBnPzvjtW9U",
"https://drive.google.com/uc?export=view&id=16gMqDKMx82HLWdJATYTfQGfhviwjuDxO",
"https://drive.google.com/uc?export=view&id=1JnJWZPIltmD7MF1pagjHSN7qoOpzDGKD",
"https://drive.google.com/uc?export=view&id=1AO0oNxa3GazOeywrwjv9son9mrfByh0b",
"https://drive.google.com/uc?export=view&id=1o8dI0vafb7OpOp2PtSoAXc1sY8pz7i1C",
"https://drive.google.com/uc?export=view&id=1qY4wNwFHD241-c4Pkrl4IDgk7_s5SLu2",
"https://drive.google.com/uc?export=view&id=1xubyqIGyXuJz2UcxS6btdQXo9KM5egdL",
"https://drive.google.com/uc?export=view&id=1b5JIc5IB_5psnmOEfv_sF4QpTvgQ6y9I",
"https://drive.google.com/uc?export=view&id=1sLg2ax8jLdgtxJXVlC8NUm_PYBp1tWQi",

  
]

const Gallery = () => {

    

  return (
    <>

    <div className="section_title">
        <h5><a href='https://www.instagram.com/ant__production/'>Ant production</a> 
            </h5>
        <span className="line"></span>
      </div>
    <div style={{ padding: '10px' }}>

    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: 'pointer'}}
                            alt=""
        
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      
    </div>
            </>
  )
}

export default Gallery