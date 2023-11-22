const MovieCard = () =>{
    return (
        <div className="cursor-pointer movieCard">
            <div className="mb-3">
                <img src="https://assetsio.reedpopcdn.com/MarvelsHeader_rUbTNsM.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" className="cardImage"></img>
            </div>
            <p className="text-theme-light-white font-semibold">Spider Man Across The Spider-Verse</p>
            <p className="text-gray-500 text-sm">QFX Butwal Bhatbhateni</p>
        </div>
    )
}

export default MovieCard