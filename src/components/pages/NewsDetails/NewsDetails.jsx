import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RigthSideNav from "../../Shared/RightSideNav/RigthSideNav";

const NewsDetails = () => {
    const {id, image_url} = useParams();
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h3 className="font-semibold">Dragon News</h3>
                    <div className="border-2">
                        <img src={image_url} alt="" />
                    </div>
                </div>
                <div>
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;