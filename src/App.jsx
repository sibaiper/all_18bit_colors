import ColorDialog from "./components/color_dialog";

import redColors from "./colors/red.json"
import orangeColors from "./colors/orange.json"
import yellowColors from "./colors/yellow.json"
import greenColors from "./colors/green.json"
import blueColors from "./colors/blue.json"
import magentaColors from "./colors/magenta.json"

import { MoveUpRightIcon } from "lucide-react";

function App() {

  return (
    <>
      <div className="max-w-[1500px] w-[80%] mx-auto">
        <h1 className="text-2xl font-display mt-18">Every 18-Bit Color:</h1>
        <p className="opacity-70 mb-4 mt-[-5px] font-sans flex items-center gap-0">Made by&nbsp;<a className="underline font-bold text-rose-400 flex items-center" target="_blank" href="https://sibai.me">Sibai <MoveUpRightIcon size={18} /></a></p>
      </div>
      <div className="max-w-[1500px] w-[80%] mx-auto">
        <ul className="flex flex-col mx-auto">
          <li key={"#E70406"}>
            <ColorDialog bgc={"#E70406"} colors_array={redColors} color={"red"}></ColorDialog>
          </li>
          <li key={"#FF9C05"}>
            <ColorDialog bgc={"#FF9C05"} colors_array={orangeColors} color={"orange"}></ColorDialog>
          </li>
          <li key={"#FFDF5D"}>
            <ColorDialog bgc={"#FFDF5D"} colors_array={yellowColors} color={"yellow"}></ColorDialog>
          </li>
          <li key={"#50E415"}>
            <ColorDialog bgc={"#50E415"} colors_array={greenColors} color={"green"}></ColorDialog>
          </li>
          <li key={"#67F8FE"}>
            <ColorDialog bgc={"#67F8FE"} colors_array={blueColors} color={"blue"}></ColorDialog>
          </li>
          <li key={"#D968F8"}>
            <ColorDialog bgc={"#D968F8"} colors_array={magentaColors} color={"magenta"}></ColorDialog>
          </li>
        </ul>
      </div>
      <div className="max-w-[1500px] w-[80%] mx-auto py-2">
        <p>Total number of colors: 262,144</p>
        {/* <p>Average number of colors per range: {Math.round(262144/6)}</p> */}
      </div>
    </>
  );
}

export default App;
