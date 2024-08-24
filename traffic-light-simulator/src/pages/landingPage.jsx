import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const lightBackgroundColors = [
    "#F0F8FF", // Alice Blue
    "#F5F5F5", // Ghostly
    "#E0FFFF", // Light Cyan
    "#F0FFFF", // Azure
    "#F5FFFA", // Mint Cream
    "#F8F8FF", // Ghost White
    "#F0FFF0", // Honeydew
    "#FAF0E6", // Linen
    "#FAEBD7", // Antique White
    "#F5F5DC", // Beige
    "#FFF5EE", // Seashell
    "#F0E68C", // Khaki
    "#FFF0F5", // Lavender Blush
    "#F0FFFF", // Light Cyan
    "#FDF5E6", // Old Lace
  ];

  const [bgColor, setBgColor] = useState(
    Math.floor(Math.random() * lightBackgroundColors.length)
  );
  //console.log("Colour codes",newBackgroundColors)
  //console.log("random number: ",bgColor)

  return (
    <section
      style={{
        backgroundColor: lightBackgroundColors[bgColor],
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "10%",
      }}
    >
      <div style={{ width: "50%" }}>
        <h1 className="w3-jumbo">
          The best way to showcase your projects is with react.
        </h1>{" "}
        <br></br>
        <p>
          Take a look at all the awesome things you do with comparison
          operators.
        </p>
        <br></br>
        <Link to={"exercises"} style={{ marginRight: "2%" }}>
          <button className="w3-button w3-indigo w3-round">Exercises</button>
        </Link>
        <Link to={"contact"}>
          <button className="w3-border-black w3-round" style={{backgroundColor:"transparent"}}>Contact</button>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("../assets/pexels-cahyorizki-8330846-removebg-preview.png")})`,
          backgroundSize: "cover",
          width: "50%",
        }}
      ></div>
    </section>
  );
}
