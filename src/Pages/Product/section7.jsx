import React from "react";
import Sec3 from "../../assets/pr lumps.png";
import "../Product/sec7.css";

export default function Section7() {
  return (
    <>
             <div className="quartzOuter">
               <div className="quartzInner">
       
                 <div className="quartzTextBox">
                   <p className="tagline">
                     Hard dense quartzite material formed under 
                     natural metamorphic conditions-offering
                     exceptional durability,strength and thermal
                     stability.
                   </p>
       
                   <h2 className="title">
                     QUARTZITE LUMPS
                   </h2>
       
                   
       
                   <p className="description">
                     Ideal for construction,infrasturcture,refractory,and heavy-duty
                     industrial applications where perfornmance under stress is critical.
                   </p>
                 </div>
       
                 
                 <div className="quartzImageWrap">
                   <div className="quartzImageBox">
                     <img src={Sec3} alt="Quartz Grits" />
                   </div>
                 </div>
       
               </div>
             </div>
           </>
  );
}
