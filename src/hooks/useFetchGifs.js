import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( anime ) => {
    const [ state, setstate] = useState({ 
       data: [],
       loading: true
     });

    useEffect ( () => { //Cuando se cargue el componente por primera vez
        getGifs( anime ) //Lanza la peticion para obtener los gifs y los coloca en images
            .then ( gifs => {
                    setstate({
                        data: gifs,
                        loading: false
                    });
        })
    }, [ anime ]);


     return state;

}