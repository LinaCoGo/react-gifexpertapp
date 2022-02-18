import React, {  } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ anime }) => {

    const { data: images, loading } = useFetchGifs( anime );

    return (
        <>
            <h3 className= 'animate__animated animate__fadeIn'> { anime } </h3>
            {loading && <p className= 'animate__animated animate__flash'>Loading...</p>}
           
            <div className='card-grid'>
                { images.map ( img => 
                    <GifGridItem 
                    key={ img.id}
                    { ...img }  //Aqui estoy mandando c/u de las propiedades de las imagenes como props independientes para poder desestructurar en mis otros componentes. 
                    />
                    )
                }
            </div>
        </>
    )
}
