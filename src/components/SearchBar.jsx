import { useState } from "react"
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({onSearch}) => {

const [inputValue,setInputValue] = useState({})


const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // if (onSearch) {
    //   onSearch(e.target.value); // Call the prop function with the new input value
    // }
  };    

const handleSearch = () =>{
    onSearch(inputValue)
}
// const fetchSearched = () =>{
 
//     try{
//         const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500`)
//         const jsData = await data.json();
        
//         setPokemon(jsData.results)
        
        
//         }catch(error){
//         console.log(error.message)
//         }


// }



    return (

        <>
        <div className="flex items-center w-full md:w-auto ml-4 relative">
        <input
            type="text"
            onChange={handleInputChange}
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            // Added padding-right (pr-10) to make space for the icon
        />
        <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleSearch}
        >
            <FiSearch size={20} /> {/* Icon size can be adjusted */}
        </button>
        </div>
        </>
    )

}

export default SearchBar