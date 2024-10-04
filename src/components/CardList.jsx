import Card from "./Card"
import { useEffect,useState } from "react"
import Pagination from "./Pagination"
import LoadingScreen from "./LoadingScreen"
import Header from "./Header"
// eslint-disable-next-line react/prop-types
const CardList = () => {
    
    
    const [pokemon,setPokemon]=useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 20;
    const totalPages = Math.ceil(filteredPokemons.length / elementsPerPage);
    
    


    const fetchingPokemon = async ()=>{
        
        try{
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1302`);
        const jsData = await data.json();
        
        setPokemon(jsData.results)
        setFilteredPokemons(jsData.results)

        }catch(error){
        console.log(error.message)
        }
    }




    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term) {
        const filtered = pokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredPokemons(filtered);
        setCurrentPage(1)
        } else {
          setFilteredPokemons(pokemon); // Reset to all Pokémon if search is empty
        }
    };



    
    useEffect(
        ()=>{
        fetchingPokemon()    
            
    },[])  
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



const paginatedPokemons = filteredPokemons.slice(
    (currentPage - 1) * elementsPerPage,
    currentPage * elementsPerPage
);



    
    return (
        <>
        <Header  onSearch={handleSearch} title={"POKEDEX"}/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11">
        {<Card myData = {paginatedPokemons} />}
        
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