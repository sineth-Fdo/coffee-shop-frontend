
import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog";
  import Lottie from "lottie-react";
  import CoffeeLoaderLottie from "@/src/data/lottie/Coffee-loading-animation.json";

  interface CoffeeLoaderProps {
    open: boolean;
    loadingName?: string;
  
  }

const CoffeeLoader = (props : CoffeeLoaderProps) => {
    const { open, loadingName = "Loading . . ." } = props;

  return (
    <div>
      <Dialog open = {open} >
        <DialogContent className='border-none w-[100%] h-[70%] flex justify-center items-center bg-[#0000] shadow-none'>
                <div className="w-[40%] h-[40%] flex justify-center items-center relative ">
                    <div className=" flex flex-col justify-center items-center">
                        <Lottie 
                                animationData={CoffeeLoaderLottie} 
                                loop={true}
                                autoplay={true}
                                className="w-[100%] h-[100%] text-[#fff] "
                        />
                        <h1 className="text-white">{loadingName}</h1>
                    </div>
                </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default CoffeeLoader;
