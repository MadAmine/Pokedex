import Card from "./Card"
import { useEffect,useState } from "react"
import Pagination from "./Pagination"
import LoadingScreen from "./LoadingScreen"
import Header from "./Header"
// eslint-disable-next-line react/prop-types
const CardList = () => {
    
    
    const [pokemon,setPokemon]=useState([])
  
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 20;
    const totalPages = Math.ceil(1302 / elementsPerPage);
    
    const fetchingPokemon = async ()=>{
        
        try{
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage-1)*elementsPerPage}&limit=${elementsPerPage}`)
        const jsData = await data.json();
        
        setPokemon(jsData.results)
        
        }catch(error){
        console.log(error.message)
        }
    }


    const handleSearch = async (term) => {
        setSearchTerm(term);
        if (term) {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`);
            const data = await response.json();
            setSearchResults([data]);
            
          } catch (error) {
            setSearchResults([]);
            console.log(error.message)
          }
        } else {
          fetchingPokemon(); // Reset to first page when no search term
        }
      };

    
    useEffect(
        ()=>{
            if(!searchTerm){
        fetchingPokemon()    
            } 
    },[currentPage,searchTerm])  
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

console.log(searchResults)





    
    return (
        <>
        <Header  onSearch={handleSearch} title={"POKEDEX"}/>
        {searchTerm && searchResults.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11">
        {<Card myData = {searchResults} searched={true}/>}
        
        </div>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11">
        {<Card myData = {pokemon} searched={false}/>}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
    />
        </div>
        )}
        

        </>
    )

}


export default CardList