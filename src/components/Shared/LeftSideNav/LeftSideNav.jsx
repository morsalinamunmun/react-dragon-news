import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-5">
            <h2 className="font-semibold mb-5">All Categories</h2>
            {
                categories.map(category=><Link className="block font-semibold" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;