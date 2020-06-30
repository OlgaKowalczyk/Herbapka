import React from 'react';

const LeafIcon = ({type}) => {
    console.log(type)
  
    return <div className={`teaString_leaf-icon leaf-icon-${type}`}></div>
}

export default LeafIcon;