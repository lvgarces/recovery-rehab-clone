import Image from "next/image";
import CardWrapper from "@/app/components/card";

export default  function Home() {
    return (
        <div className="py-10"> 
        <CardWrapper dataType="articles"></CardWrapper>
        </div>
    )
  }