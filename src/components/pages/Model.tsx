import {adidasArr, AdidasItem} from './Adidas';
import {pumaArr, PumaItem} from './Puma';
import {useParams} from 'react-router-dom';

type ProductType = {
  [key: string]: AdidasItem[] | PumaItem[];
};

const products: ProductType = {
  adidas: adidasArr,
  puma: pumaArr
}

export const Model = () => {
  const {maker, id} = useParams();
  let currentProduct;
  if (maker) {
    currentProduct = products[maker].find(el => el.id === Number(id));
  }
  return (
    <>
      {currentProduct
        ? <div style={{
          height: '100%',
          padding: '15px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <p>{currentProduct.model}</p>
          <p>{currentProduct.collection}</p>
          <p>{currentProduct.price}</p>
          <img src={currentProduct.picture} alt={currentProduct.model} style={{width: '200px'}}/>
        </div>
        : <p>Модель не найдена</p>
      }
    </>
  )
};
