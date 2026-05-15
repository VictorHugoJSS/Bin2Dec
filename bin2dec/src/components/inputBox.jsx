import { useState } from "react"

function inputBox(){
    const [bin, setBin] = useState('');
    
    return(
        <>
        <div className="input">
            <label for="Bin">Binary</label>
            
        </div>
        </>
    )
}

export default inputBox