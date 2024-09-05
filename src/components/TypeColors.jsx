


const typeColor = [
    {type : 'grass', color : '#3FA129', darkColor :'#29691B', lightColor :'#82C274'},
    {type : 'fairy', color : '#EF70EF', darkColor :'#9B499B', lightColor :'#F5A2F5'},
    {type : 'normal', color : '#9FA19F', darkColor :'#676967', lightColor :'#C1C2C1'},
    {type : 'dragon', color : '#5060E1', darkColor :'#343E92', lightColor :'#8D98EC'},
    {type : 'psychic', color : '#EF4179', darkColor :'#9B2A4F', lightColor :'#F584A8'},
    {type : 'ghost', color : '#704170', darkColor :'#492A49', lightColor :'#A284A2'},
    {type : 'ground', color : '#915121', darkColor :'#5E3515', lightColor :'#B88E6F'},
    {type : 'steel', color : '#60A1B8', darkColor :'#3E6978', lightColor :'#98C2D1'},
    {type : 'fire', color : '#E62829', darkColor :'#961A1B', lightColor :'#EF7374'},
    {type : 'flying', color : '#81B9EF', darkColor :'#54789B', lightColor :'#ADD2F5'},
    {type : 'ice', color : '#3DCEF3', darkColor :'#28869E', lightColor :'#81DFF7'},
    {type : 'electric', color : '#FAC000', darkColor :'#A37D00', lightColor :'#FCD659'},
    {type : 'rock', color : '#AFA981', darkColor :'#726E54', lightColor :'#CBC7AD'},
    {type : 'dark', color : '#624D4E', darkColor :'#403233', lightColor :'#998B8C'},
    {type : 'fighting', color : '#FF8000', darkColor :'#A65300', lightColor :'#FFAC59'},
    {type : 'water', color : '#2980EF', darkColor :'#1B539B', lightColor :'#74ACF5'},
    {type : 'poison', color : '#9141CB', darkColor :'#5E2A84', lightColor :'#B884DD'},
    {type : 'stellar', color : '#40B5A5', darkColor :'#2A766B', lightColor :'#83CFC5'},
    {type : 'bug', color : '#91A119', darkColor :'#5E6910', lightColor :'#B8C26A'},
    {type : 'unknown', color : '#68A090', darkColor :'#44685E', lightColor :'#9DC1B7'}
]

const TypeColor = ({content}) => {


    const trimmedContent = content.trim().toLowerCase();
    const matchingColor = typeColor.find(item => item.type === trimmedContent);

    const style = {
        width : '100px',
        height : '37px',
        margin : '5px',
        color: matchingColor ? 'white' : 'black',
        backgroundColor: matchingColor ? matchingColor.color : 'transparent',
        borderTop: `5px solid ${matchingColor.darkColor}`,
        borderBottom: `5px solid ${matchingColor.lightColor}`,
        borderRight: `5px solid ${matchingColor.darkColor}`,
        borderLeft: `5px solid ${matchingColor.lightColor}`,
    };


    return (
    <>
    <p style={style}>{content}</p>
    </>
    )
};


export default TypeColor




