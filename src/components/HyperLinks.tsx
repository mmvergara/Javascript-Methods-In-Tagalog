
import './HyperLinks.css'



export default function HyperLinks(TnL:any) {
    const {link,topic} = TnL.TnL
    return (
        <div>
            <a className='hyperLinks' href={link} target='_blank' rel="noreferrer"> {topic}  </a> 
        </div>
    );
  }
  