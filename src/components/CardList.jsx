import Card from "./Card"
import { useEffect,useState } from "react"
import Pagination from "./Pagination"
// eslint-disable-next-line react/prop-types
const CardList = () => {
    
    
    const [pokemon,setPokemon]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 20;
    const totalPages = Math.ceil(1302 / elementsPerPage);




    const fetchingPokemon = async ()=>{
        try{
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage-1)*elementsPerPage}&limit=${elementsPerPage}`)
        const jsData = await data.json();
        
        setPokemon(jsData.results)
        console.log(pokemon)
        
        
        }catch(error){
        console.log(error.message)
        }
    }

    
    useEffect(
        ()=>{
        // fetch('https://pokeapi.co/api/v2/pokemon/')
        // .then(res => {return res.json()})
        // .then(result => {result.results.forEach(element => {
        //   fetch(element.url).then(res=> { return res.json()}).then(result=>{setPokedex([...pokedex,result])})
        // });})
        fetchingPokemon()
        
    },[currentPage])  
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11">
        {/* { 
        pokedex.map((item)=> <Card title={item.name}
        image={item.sprites.other.showdown.front_default}
        button={item.cries.latest}
        type={item.types.map(e => e.type.name + ' ')} 
        key={item.id}/>)
        } */ 
        
        <Card myData = {pokemon}/>}
        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
    />

        </>
    )

}


export default CardList