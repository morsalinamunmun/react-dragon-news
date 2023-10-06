import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RigthSideNav from "../../Shared/RightSideNav/RigthSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RigthSideNav></RigthSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;