import { useRef, useState, useEffect } from "react"
import TypeColor from "./TypeColors"
import Pokeball from '../assets/4.svg'
import Popup from "./Popup.jsx"
import LoadingScreen from "./LoadingScreen"
import { prominent } from "color.js"




const Card = ({myData})=> {


    const [pokedex,setPokedex]=useState([])

    const [loading, setLoading] = useState(false);

    const [showPopup,setShowPopup] = useState(null);

    

    const handleItemClick = (item) =>{
        setShowPopup(item)
    }
    
    const handleClosePopup = () =>{
        setShowPopup(null)
    }
    


    const fetchingPokedex = async ()=> {
        setLoading(true)
        try {
            const arr = [] 
            for(let i=0;i<myData.length;i++){
                const newData = await fetch(myData[i].url)
                const jsonData = await newData.json()
                // console.log(jsonData)
                arr.push(jsonData)
                
            }
            setPokedex(arr)
        } catch (error) {
            console.log(error.message)
        }finally{
            setLoading(false)
        }

    }
    useEffect(() => {
        if (myData.length) {
            fetchingPokedex();
        }
    }, [myData]);

    const playAudio = (item)=>{
        
        const sound = new Audio(item.cries.latest)
        sound.play()
    }
    

    const [colors, setColors] = useState({}); 

    
    
    
    
    console.log(pokedex)
    
    
    useEffect(() => {

        // Reset colors when new items are fetched
        setColors({});

        const fetchColors = async () => {
        setLoading(true)
        const colorPromises = pokedex.map(async (item) => {
        const result = await prominent(item.sprites.other.home.front_default ? item.sprites.other.home.front_default : item.sprites.other.dream_world.front_default || Pokeball, { amount: 4, format: 'hex', group: 55 });
        return  { id: item.id, color: result } 
        });

        const colorsArray = await Promise.all(colorPromises);

        // Use reduce with an initial value to handle empty arrays
        const colorsObject = colorsArray.reduce((acc, { id, color }) => {
        acc[id] = color;
        return acc;
        }, {});

        setColors(colorsObject); // Store fetched colors
        setLoading(false)
        
        
        
    };

    fetchColors();

    }, [pokedex]);


console.log(colors)



    return (
        <>
        {loading && <LoadingScreen />}
        {pokedex.map((item)=>(
            
            
            
        <div key={item.id} className="flex flex-col items-center justify-center  mt-5" >
            <div onClick={()=>handleItemClick(item)} className="relative flex flex-col  align-middle cursor-pointer w-96 p-5 hover:-translate-y-1 duration-300" style={
                {
                    // backgroundImage : `url(${Pokeball})`, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover', 
                    // background: 'black', borderRadius : '100%', 
                }
                }>
                {/* <img src={Pokeball} alt="pokeball" style={{color : 'red'}}/> */}
                <div className="imagediv">
                <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z" fill={colors[item.id] ? colors[item.id][1] : "4f4f4f"} stroke="black" strokeWidth="0.5" />
                <path d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z" fill={colors[item.id] && colors[item.id][2]} stroke="black" strokeWidth="0.5"/>
                <path clipRule="evenodd" d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z" stroke="black" strokeWidth="0.25" fill={colors[item.id] && colors[item.id][3]} fillRule="evenodd"/></svg>
                </div>
                <div className="w-full h-full  absolute flex-col bottom-[-47px] left-[20px]">
                <div className="group h-32 flex items-center justify-center">
                <img className="object-cover rounded-t " src={item.sprites.other.showdown.front_default ? item.sprites.other.showdown.front_default : item.sprites.other.home.front_default} style={ { height : item.sprites.other.showdown.front_default ? 'max-content' : '120px', width : item.sprites.other.showdown.front_default ? 'max-content' : '120px'}} alt="image" />
                </div>
                <div className="flex flex-col rounded-b p-3">
                <div className="text-3xl font-semibold hover:underline truncate" style={{color : '	#003a70'}}>
                    <b className="press-start-2p-regular" style={{textShadow : "2px 0 #FFCB05, -2px 0 #FFCB05, 0 2px #FFCB05, 0 -2px #FFCB05, 1px 1px #FFCB05, -1px -1px #FFCB05, 1px -1px #FFCB05, -1px 1px #FFCB05"}}>{item.name.toUpperCase()}</b>
                
                </div>
                <div className=" flex flex-col items-center justify-start h-32 text-blue-500 ">
                    {/* <b className="  ">Type :</b> 
                
                    {item.types.map((e,index) => (<TypeColor key={index} content={e.type.name}/>))} */}
                    <a className="flex text-xs border px-3 my-auto py-2  border-amber-500 group hover:bg-amber-300 rounded-xss transition-all duration-200" onClick={(e)=>{e.stopPropagation()
                            playAudio(item)}}>
                        <div className="press-start-2p-regular text-xxs text-[#FFCB05] group-hover:text-white delay-100 " 
                        style={{textShadow : "2px 0 #003a70, -2px 0 #003a70, 0 2px #003a70, 0 -2px #003a70, 1px 1px #003a70, -1px -1px #003a70, 1px -1px #003a70, -1px 1px #003a70"}}
                        >
                            Play me !
                        </div>
                    </a>

                </div>  

                </div>
                </div>
                {/* <div className="flex flex-row flex-auto justify-end">                    
                    <a className="flex text-xs border px-3 my-auto py-2  border-amber-500 group hover:bg-amber-300 rounded-xss transition-all duration-200">
                        <div className="text-xxs text-amber-700 font-semibold group-hover:text-white delay-100" onClick={(e)=>{e.stopPropagation()
                            playAudio(item)}}>
                            Play me !
                        </div>
                    </a>
                </div> */}
            
            </div>

            
            
        </div>
    
    
    
    
    
    
    
    ))}
    {console.log(showPopup)}
    {showPopup && <Popup item={showPopup} specieUrl={showPopup.species.url} pokePalette={colors[showPopup.id]} onClose={handleClosePopup} />}
        </>
    )
}

export default Card