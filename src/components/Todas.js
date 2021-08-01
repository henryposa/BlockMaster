import React from 'react'

export const Todas = ({ movies }) => {
    console.log("llegaron las peliculas a todas: ", movies)
    const IMG_API = 'https://image.tmdb.org/t/p/w1280'
    return (
        <div className="row pt-2">
            {
                movies.map(mov => (
                    <div key={mov.id} className="col-md-2">
                        <div className="card animated fadeInUp">
                            <img
                                src={mov.(IMG_API+poster_path)}
                                alt={mov.title}
                                className="card-img-top"
                                width="100"
                            />
                            <div className="card-body">
                                <h6>{`${mov.title} (${mov.year})`}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
