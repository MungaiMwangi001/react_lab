import React, { useState } from "react"


function ColourPicker() {
    const [color,setcolor] = useState("#90dee0")
    function handlecolorChange(event){
        setcolor(event.target.value)
    }
    return (
        <div className="ColorPicker">
            <h1>color picker</h1>
            <div className="color-display"  style={{backgroundColor: color}}>
                <p>Selected Color: {color } </p>

            </div>
            <label > Select a Color: </label>
            <input type="color" value={color} onChange={handlecolorChange} />

            


        </div>
    )

}

export default ColourPicker