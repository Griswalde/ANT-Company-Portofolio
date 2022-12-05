import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./media.css";

const Media = () => {
  const GalleryData = [
    {
      id: 1,
      titile: "bike",
      image:
        "https://drive.google.com/uc?export=view&id=1O3sBMbcpvcNjegiFARjvEyxJEG8GPIID",
    },
    {
      id: 2,
      titile: "car",
      image:
        "https://drive.google.com/uc?export=view&id=1f_Huffq_Inr-cAYYePASH1kSRFS4A7Fg",
    },
    {
      id: 3,
      titile: "car",
      image:
        "https://drive.google.com/uc?export=view&id=1rrJ1jWcJIU3c_5ZiSTczKbuVs_06QkUN",
    },
    {
      id: 4,
      titile: "car",
      image:
        "https://drive.google.com/uc?export=view&id=1sLg2ax8jLdgtxJXVlC8NUm_PYBp1tWQi",
    },
    {
      id: 5,
      titile: "bike",
      image:
        "https://drive.google.com/uc?export=view&id=1flBBJN5nwNNJ65F7OYCAmpBnPzvjtW9U",
    },
    {
      id: 6,
      titile: "bike",
      image:
        "https://drive.google.com/uc?export=view&id=12QTajCr3DNgaFw6T2Kg_F76MZM3h5_VY",
    },
    {
      id: 7,
      titile: "cycle",
      image:
        "https://drive.google.com/uc?export=view&id=1PGVi0FBdaXivT-r3RxDxu4tOTq9vCP1r",
    },
    {
      id: 8,
      titile: "cycle",
      image:
        "https://drive.google.com/uc?export=view&id=1_Oj-RxfBCs6yjUL6qsNDOx1ymtBEblvh",
    },
  ];

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <>
      <div className="section_title">
        <h5>
          <a href="https://www.instagram.com/ant__production/">
            Ant production
          </a>
        </h5>
        <span className="line"></span>
      </div>

      <div style={{ padding: "10px" }}>
        
      <div className="filterItem">

            <ul>
        
              {collection.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      gallery_filter(item);
                    }}
                  >
                    {item}
                  </button>
                  
                </li>
              ))}
              
            </ul>
            
            
            
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="10px">
                  {data.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      style={{
                        width: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          
        
      </div>
    </>
  );
};

export default Media;
