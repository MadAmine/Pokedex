import Card from "./Card";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";

const CardList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Add loading state
    const elementsPerPage = 20;
    const totalPages = Math.ceil(filteredPokemons.length / elementsPerPage);

    const fetchingPokemon = async () => {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1302`);
            const jsData = await data.json();
            setPokemon(jsData.results);
            setFilteredPokemons(jsData.results);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term) {
            const filtered = pokemon.filter(pokemon =>
                pokemon.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredPokemons(filtered);
            setCurrentPage(1);
        } else {
            setFilteredPokemons(pokemon); // Reset to all Pokémon if search is empty
        }
    };

    const handleReset = () => {
        setSearchTerm('');
        setFilteredPokemons(pokemon);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchingPokemon();
    }, []);

    useEffect(() => {
        if (!loading) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentPage, loading]); // Add currentPage and loading as dependencies

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedPokemons = filteredPokemons.slice(
        (currentPage - 1) * elementsPerPage,
        currentPage * elementsPerPage
    );

    return (
        <>
            <Header onSearch={handleSearch} title={"POKEDEX"} onReset={handleReset} />
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <div className="grid grid-cols-1 min-h-[75vh]  sm:grid-cols-2 bg-[#2a6da8] max-w-[1280px] md:grid-cols-3 lg:grid-cols-3 gap-11">
                        {<Card myData={paginatedPokemons} />}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        loading={loading} // Pass loading state to Pagination
                    />
                </>
            )}
        </>
    );
};

export default CardList;