import React from "react";
import Image from "next/image";

const ImpactPage = () => {
  return (
    <>
      <div
        className="bg-black vh-100 d-flex flex-column align-items-center" // Adjust position
      >
        {/* Top Dotted Red Design Image */}
        <div className="container-fluid d-flex" style={{ height: "100vh" }}>
          {/* Parent container */}
          <div className="position-relative h-100 w-100">
            <div
              className="position-absolute z-1"
              style={{ right: 0, top: "-80px" }}
            >
              <Image
                src="/images/homeImage/system_img.png"
                alt="System Illustration"
                width={900}
                height={600}
                className="img-fluid rounded h-0"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Text overlay */}
            <div
              className="position-absolute d-flex flex-column justify-content-center rounded text-white z-3"
              style={{
                top: "60%",
                left: "0",
                right: "5%",
                transform: "translateY(-50%)",
                background: "#ED2225",
                padding: "60px",
                maxWidth: "700px",
                width: "100%",
              }}
            >
              <p className="fw-bold display-5">
                <span className="fw-bold text-black">IDEAS</span> THAT
              </p>
              <p className="fw-bold display-5">
                MAKE AN <span className="fw-bold text-black">IMPACT</span>
              </p>
              <p className="mt-3">
                We deliver practical, innovative solutions that solve real
                challenges. Whether designing a new website or enhancing your
                online visibility, our approach is results-driven and grounded
                in expertise.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
         <Image
                src="images/homeImage/dotted-red-image.svg"
                alt="System Illustration"
                width={100}
                height={100}
                className="img-fluid rounded w-75 position-relative z-0"
                style={{ objectFit: "cover"}}
                priority
              />
      </div> */}
      
      </div>
    
    </>
  );
};

export default ImpactPage;
