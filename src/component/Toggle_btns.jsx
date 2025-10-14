// const [toggleStatus,setToggleStatus] = useState("All")

// <Container>
//       <div className="text-right">
//       <button
//   className={`rounded-l-md toggle-btn ${
//     toggleStatus === "All" ? "!bg-purple-500  !text-white" : ""
//   }`}
//   onClick={() => setToggleStatus("All")}
// >
//   All
// </button>

//         <button className={`toggle-btn ${
//     toggleStatus === "Pending" ? "!bg-purple-500  !text-white" : ""
//   }`} onClick={() => setToggleStatus("Pending")}>Pending</button>
//         <button className={`toggle-btn ${
//     toggleStatus === "Submitted" ? "!bg-purple-500  !text-white" : ""
//   }`} onClick={() => setToggleStatus("Submitted")}>Submitted</button>
//         <button className={` rounded-r-md  toggle-btn ${
//     toggleStatus === "Reviewed" ? "!bg-purple-500  !text-white" : ""
//   }`} onClick={() => setToggleStatus("Reviewed")}>Reviewed</button>
//       </div>
//     </Container>
//     </>
//   )
// }


import Container from "./Container";

const Toggles_btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  console.log("length", btns.length);

  return (
    <Container>
      <div className="text-right mb-[50px]">
        {btns.map((btn, ind) => (
          <button
            key={ind}
            className={`toggle-btn
              ${ind === 0 ? "rounded-l-md" : ""}
              ${ind === btns.length - 1 ? "rounded-r-md" : ""}
              ${toggleStatus === btn ? "!bg-purple-500 !text-white" : ""}
            `}
            onClick={() => setToggleStatus(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Toggles_btns;
