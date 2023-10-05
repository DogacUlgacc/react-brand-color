import React, { useState } from "react";

import BrandColor from "./BrandColor";

export default function Brand({ brand }) {
    const [copiedColor, setCopiedColor] = useState(null);

    return (
        <div className="brand">
            <h4>{brand.title}</h4>
            <h5>
                {brand.colors.map((color, index) => (
                    <BrandColor
                        color={color}
                        key={index}
                        setCopiedColor={setCopiedColor}
                    />
                ))}
            </h5>
            {copiedColor && (
                <h4> Color code copied successfully: #{copiedColor}</h4>
            )}
        </div>
    );
}
