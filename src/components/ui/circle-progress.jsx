import React from "react";

const CircleProgress = ({ percentage }) => {
    const radius = 93.5; // تنظیم شعاع برای strokeWidth جدید
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width="207" height="207">
            <defs>
                <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DE1E61" /> {/* سبز */}
                    <stop offset="100%" stopColor="transparent" /> {/* آبی */}
                </linearGradient>
            </defs>
            <circle
                cx="103.5"
                cy="103.5"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="17"
            />
            <circle
                cx="103.5"
                cy="103.5"
                r={radius}
                fill="none"
                stroke="url(#gradientColor)"
                strokeWidth="17"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-7xl font-bold"
                fill="#FFFFFF"
            >
                {percentage}%
            </text>
        </svg>
    );
};

export default CircleProgress;
