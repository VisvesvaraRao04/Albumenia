import React, { useEffect, useState } from "react";
import axios from "axios";
import imagenotfound from "./assets/noimagefoundimage.png";
import Title from "./Title";
import LightPillar from "./LightPillar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

const ImagesContainer = () => {
  let [search, setSearch] = useState("HD stock Image");
  let [loading, SetLoading] = useState(false);

  let [data, setData] = useState([]);
  let [number, setNumber] = useState(32);
  let fetchImages = async () => {
    try {
      SetLoading(true);

      const response = await axios(
        `https://pixabay.com/api/?key=54120282-ae606bfaef46fe3a43ec2b613&q=${search}&image_type=photo&per_page=${number}`,
      );

      if(search.trim().length>0)
      {
        setData(response.data.hits);
      }
    } catch (e) {
      console.log(e);
    } finally {
      SetLoading(false);
    }
  };

  let keydown = (e) => {
    if (e.key === "Enter") {
      fetchImages();
    }
  };
  useEffect(() => {
    fetchImages();
  }, [number]);
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  let navigate = useNavigate();
  let imagesperpageinc = () => {
    setNumber(number+20)
  };
  let imagesperpagedec = () => {
    if(number>=32)
      setNumber(number-20)
  };
  
  
  return (
    <div id="mainDiv">
      <div id="topdiv">
        <div className="backgroundImage bitDiv">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            className="backgroundImage"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
          <Title
            text="Albumenia"
            className="text-2xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
        </div>
        <div id="searchbardiv">
          <input
            type="text"
            id="input_box"
            onKeyDown={keydown}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Text"
          />
          <button onClick={fetchImages}>Search</button>
        </div>
      </div>
      <div id="imageContainer">
        {loading ? (
          Array({number})
            .fill()
            .map((_, index) => (
              <Skeleton
                key={index}
                height={200}
                width={250}
                borderRadius={10}
                style={{ margin: "10px" }}
              />
            ))
        ) : data.length !== 0 ? (
          data.map((imgs) => (
            <img
              onClick={() => navigate("/details", { state: imgs })}
              className="images"
              src={imgs.webformatURL}
              alt="img"
              key={imgs.id}
            />
          ))
        ) : (
          <img id="imagenotfound" src={imagenotfound} alt="image not found" />
        )}
      </div>
      {data.length !== 0 &&
        (data.length === 32 ? (
          <button
            className="incButtons"
            style={{ backgroundColor: "white",color:'black', width: "34%",marginTop:'2vh' }}
            onClick={imagesperpageinc}
          >
            View More
          </button>
        ) : (
          <div style={{display:'flex',width:'100vw',justifyContent:'center',alignItems:'center',gap:'2vh',marginTop:'2vh'}}>
          <button
            style={{ backgroundColor: "white",color:'black' ,width: "34%" }}
            onClick={imagesperpagedec}
          >
            View Less
          </button>
          <button
            className="incButtons"
            style={{ backgroundColor: "pink", width: "34%" }}
            onClick={imagesperpageinc}
          >
            View More
          </button>
          </div>
        ))}{" "}
    </div>
);
};
export default ImagesContainer;
