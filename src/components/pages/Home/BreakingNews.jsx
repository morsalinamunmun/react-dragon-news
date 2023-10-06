import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn btn-secondary">Breaking News</button>
            {/* react fast marquee */}
            <Marquee pauseOnHover={true} speed={100}>
            <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link> 
            <Link to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link> </Marquee>
        </div>
    );
};

export default BreakingNews;