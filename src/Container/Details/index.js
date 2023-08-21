import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './details.css';
import axios from 'axios';
import {img_300, img_not_available} from '../../Config';

const DetailsContainer = ()=>{
    const params = useParams();
    const [content, setContent] = useState();
    // const [credits, setCredits] = useState();
    const titleName =  content && content.name && content.name !== '' ? content.name : content && content.title && content.title !== '' ?  content.title : '';
    


    const id = params.movieid || '';
    const _media_type = params && params.mediatype &&  params.mediatype !== '' ? params.mediatype.toLowerCase() : '';
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    const fetchData = async () =>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`);
          setContent(data);
        }catch(error){
          console.error(error)
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const renderDataHtml = ()=>{
        const ImageURL = content.poster_path ? img_300 + content.poster_path : img_not_available;
        const tagline = content.tagline || '';
        const vote_average = parseInt(content.vote_average);
        const origin_country = content.origin_country && content.origin_country[0] ? content.origin_country[0] : content.production_countries && content.production_countries[0] && content.production_countries[0].name ? content.production_countries[0].name : '';
        const overview = content.overview;
        const runtime = content.runtime;
        const first_air_date = content.first_air_date || content.release_date;
        return (
            <Row>
                <Col className='col-12'>
                    <h1>
                        {titleName} 
                        {/* {
                            tagline && tagline !== '' ? <small> {tagline}</small> : ''
                        } */}
                    </h1>
                </Col>
                <Col className='col-12 col-xl-6'>
                    <div className='card card--details'>
                        <div className='card__cover'>
                            <img src={ImageURL} alt="myimage" />
                        </div>
                        <div className='card__content'>
                            <div className="card__wrap">
                                <span className="card__rate"> {vote_average}</span>
                            </div>
                            <ul className="card__meta">
                                <li><span>Release year:</span> <span className='linkTag'>{first_air_date}</span></li>
                                
                                <li><span>Country:</span> <span className='linkTag'>{origin_country}</span> </li>
                                <li><span>Runtime:</span> <span className='linkTag'>{runtime} mins</span> </li>
                            </ul>
                            <div className="description_readmore_wrapper ">
                                Details: {overview}
                            </div>
                        </div>

                    </div>
                </Col>
                
            </Row>
        )
    }
    return (
        <>
            <main className='detailsPage'>
            <Container>
                {
                    titleName && titleName !==  '' ? renderDataHtml() : 'Loading...'
                }
                
            </Container>
            
            <section className='section'>
                <div  className='contentHead'>
                    <Container>
                        <Row>
                            {/* <Col className='col-12'>
                                {
                                    credits && credits.length > 0 ? <DarkVariantExample data={credits} /> : 'Lading data...'
                                }
                                
                            </Col> */}
                        </Row>
                    </Container>
                </div>
            </section>
        </main>
        </>
    )
}

export default DetailsContainer;