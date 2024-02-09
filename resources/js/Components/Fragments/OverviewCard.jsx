const OverviewCard = ({ icon: Icon, value, title, className }) => {
    return (
        <div className="flex items-center justify-center gap-5 px-5 2xl:px-16 py-5 bg-white hover:bg-neutral-50 transition-all duration-200 ease-in shadow-sm rounded-xl z-[999]">
            <div className="p-5 rounded-3xl bg-secondary">
                <Icon size={48} color="#ffffff" />
            </div>
            <div className="space-y-2">
                <h4 className="text-4xl font-bold">{value}</h4>
                <p className={className}>{title}</p>
            </div>
        </div>
    );
};

export default OverviewCard;
