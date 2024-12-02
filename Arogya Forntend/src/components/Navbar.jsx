import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="flex justify-between items-center p-5 m-10 border rounded-lg sticky ">

        <span className="text-green-600">Aroyga</span>
        
        <ul className="flex justify-center gap-4">
          <li className="hover:text-blue-600">Home</li>
          <li className="hover:text-blue-600">About Us</li>
          <li className="hover:text-blue-600">Hospitals</li>
          <li className="hover:text-blue-600">24/7 Support</li>
           <li className="hover:text-blue-600">Contact us</li>
        </ul>

        <ul className="flex gap-5">
            <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 rounded-md">Login</button>
            </Link>
          <button className=" px-4 py-2 bg-slate-200 text-black rounded-lg">Signup</button> 
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  