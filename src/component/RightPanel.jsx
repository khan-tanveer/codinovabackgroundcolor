import React, {useEffect} from "react";

const RightPanel = (props) => {
  
  console.log('props:', props.tv)
  let cTv = props.tv;
  
  useEffect(()=>{},[props])
  
  console.log('dsf', `#${cTv}`);



  const styles ={
    width: '50%',
    height: '100vh',
    backgroundColor: cTv? `#${cTv}` : "#c6c6c6",
  }


  return (
    <div
    style={styles} 
    // style={{ width: "50%", backgroundColor: tv, height: "100vh" }}
    >
      <h1>hello right Panel</h1>
    </div>
  );
};

export default RightPanel;
