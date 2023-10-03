import React from "react";
import Search from "./Search";
import BrandsData from "../brands.json";
import Brand from "./Brand";
export default function Content() {
    const brandsArray = [];

    Object.keys(BrandsData).map((key) => {
        brandsArray.push(BrandsData[key]);
    });
    const [brand, setBrand] = React.useState(brandsArray);

    return (
        <div className="content">
            <header className="header">
                <Search />
            </header>
            <section className="brands">
                {brand.map((brand) => (
                    <Brand brand={brand} />
                ))}
            </section>
        </div>
    );
}
