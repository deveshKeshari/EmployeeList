import { useState } from "react";
import Information from "./Information";
import React from "react";
const Display =({data,handleRemove})=>{
      return <>
               {
                  data.map(({name,email,number,id,componentOne:PDFUploader,componentTwo:ImageUploader},idx)=>{
                    return <React.Fragment key={idx}><div key={id} className="display-container">
                        
                   <div id="serial">{idx+1}.</div>
                    <div><Information name={name}/></div>
                    <div><Information name={email}/></div>
                    <div><Information name={number}/></div>
                    <ImageUploader/>
                    <PDFUploader/>
                    </div>
                   <div><button onClick={()=>handleRemove(id,idx)} id="delete">Delete Entry {idx+1}</button></div>
                    </React.Fragment>
                  })
               }
      </>
}
export default Display;