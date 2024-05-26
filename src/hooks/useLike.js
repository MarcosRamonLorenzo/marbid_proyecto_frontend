import { useContext } from "react";
import { LikeContext } from "@/contexts/LikeProvider";

const useLike = ()=>{
    const likeContext = useContext(LikeContext);
    return likeContext;
}

export default useLike;