import React from "react";
import BiggestCard from "../components/biggestCard";
import OddAndEvenCard from "../components/oddAndEvenCard";
import WeekdayNumber from "../components/weekdayNumber";

export default function Exercises() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${require("../assets/pexels-ruslan-burlaka-40570-140945.jpg")})`,
          backgroundSize: "cover",
          width: "100%",
          height: "50%",
          padding: "2%",
        }}
      >
        <h1 style={{color:"white"}}>Exercises</h1>
      </section>

      <section
        style={{
          display:"flex",
          width: "100%",
          padding: "2%",
          marginBottom:"2%"
        }}
      >
       <BiggestCard/>
       <OddAndEvenCard/>
       <WeekdayNumber/>
      </section>
    </>
  );
}
