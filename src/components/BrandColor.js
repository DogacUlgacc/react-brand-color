import React, { useState } from "react";
import { getContrastYIQ } from "./helper";
import { FaCopy } from "react-icons/fa";

export default function BrandColor({ color, setCopiedColor }) {
    const [copyIcon, setCopyIcon] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedColor(text);
            setTimeout(() => {
                setCopiedColor(null);
            }, 2000);
        });
    };
    const handleMouseEnter = () => {
        setCopyIcon(true);
    };

    const handleMouseLeave = () => {
        setCopyIcon(false);
    };

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="brand-colors"
            onClick={() => copyToClipboard(color)}
            style={{
                backgroundColor: `#${color}`,
                color: getContrastYIQ(color),
                cursor: "pointer",
            }}
        >
            {copyIcon && (
                <>
                    <FaCopy style={{ marginRight: "5px" }} /> #{color}
                </>
            )}
        </span>
    );
}
