import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types'
const NewsCard = ({news}) => {
    const {title, image_url, details, _id} = news;
    return (
        <div className="mb-16 border-2">
            <div className="card card-compact  bg-base-100">
            <h2 className="card-title p-5">{title}</h2>
  <figure><img src={image_url} alt="" /></figure>
  <div className="card-body">
    
    <p>
        {
            details.length > 200 ? 
            <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className="ml-1 text-blue-500 font-semibold">Read More...</Link></p>
            : <p>{details}</p>
        }
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

NewsCard.propTypes={
    news: PropTypes.node
}

export default NewsCard;