import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Links from '../Links-JS'
import './HomeUI.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeUI() {
    function sortTheLink(linkArr:any){
        return linkArr.sort((a:any,b:any)=>{return a.topic[0] < b.topic[0] ? -1 : a.topic[0] > b.topic[0] ? 1:0})
    }
    let rawLinks = sortTheLink(Links)
    const [userINP,setUserINP] = useState('')
    const [linksDisplay,setLinkDisplay] = useState('')

    interface T {
        link:string,
        topic:string
    }

    useEffect(()=>{
        const LinksFiltered = rawLinks.filter((l:T) =>{ return l.topic.toLowerCase().includes(userINP.toLowerCase()) }) // Filter
        setLinkDisplay(LinksFiltered.map( (x:T) =>
                            <div key={uniqid()}>
                                <a className='hyperLinks' href={x.link} target='_blank' rel="noreferrer"> {x.topic}  </a> 
                            </div>
                        ))
    },[userINP,rawLinks])
    
    return (
        <div className="HomeUI">
            <article className="logo_search_Container">
                <div className="logoContainer">
                    <h1>Javascript In Tagalog </h1>
                </div>
                <div className='searchContainer'> 
                    <input onChange={(e)=>{setUserINP(e.target.value)}} type="text" className="form-control bg-dark text-white  inputSearch" placeholder='Anong gusto mong matutunan?'/> 
                </div>
            </article>
            <div className="allLinksContainer">
                <div className="jsLinks-Container">
                    {linksDisplay}
                </div>
            </div>
        </div>
    );
  
  }
  