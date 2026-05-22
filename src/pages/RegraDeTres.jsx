import { useEffect, useState } from "react";
import IntroRegraDeTres from "../components/IntroRegraDeTres";
import { Input } from "../components/ui/input";
import CalcRegraDeTres from "@/components/CalcRegraDeTres";
import RegraDeTresTips from "@/components/RegraDeTresTips";

const RegraDeTres = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
      <div className="w-full max-w-[900px] mx-auto">
        <IntroRegraDeTres />
        <CalcRegraDeTres />
      </div>
      <div>
        <RegraDeTresTips />
      </div>
    </div>
  );
};

export default RegraDeTres;
