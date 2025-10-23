import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function ColorDialog({ color, colors_array, bgc }) {
  const [open, setOpen] = useState(false);

  const trigger_styles = {
    width: "100%",
    height: 100,
    backgroundColor: bgc,
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger style={trigger_styles} className="mx-auto cursor-pointer" />
      <DialogContent className="bg-black h-[80%] w-[80%] flex flex-col px-0 pb-0! overflow-hidden">
        <DialogHeader className="px-4">
          <DialogTitle className="text-white text-xl">
            <span className="font-black uppercase">{color}</span>
          </DialogTitle>
        </DialogHeader>

        {/* full-height container for the list */}
        <div className="flex-1 min-h-0"> 
          {/* min-h-0 ensures flex child can shrink properly */}
          <ListOfColors colors_array={colors_array} isOpen={open} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function ListOfColors({ colors_array, isOpen }) {
  const [ready, setReady] = useState(false);

  // wait until dialog is fully open before rendering AutoSizer
  useEffect(() => {
    if (isOpen) {
      // wait until the dialog animation is also done
      const id = setTimeout(() => setReady(true), 200); // 200 is the length of the animation
      return () => clearTimeout(id);
    } else {
      setReady(false);
    }
  }, [isOpen]);

  if (!ready || !Array.isArray(colors_array)) return null;

  return (
    <div className="flex-1 w-full h-full">
      <AutoSizer>
        {({ height, width }) => (
          <List
            // className="no-scrollbar" // optional but useless
            height={height}
            width={width}
            itemCount={colors_array.length}
            itemSize={40}
            itemData={colors_array}
          >
            {({ index, style, data }) => {
              const color = data[index];
              return (
                <div
                  className="border-y-[0.5px] border-neutral-800"
                  style={{
                    ...style,
                    background: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), ${color}`,
                    backgroundSize: "20% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 1rem",
                  }}
                >
                  <span className="italic text-xs">#{index}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> {color}
                </div>
              );
            }}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
