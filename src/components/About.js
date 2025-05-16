import React from "react";
import Links from "./Links";
// import user from "../data/user";


function About(props) {
  console.log(`these are the ABOUT props: ${props}`);
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
