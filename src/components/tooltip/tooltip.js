// Importing styles
import './tooltip.css';

// Creating and Exporting Tooltip Component
export default function Tooltip({postion}) {
    return(
        <div  className="container" >
            <div className="tooltip">
                Hover over me!<button type='button' className={`tooltip-text ${postion}`}>Hi, I am here.</button>
            </div>
        </div>
            
    )
}