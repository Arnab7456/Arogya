import { useState } from "react";

const Signup = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [healthIssue, SethealthIssue] = useState("");

  const handelSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/patient/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          healthIssue,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("signup is done", data);
      } else {
        console.log("signup is not done", data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col justify-center gap-4" >
      <h2>SignUp to Aroyga</h2>
      <form onClick={handelSignup} className="   w-96 h-auto  border p-10">
         <input
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => SetFirstName(e.target.value)}
           className=" px-4 py-2 rounded-lg  m-2"
        />
         <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => SetLastName(e.target.value)}
           className=" px-4 py-2 rounded-lg  m-2"
        />
          <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => Setemail(e.target.value)}
           className=" px-4 py-2 rounded-lg  m-2"
        />
          <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
           className=" px-4 py-2 rounded-lg  m-2"
        />
          <input
          type="text"
          placeholder="healthIssue"
          value={healthIssue}
          onChange={(e) => SethealthIssue(e.target.value)}
           className=" px-4 py-2 rounded-lg  m-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg  m-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
