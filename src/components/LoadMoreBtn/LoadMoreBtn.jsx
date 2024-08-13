import { forwardRef, useRef} from "react";
const LoadMoreBtn = forwardRef(({searchMore}, ref) => {
  
  return (<button ref={ref} 
    type="button" 
    onClick={searchMore}>Load more</button>)
});


export default LoadMoreBtn;






