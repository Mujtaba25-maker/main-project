// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//   <>
//   <div className="bg-black">
//     <Navbar/>
// </div>
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//     </>
//   );
// }


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1*3)}>+</button>
    </>
  );
}
export default Counter;