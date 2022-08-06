import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Links from './AbLinks';
// import axios from 'axios';

export default function HomeUI() {

    // const Links = axios.get('https://raw.githubusercontent.com/mmvergara/Javascript-In-Tagalog/main/LINKS-MAIN.json').then(x=>x.data)

    function sortTheLink(linkArr){
        return linkArr.sort((a,b)=>{return a.topic[0] < b.topic[0] ? -1 : a.topic[0] > b.topic[0] ? 1:0})
    }

    let rawLinks = sortTheLink(Links)
    const [userINP,setUserINP] = useState('')
    const [linksDisplay,setLinkDisplay] = useState('')

    useEffect(()=>{
        const LinksFiltered = rawLinks.filter((l)=>{ return l.topic.toLowerCase().includes(userINP.toLowerCase()) }) // Filter
        setLinkDisplay(LinksFiltered.map( ({link,topic} ) =>
                            <div key={uniqid()}>
                                <a className='hyperLinks' href={link} target='_blank' rel="noreferrer"> {topic}  </a> 
                            </div>
                        ))
    },[userINP,rawLinks])


    
    return (
        <div className="HomeUI">
            <article className="logo_search_Container">
                <div className="logoContainer">
                    <h1>Javascript In Tagalog</h1>
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
  