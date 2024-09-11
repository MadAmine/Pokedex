
const Popup = ({ item, onClose }) => {

    
        console.log(item.abilities)



    return (
        
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black/50" ></div> {/* Background overlay */}
                <div className="relative bg-white p-6 rounded shadow-lg z-10"> {/* Popup content */}
                    <h2 className="text-xl font-bold mb-4">Details for {item.name}</h2>
                    <p>More details about {item.name}...</p>
                    <p>abilities :  {item.abilities.map((e,index)=><p key={index}>{e.ability.name}</p>)}</p>
                    <button
                        onClick={onClose}
                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };


export default Popup;