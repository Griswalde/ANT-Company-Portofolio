import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./idea.css";
import ScrollToTop from "react-scroll-to-top";

const Media = () => {
  const GalleryData = [
    {
      id: 1,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1ZBtJYgWMOJtA2zNHx0pnmkbYDdwfSFi1",
    },
    {
      id: 2,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1_K_dGhVM8ZLe6CAQCs4jcC46aGKfzPTt",
    },
    {
      id: 3,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=16B_1V1amkcAFDUwGOHEG_hIVHWWN1J0l"
    },
    {
      id: 4,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1ARycXjVtZYkDOkkYUTMWcPjOc6MNkggG",
    },
    {
      id: 5,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=126QWMOSzPVtUemlQbilwtT6yBqNnqjOC",
    },
    {
      id: 6,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1GUiqo2ye2PQWYt1YicwV0AEjV2TKz6Tk",
    },
    {
      id: 7,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1NstVzMagnnnI_Sur_ajj6g6CJJPCrxEz",
    },
    {
      id: 8,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=19SQ4XEZXU5x8yO2fUm2Y6QUGY_vjfnZp",
    },
    {
      id: 9,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1e74pPJgtZ1rzkUHEojE2i1GcCntyTkmn",
    },
    {
      id: 10,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1Zg-VZsXqcG98soLqNwAde1Cyr9UfHTp5",
    },
    {
      id: 11,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1HTRBlJqSWQm4eBIRq-y_0XH1C_Thf-CQ",
    },
    {
      id: 12,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1OjXCn_IkN_Kr3V_reRHf26I4B_Q7jQvX",
    },
    {
      id: 13,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1z3AKrpI7EOM_FuIefWuSMGE7hkqJEyAp",
    },
    {
      id: 14,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1EeGr00OslKQJebCyhCxJvUqGwxUhTA8y",
    },
    {
      id: 15,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=183tDdncs9zG-E3ABXTJkFQg3Q-_aj8Lp",
    },
    {
      id: 16,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1PdO9Ug_cisiLU6256_NUapYdZUGAMH5a",
    },
    {
      id: 17,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1bFbz58FhHmmBMJ3AyneYLH-Hl1vIeZj-",
    },
    {
      id: 18,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1G0m4ntu5-FzMboU-rWaLmMQ26CsCNzzR",
    },
    {
      id: 19,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=19bXMdl3KUg17b7YJvJDyfNhzo-MjbuCi",
    },
    {
      id: 20,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1Km4RKb71qTLQoXw0u2vvmNJaGJgilut_",
    },
    {
      id: 21,
      titile: "Double strain",
      image:
      "https://drive.google.com/uc?export=view&id=1kwTqkr6y35SIavzvep0GK0opUoFRvoSw",
    },
    {
      id: 23,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1dYFsosy8_t_goTY5CXCAJbvMbZXkd1oq",
    },
    {
      id: 24,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1c5CNRnREYGHy3UdBwkXMZoI9fvMB-JE5",
    },
    {
      id: 25,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1VECuivZujTx6XNFjNMcKMuTYAnx_nKfb",
    },
    {
      id: 26,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1lwFZT4M2JnuRmANRXxh1cO-k9VtPHZFc",
    },
    {
      id: 27,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=12QTajCr3DNgaFw6T2Kg_F76MZM3h5_VY",
    },
    {
      id: 28,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1h5WO3uGiQb6J9kkyyRmSNgnmSwYsyOSv",
    },
    {
      id: 29,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1u-cFzCWpZYsa78lLd2OKaworCLDdgWr2",
    },
    {
      id: 30,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1-mT9cZnRrwD44thzFfiLBYXkjEgarrJs",
    },
    {
      id: 31,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1XfA4WA_k_aADu7R6jLt2qkyL9CVvFOWm",
    },
    {
      id: 32,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1KQi49x0Kt4KEFlPAcnDoxwW92K59do0B",
    },
    {
      id: 33,
      titile: "Porgy & bess",
      image:
      "https://drive.google.com/uc?export=view&id=1u09ab0JXrFzWeWDCgsUQhoylWQUAHcHV",
    },
    {
      id: 34,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1idjkINAgxZF904NWmSRNBHxt2G36_0DU",
    },
    {
      id: 35,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1868XEzTFo1bFrSc3gGDHnJgHGper6gN6",
    },
    {
      id: 36,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1xTPuuIY-TlPUhpIWH6_noIEd_pDhUB5C",
    },
    {
      id: 37,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1MwSGQxossiVmqg-SxJtB1INZANVaukWw",
    },
    {
      id: 38,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1SUYJ4jTMcfRC2CzADCeNk90sDaDyK9eg",
    },
    {
      id: 39,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1xS-Nyawnxd4wj7GJZ9wvb-_KB5upjyvx",
    },
    {
      id: 40,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=13akkqg1UkxazXI7hZprXcuvRO8ecpdHO",
    },
    {
      id: 41,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1JPmKQk-gV4I2QUTjsyudJflzRjJKml5M",
    },
    {
      id: 42,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1_Oj-RxfBCs6yjUL6qsNDOx1ymtBEblvh",
    },
    {
      id: 43,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1uJDL6hWFiFDDNuw3VZEloyrzYorVE27L",
    },
    {
      id: 44,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1PGVi0FBdaXivT-r3RxDxu4tOTq9vCP1r",
    },
    {
      id: 45,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=135wD0jgXS51TlozDYa3zhsq6loersHpe",
    },
    {
      id: 46,
      titile: "Travouse",
      image:
      "https://drive.google.com/uc?export=view&id=1Cc-vFMJrmt-MM23XWwz-rSp77kWuVpgW",
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
    <div className="Ant-Idea">
      <div className="section_title">
        <h3>
          <a href="https://www.instagram.com/ant__idea/" target="_blank">
            Ant Idea
          </a>
        </h3>
        <span className="line"></span>
      </div>

      <div style={{ padding: "10px" }}>
        
      <div className="filterItem">

            <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
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
            <ScrollToTop smooth />
          
        
      </div>
      </div>
    </>
  );
};

export default Media;
