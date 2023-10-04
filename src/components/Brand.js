import React, { useState } from "react";
import { getContrastYIQ } from "./helper";
import { FaCopy } from "react-icons/fa";

export default function Brand({ brand }) {
    const [copiedColor, setCopiedColor] = useState(null);
    const [copyIcon, setCopyIcon] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedColor(text);
            setTimeout(() => {
                setCopiedColor(null);
            }, 2000);
        });
    };

    return (
        <div className="brand">
            <h4>{brand.title}</h4>
            <h5>
                {brand.colors.map((color, index) => (
                    <span
                        onMouseEnter={() => setCopyIcon(true)}
                        onMouseLeave={() => setCopyIcon(false)}
                        className="brand-colors"
                        onClick={() => copyToClipboard(color)}
                        style={{
                            backgroundColor: `#${color}`,
                            color: getContrastYIQ(color),
                            cursor: "pointer",
                        }}
                        key={index}
                    >
                        {copyIcon && (
                            <>
                                <FaCopy style={{ marginRight: "5px" }} /> #
                                {color}
                            </>
                        )}
                    </span>
                ))}
            </h5>
            {copiedColor && (
                <h4> Color code copied successfully: #{copiedColor}</h4>
            )}
        </div>
    );
}
