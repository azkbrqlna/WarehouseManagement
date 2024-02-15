const OverviewCard = ({ content, children, value, title, total }) => {
    return (
        <div className="flex flex-col py-2 px-7 bg-white rounded-md">
            <h1 className="text-base">{title}</h1>
            <span className="text-xl text-blue-500 font-bold">{total}</span>
            <div className="flex items-center gap-3">
                <p className="text-xs font-light text-neutral-400">
                    {content} <span className="text-blue-500">{value}</span>
                </p>
                {children}
            </div>
        </div>
    );
};

export default OverviewCard;
