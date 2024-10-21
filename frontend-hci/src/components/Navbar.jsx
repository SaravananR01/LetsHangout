import React,{useState} from "react";
//import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useNavigate,Link } from "react-router-dom";

function Navbar(){
    const [nav,setNav]=useState(false);

    // function handleNav(){
    //     setNav(!nav);
    // }
    const navigate = useNavigate();
    function handleNavigate(){
        navigate('/');
    }

    return(
    <div>
                <div className="flex justify-between items-center h-20 max-w-[1240px] px-4 mx-auto">
                        {/* <img className="h-10 w-10 mr-2" src={logo} alt="logo" /> */}
                    <h1 className="w-full text-3xl tracking-tight font-semibold text-[#E85A4F] font-sans cursor-pointer" onClick={handleNavigate}>Let's Hangout</h1>
                    
                    <ul className="hidden md:flex text-[#E98074]">
                        <Link to="/howtouse"><li className="p-4 text-nowrap">How to Use</li></Link>
                        <li className="p-4">About</li>
                        <li className="p-4">Contact</li>
                    </ul>
                    {/* <div onClick={handleNav} className="block md:hidden">
                        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                    </div>
                    <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 ease-in-out duration-300" : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-3xl tracking-tight font-semibold mx-auto">Let's Hangout</h1>
                        <ul className="uppercase bg-gray-50 p-4">
                            <li className="p-4 border-b">Home</li>
                            <li className="p-4 border-b">Company</li>
                            <li className="p-4 border-b">About</li>
                            <li className="p-4">Contact</li>
                        </ul>
                    </div> */}
                  
                </div>
                <hr className="h-px my-4 bg-[#E98074] border-0 flex justify-between items-center max-w-[1240px] mx-auto" />
    </div>);
}

export default Navbar;