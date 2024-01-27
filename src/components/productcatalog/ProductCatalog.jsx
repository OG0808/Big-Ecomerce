
import './productcatalog.css'
import PagesShop from "../pagesShop/PagesShop";
import ListeningToMusic from "../manListeningToMusic/ListeningToMusic";
import { handleSeeProduct } from "../../utils/handleSeeProduct";
import useScreenSize from "../../hooks/useScreenSize ";
import { useParams } from 'react-router-dom';
import handleProductCatalog from '../../utils/handleProductCatalog';

const Headphones = () => {
 const{page}= useParams()
const{  pageProduct }=handleProductCatalog(page)
  const { handleSee } = handleSeeProduct();
  const { width } = useScreenSize();

  return (
    <section className="headphones">
      <div className="headphones__title">
        <h1>HEADPHONES</h1>
      </div>
      <div className='headphones__contentall'>
      <article className="headphones__list">
        {pageProduct?.map((data) => (
          <div key={data.id} className="headphones__item">
            <img
              className="headphones__images"
              src={
                width > 768
                  ? data.categoryImage.desktop
                  : width > 375
                  ? data.categoryImage.tablet
                  : data.categoryImage.mobile
              }
              alt=""
            />
            <div className="headphones__details">
              {data.new && <div className="headphones__badge">NEW PRODUCT</div>}
              <h2 className="headphones__name">{data.name}</h2>
              <p className="headphones__description">{data.description}</p>
              <button
                onClick={() => {
                  handleSee(data.name);
                }}
                className="headphones__button"
              >
                See Product
              </button>
            </div>
          </div>
        ))}
      </article>
      <PagesShop />
      <ListeningToMusic />
      </div>
    </section>
  );
};

export default Headphones;
