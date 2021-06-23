import React from 'react';

function DetailThumb({images,setIndex}) {
       return (
        <div className="thumb">
            {
                images.map((img, index)=>(
                    <img src={img} alt="" key={index} 
                    onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}

export default DetailThumb;