import { Children, ReactNode, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";


function isIntersecting(nodeOne: React.RefObject<null | HTMLDivElement>, nodeTwo: React.RefObject<null | HTMLDivElement>) {
  if (nodeOne === null || nodeTwo === null) {
    return false;
  }

  if (nodeOne.current !== null && nodeTwo.current !== null) {
    const nodeOneRect = nodeOne.current.getBoundingClientRect();
    const nodeTwoRect = nodeTwo.current.getBoundingClientRect();

    const isInSegment = (segmentStart: number, segmentEnd: number, position: number) => {
      return segmentStart <= position && position <= segmentEnd;
    }

    if (isInSegment(nodeTwoRect.left, nodeTwoRect.right, nodeOneRect.left) &&
      isInSegment(nodeTwoRect.top, nodeTwoRect.bottom, nodeOneRect.top)) {
      return true;
    }
  }

  return false;
}

export function Roadmap() {
  const [rotateDeg, setRotateDeg] = useState(0);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const width = 24;
  const height = 24;

  const viewBox = `0 0 ${width} ${height}`;

  // const rotateInterval = 5;
  // const degreeIncrement = 1;

  // useEffect(() => {
  //   setInterval(() => {
  //     setRotateDeg(prevDeg => prevDeg + degreeIncrement);
  //   }, rotateInterval);
  // }, []);

  const navigate = useNavigate();

  const redBox = useRef< HTMLDivElement | null>(null);
  const userBox = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const newStruct = {
      x: e.pageX,
      y: e.pageY,
    };

    setTimeout(() => {
      setPos(() => newStruct);
    }, 100);
  }


  useEffect(() => {
    if (redBox !== null && userBox !== null) {
      if (isIntersecting(userBox, redBox)) {
        console.log("Red box and user box is intersecting");
        navigate("/map");
        // setText("Red box and user box is intersecting");
      }
    }
  }, [pos]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      <div className="w-full h-full">
        <div className=" place-items-center" >
          <div className="h-5 w-5 bg-red-700" ref={redBox}>

          </div>
        </div>

        <div className="w-5 h-5 rotate-100 fixed"
          style={{
            rotate: `${rotateDeg}deg`, 
            top: pos.y + "px", 
            left: pos.x + "px"
          }}
          ref={userBox}>
          <svg fill="#000000" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M21,21H3L12,3Z"></path></g>
          </svg>
        </div>
      </div>
    </>
  );
}

