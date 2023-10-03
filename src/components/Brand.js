import React from "react";
import { getContrastYIQ } from "./helper";
export default function Brand(brand) {
    return (
        <div className="brand">
            <h4>{brand.brand.title}</h4>
            <h5>
                {brand.brand.colors.map((color, index) => (
                    <span
                        style={{
                            backgroundColor: `#${color}`,
                            color: getContrastYIQ(color),
                        }}
                        className="brand-colors"
                        key={index}
                    >
                        {color}
                    </span>
                ))}
            </h5>
        </div>
    );
}
