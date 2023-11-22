const MovieCard = ({movieDetail}) =>{
    return (
        <div className="cursor-pointer movieCard">
            <div className="mb-3">
                <img src={movieDetail.image} className="cardImage"></img>
            </div>
            <p className="text-theme-light-white font-semibold">{movieDetail.hall}</p>
            <p className="text-gray-500 text-sm">{movieDetail.name}</p>
        </div>
    )
}

export default MovieCard