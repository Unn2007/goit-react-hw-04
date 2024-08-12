import { forwardRef, useRef} from "react";
const LoadMoreBtn = forwardRef(({props}, ref) => {
  
  return (<button ref={ref} 
    type="button" 
    onClick={props}>Load more</button>)
});


export default LoadMoreBtn;






