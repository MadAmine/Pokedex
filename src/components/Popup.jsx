import { useEffect, useState } from "react";
import TypeColor from "./TypeColors";

const Popup = ({ specieUrl, item, onClose, pokePalette }) => {

        const [specie, setSpecie] = useState(null)
        
        const fetchSpecies = async ()=>{
            const newData = await fetch(specieUrl)
            const jsonData = await newData.json()
            setSpecie(jsonData)
        }
        useEffect(()=>{
            fetchSpecies()
        },[])
        
        const description = specie?.flavor_text_entries.find(e=> e.language.name === 'en')


    return (
        
            // <div className="fixed inset-0 flex items-center justify-center z-50">
            //     <div className="absolute inset-0 bg-black/50" ></div> {/* Background overlay */}
            //     <div className="relative bg-white p-0 rounded shadow-lg z-10" style={{ width: '850px', height: '500px' }}> {/* Popup content */}
            //         {/* Navbar */}
            //     <div className="bg-blue-600 h-12 flex items-center justify-between px-4">
            //         <h2 className="text-white text-xl font-bold">Details for {item.name}</h2>
            //         <button
            //             onClick={onClose}
            //             className="bg-red-500 text-white py-1 px-3 rounded"
            //         >
            //             Close
            //         </button>
            //     </div>
            //         <h2 className="text-xl font-bold mb-4">Details for {item.name}</h2>
            //         <p>More details about {item.name}...</p>
            //         <p>abilities :  {item.abilities.map((e,index)=><p key={index}>{e.ability.name}</p>)}</p>
                
            //     </div>
            // </div>








            
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/50"></div> {/* Background overlay */}
            <div className="relative bg-gray-200 rounded-lg shadow-lg z-10 p-0" style={{ width: '400px', height: '450px' }}>
                
                {/* Top Bar */}
                <div className="flex justify-between items-center bg-red-400 text-white px-2 py-1 rounded-t-lg">
                    <div className="flex space-x-2">
                        <button className=" px-2 py-1 rounded press-start-2p-regular" 
                        style={{textShadow : "2px 0 gray, -2px 0 gray, 0 2px gray, 0 -2px gray, 1px 1px gray, -1px -1px gray, 1px -1px gray, -1px 1px gray"}}

                        >INFO</button>
                        <button className=" text-black px-2 py-1 press-start-2p-regular rounded"
                        style={{textShadow : "2px 0 gray, -2px 0 gray, 0 2px gray, 0 -2px gray, 1px 1px gray, -1px -1px gray, 1px -1px gray, -1px 1px gray"}}
                        >AREA</button>
                        <button className=" text-black px-2 py-1 press-start-2p-regular rounded"
                        style={{textShadow : "2px 0 gray, -2px 0 gray, 0 2px gray, 0 -2px gray, 1px 1px gray, -1px -1px gray, 1px -1px gray, -1px 1px gray"}}
                        >FORMS</button>
                    </div>
                    <button onClick={onClose} className=" text-red-950 px-2 py-1 rounded press-start-2p-regular">X</button>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center  bg-white mt-0 p-2 rounded-b-lg">
                    {/* Image and Basic Info */}
                    <div className="flex items-center justify-evenly w-full">
                        <img src={item.sprites.other.home.front_default ? item.sprites.other.home.front_default : item.sprites.front_default} alt={item.name} className="w-40 h-40" />
                        <div className="flex flex-col ml-4">
                            <div className="text-red-500 font-bold press-start-2p-regular">#{item.id.toString().padStart(3, '0')}  {item.name.toUpperCase()}</div>
                            <div className="text-xs text-gray-600"><b>Abilities : </b> {item.abilities.map((e,index)=><p key={index}>{e.ability.name}</p>)} </div>
                        </div>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="mt-2 w-full flex justify-around p-2 rounded" style={{background : `${pokePalette[1]}`}}>
                        <div className="text-center">
                            <div className=" press-start-2p-small mb-2" style={{color : `${pokePalette[2]}`}}>HT</div>
                            <div className=" press-start-2p-small" style={{color : `${pokePalette[2]}`}}>{item.height} m</div>
                        </div>
                        <div className="text-center">
                            <div className=" text-gray-600 press-start-2p-small mb-2">WT</div>
                            <div className=" press-start-2p-small">{item.weight} kg</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-gray-600 press-start-2p-regular">TYPE</div>
                            <div className="flex space-x-1 press-start-2p-small">
                                {item.types.map((e, index) => (
                                    <TypeColor  key={index} content={e.type.name}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mt-4 p-2 bg-gray-50 text-sm text-gray-700 rounded shadow-inner">
                        {description?.flavor_text}
                    </div>
                    <div className="mt-4 p-2  h-32 w-full  bg-gray-50 text-sm text-gray-700 rounded shadow-inner">
                        <h1> <b>BASE STATS </b></h1>
                    <div className="text-center h-24 justify-evenly flex w-full flex-wrap" >  
                        {item.stats.map((e,index)=>(
                            <div key={index} className="text-sm w-32 inline-block text-gray-600  h-6">{{
                            'attack' : 'ATT',
                            'defense' : 'DEF',
                            'hp' : 'HP',    
                            'special-attack' : 'SP-ATT',
                            'special-defense' : 'SP-DEF',   
                            'speed' : 'SPD' 
                        }[e.stat.name]
                        } : {e.base_stat}
                        </div>
                            
                        ))}
                    </div>        
                
                    
                        
                        
                    </div>
                </div>
            </div>
        </div>




        );
    };


export default Popup;