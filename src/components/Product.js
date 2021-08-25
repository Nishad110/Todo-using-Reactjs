import React,{useImperativeHandle,useRef,forwardRef} from 'react';
import './Product.css';

function Product(props,ref) {
  const btn=useRef(null)
  useImperativeHandle(ref, () => ({
    hello: () => {
      console.log('Input is in focus');
      btn.current.focus()
    },
  }));
  return <input ref={btn} placeholder="type here" />;
}
  
export default forwardRef(Product);