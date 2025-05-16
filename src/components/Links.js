import React from "react";


function Links(props) {
    console.log(`this is the github link: ${props.github}`);
    console.log(`this is the linkedin link: ${props.linkedin}`);
    console.log(props);
    console.log(props)
  return (
    <div id="links">
      <h3>Links</h3>
        <a href="{props.github}" target="_blank">{props.github}</a>
        <a href="{props.linkedin}" target="_blank">{props.linkedin}</a>
    </div>
  );

}

export default Links;