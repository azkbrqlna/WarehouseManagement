import React from "react";

export default function CardSponsor({ link, src, sponsor, date }) {
    return (
        <div className="w-10 h-10 md:h-[92px] md:w-[92px] lg:w-[156px] lg:h-auto bg-white rounded-lg shadow">
            <a href={link}>
                <img
                    className="rounded-lg lg:rounded-t-lg w-10 h-10 md:w-[92px] md:h-[92px] lg:w-[156px] lg:h-[156px]"
                    src={src}
                />
            </a>
            <div className="px-5 py-3 bg-gray-900 rounded-b-lg lg:flex items-center justify-between hidden">
                <h5 className="mb-2 text-base font-bold tracking-tight text-white">
                    {sponsor}
                </h5>
                <p className="text-white text-sm">{date}</p>
            </div>
        </div>
    );
}
