import { useEffect, useState } from 'react';
import Links from '../Links-JS'
import HyperLinks from './HyperLinks';
import './HomeUI.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import uniqid from 'uniqid'



export default function HomeUI() {
    interface JSLinks {
        topic:string,
        link:string,
    }
    const sortedLinks = Links.sort((a:JSLinks,b:JSLinks)=>{return a.topic[0] < b.topic[0] ? -1 : a.topic[0] > b.topic[0] ? 1:0})
    const [userINP,setUserINP] = useState('')
    const [linksDisplaying,setLinkDisplaying] = useState(sortedLinks.filter((l:JSLinks) =>{ return l.topic.toLowerCase().includes(userINP.toLowerCase()) }))
    useEffect(()=>{
        setLinkDisplaying(sortedLinks.filter((l:any) =>{ return l.topic.toLowerCase().includes(userINP.toLowerCase()) }));
    },[userINP,sortedLinks])
    return (
        <div className="HomeUI">
            <article className="logo_search_Container">
                <div className="logoContainer">
                    <h1>Javascript In Tagalog </h1>
                </div>
                <div className='searchContainer'> 
                    <input onChange={(e)=>{
                        setUserINP(e.target.value);
                    }}
                     type="text" className="form-control bg-dark text-white  inputSearch" placeholder='Anong gusto mong matutunan?'/> 
                </div>
            </article>
            <div className="allLinksContainer">
                <div className="jsLinks-Container">
                    {linksDisplaying.map((links)=>{ return <HyperLinks key={uniqid()} TnL={links}/>})}
                </div>
            </div>
        </div>
    );
  
  }
  