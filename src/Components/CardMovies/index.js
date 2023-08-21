import React from 'react';
import {Link} from 'react-router-dom';
import {img_300, img_not_available} from '../../Config';
// import SearchBarCardComponents from '../../Components/SearchBox';
const CardMoviesComponents = ({data,mediaType})=>{
    //console.log(data)

    const title = data.original_title || data.name;
    const detail = data.overview;
    const id = data.id;
    const ImageURL =  data.poster_path ? img_300 + data.poster_path : img_not_available;
    const media_type = data.media_type ? data.media_type : data.type ? data.type : mediaType;
    const release_date =  data.release_date || data.first_air_date;
    const vote_average = parseInt(data.vote_average);
    const original_language = data.original_language || ''
    return (
        <>
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6'>
                <Link to={`/details/${id}/${media_type}`} className='video-thumb'>
                    <figure className="video-image"> 
                        <span>
                            <img src={ImageURL} alt={title} />
                        </span>
                        <div className="circle-rate">
                            <b>{vote_average}</b> 
                        </div>
                    </figure>
                    <div className="video-content"> 
                        <ul className="tags">
                            <li className='title'><b>{title}</b></li>
                            <li className='detail'>{detail}</li>
                        </ul>
                        <small className="range">{release_date}</small>
                        <h3 className="name">
                            {title}
                        </h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardMoviesComponents;