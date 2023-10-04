import React from "react";
import Search from "./Search";
import BrandsData from "../brands.json";
import Brand from "./Brand";

export default function Content() {
    const brandsArray = Object.values(BrandsData);
    const [filteredBrands, setFilteredBrands] = React.useState(brandsArray);

    const handleSearch = (searchText) => {
        if (searchText === "") {
            setFilteredBrands(brandsArray);
        } else {
            const filtered = brandsArray.filter((brand) =>
                brand.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredBrands(filtered);
        }
    };

    return (
        <div className="content">
            <header className="header">
                <Search onSearch={handleSearch} />
            </header>
            <section className="brands">
                {filteredBrands.map((brand) => (
                    <Brand brand={brand} key={brand.id} />
                ))}
            </section>
        </div>
    );
}
