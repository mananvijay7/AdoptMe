//import React from "react";

// const Pet = (props) => {
//       return React.createElement("div", {}, [
//          React.createElement("h1", {}, props.name),
//          React.createElement("h2", {}, props.animal),
//          React.createElement("h2", {}, props.breed)   
//       ]);
//}

//We can write this way as well instead of using createElement.
//Because of Vite react is able to read the below code and convert it into createElement way in the backend
const Pet = (props) => {
      return (
            <div>
                  <h1>{props.name}</h1>
                  <h2>{props.animal}</h2>
                  <h2>{props.breed}</h2>
            </div>
      );
};

export default Pet;