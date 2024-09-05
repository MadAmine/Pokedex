import { useRef, useState, useEffect } from "react"
import TypeColor from "./TypeColors"
import Pokeball from '../assets/5.png'
const Card = ({myData})=> {

    
    const [pokedex,setPokedex]=useState([])

    const fetchingPokedex = async ()=> {

        try {
            const arr = [] 
            for(let i=0;i<myData.length;i++){
                const newData = await fetch(myData[i].url)
                const jsonData = await newData.json()
                // console.log(jsonData)
                arr.push(jsonData)
                
            }
            console.log(arr)
            setPokedex(arr)
            console.log("===>",pokedex[0])
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        if (myData.length) {
            fetchingPokedex();
        }
    }, [myData]);


    const playAudio = (item)=>{
        const soundRef = useRef
        soundRef.current = new Audio(item.cries.latest)
        soundRef.current.play()
    }
    
    return (
        <>
        {pokedex.map((item)=>(<div key={item.id} className="flex flex-col items-center justify-center mt-32">
            <div className="flex flex-col  cursor-pointer w-96 hover:-translate-y-1 duration-300" style={{backgroundImage : `url(${Pokeball})`, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover', }}>
                <div className="inline relative group h-32 flex items-center justify-center" >
                <img className="object-cover rounded-t " src={item.sprites.other.showdown.front_default} alt="image" />
                </div>
                <div className="flex flex-col rounded-b p-3" >
                <div className="text-3xl font-semibold hover:underline truncate" style={{color : '	#003a70'}}>
                    <b>{item.name.toUpperCase()}</b>
                
                </div>
                <div className=" flex flex-col items-center justify-start h-32 text-blue-500 ">
                    <b className="  ">Type :</b> 
                
                    {item.types.map((e,index) => (<TypeColor key={index} content={e.type.name}/>))}

                </div>
                <div className="flex flex-row flex-auto justify-end">                    
                    <a className="flex text-xs border px-3 my-auto py-2  border-amber-500 group hover:bg-amber-300 rounded-xss transition-all duration-200">
                        <div className="text-xxs text-amber-700 font-semibold group-hover:text-white delay-100" onClick={()=>playAudio(item)}>
                            Play me !
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>))}
        </>
    )
}

export default Card