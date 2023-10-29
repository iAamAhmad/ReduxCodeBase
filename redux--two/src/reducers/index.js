/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => { 
   switch (action.type) { 
   case "SET_TECHNOLOGY": 
   return { 
   ...state, 
   tech: action.tech
   }; 
   default: 
   return state; 
   } 
  }; 
  