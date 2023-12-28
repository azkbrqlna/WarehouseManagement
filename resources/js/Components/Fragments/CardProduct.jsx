import { Badge, Stack } from "@chakra-ui/react";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="bg-white rounded-lg gap-5 flex flex-col p-3 shadow-lg shadow-zinc-500">
            {children}
        </div>
    );
};

const Image = ( props ) => {
    const { image } = props;
    return (
        <div className="flex justify-center border-2 rounded-lg overflow-hidden w-44 h-4w-44">
            <img src={image} />
        </div>
    );
};

const Content = ( props ) => {
    const { barang, status, time } =props;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="font-medium text-3xl text-zinc-800">{barang}</h1>
                    <Stack>
                        <Badge textTransform="uppercase" colorScheme="green">
                            {time}
                        </Badge>
                    </Stack>
                </div>
                <div className="text-sm font-medium text-zinc-800">{status}</div>
            </div>
            <button
                className="py-2 font-semibold rounded-lg border border-slate-200 text-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-0"
                type="button"
            >
                Add to request
            </button>
        </div>
    );
};

CardProduct.Image = Image;
CardProduct.Content = Content;

export default CardProduct;
