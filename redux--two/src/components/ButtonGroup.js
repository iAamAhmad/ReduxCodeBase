import React from "react";
import { store } from '../store/index'
const ButtonGroup = ({ technologies }) => (

   <div>
      {technologies.map((tech, i) => (
         <button
            onClick={dispatchBtnAction}
            data-tech={tech}
            key={`btn-${i}`}
         >
            {tech}
         </button>
      ))}
   </div>
);
function setTechnology(text) {
   return {
      type: "SET_TECHNOLOGY",
      text: text
   }
}
function dispatchBtnAction(e) {
   const tech = e.target.dataset.tech;
   store.dispatch(setTechnology(tech));
}
export default ButtonGroup;