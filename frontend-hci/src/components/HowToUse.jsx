import React from "react";

function HowToUse(){
    return(
       <div className="mb-4">
            <div className="m-11 text-white"> 
                <h1 className="p-10 font-mono bg-[#E98074] text-center text-5xl rounded-full hover:bg-[#E85A4F] hover:font-sans">How to use Let's Hangout?</h1>
            </div>
            <div className="m-11 p-2 rounded-3xl bg-[#E98074] grid grid-cols-3 grid-rows-3">
                <div className="m-2 p-5 col-span-2 col-start-1 col-end-3 row-start-1 row-end-1 bg-white rounded-full text-left font-mono hover:font-sans ">
                    <h1 className="text-xl">Why should you use Let's Hangout?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam minus veniam labore iste blanditiis fuga libero tenetur laborum eos pariatur corporis et, eveniet, nobis vitae excepturi, asperiores quod eius!</p>
                </div>
                
                <div className="m-2 p-5 col-span-2 col-start-2 col-end-4 row-start-2 row-end-2 bg-white rounded-full text-right font-mono hover:font-sans ">
                    <h1 className="text-xl">Why should you use Let's Hangout?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam minus veniam labore iste blanditiis fuga libero tenetur laborum eos pariatur corporis et, eveniet, nobis vitae excepturi, asperiores quod eius!</p>
                </div>
                <div className="m-2 p-5 col-span-2 col-start-1 col-end-3 row-start-3 row-end-3 bg-white rounded-full text-left font-mono hover:font-sans ">
                    <h1 className="text-xl">Why should you use Let's Hangout?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam minus veniam labore iste blanditiis fuga libero tenetur laborum eos pariatur corporis et, eveniet, nobis vitae excepturi, asperiores quod eius!</p>
                </div>
            </div>
       </div> 

    );
}

export default HowToUse;