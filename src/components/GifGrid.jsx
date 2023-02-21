import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    <h4>{category}</h4>
    {
        isLoading && (<h2>Cargando...</h2>)
    }
    <div className='card-grid' >
        {
            images.map(img =>(
                <GifGridItem  {...img}/>
            ))
        }
        
    </div>
    </>
    
  )
}
