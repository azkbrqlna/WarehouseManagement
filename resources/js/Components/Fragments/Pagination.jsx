import { Button } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export default function Pagination({
    className,
    total,
    from,
    to,
    links,
    prevPageUrl,
    nextPageUrl,
    withInfo = true,
}) {
    const applyClass = (condition, classNames) => (condition ? classNames : "");
    const visibleLinks =
        links.length > 3 &&
        links.reduce((acc, link, index, array) => {
            if (link.active) {
                const prevLink = index > 1 ? array[index - 1] : null;
                const nextLink =
                    link.label < array.length - 2 ? array[index + 1] : null;

                if (prevLink) acc.push(prevLink);
                acc.push(link);
                if (nextLink) acc.push(nextLink);
            }
            return acc;
        }, []);

    return (
        <div
            className={`flex items-center justify-between text-xs ${applyClass(
                className,
                className
            )}`}
        >
            {withInfo && (
                <div>
                    <p>
                        Menampilkan {" "}
                        <span className="font-semibold">{from}</span> sampai{" "}
                        <span className="font-semibold">{to}</span> dari{" "}
                        <span className="font-semibold">{total}</span> data.
                    </p>
                </div>
            )}
            <div className="flex gap-3">
                {prevPageUrl && (
                    <Button
                        as={Link}
                        href={prevPageUrl}
                        size="xs"
                        variant="outline"
                        className={`w-5 h-5 ${applyClass(
                            prevPageUrl,
                            "border-red-500"
                        )}`}
                    >
                        <ArrowLeft />
                    </Button>
                )}
                {visibleLinks &&
                    visibleLinks?.map((link) => (
                        <Button
                            as={Link}
                            key={link.label}
                            href={link.url}
                            size="xs"
                            variant={link.active ? "solid" : "outline"}
                            className={`w-5 h-5 ${applyClass(
                                link.active,
                                "bg-blue-500"
                            )}`}
                        >
                            {link.label}
                        </Button>
                    ))}
                {nextPageUrl && (
                    <Button
                        as={Link}
                        href={nextPageUrl}
                        size="xs"
                        variant="outline"
                        className={`w-5 h-5 ${applyClass(
                            nextPageUrl,
                            "border-green-500"
                        )}`}
                    >
                        <ArrowRight />
                    </Button>
                )}
            </div>
        </div>
    );
}
// export default function Pagination({
//     className,
//     total,
//     from,
//     to,
//     links,
//     prevPageUrl,
//     nextPageUrl,
//     withInfo = true,
// }) {
//     const applyClass = (condition, classNames) => (condition ? classNames : "");
//     return (
//         <div
//             className={`flex items-center justify-between text-xs ${applyClass(
//                 className,
//                 className
//             )}`}
//         >
//             {withInfo && (
//                 <div>
//                     <p>
//                         Menampilkan{" "}
//                         <span className="font-semibold">{from}</span> sampai{" "}
//                         <span className="font-semibold">{to}</span> dari{" "}
//                         <span className="font-semibold">{total}</span> data.
//                     </p>
//                 </div>
//             )}
//             <div className="flex gap-3">
//                 {prevPageUrl && (
//                     <Button
//                         as={Link}
//                         href={prevPageUrl}
//                         size="xs"
//                         variant="outline"
//                         className={`w-5 h-5 ${applyClass(
//                             prevPageUrl,
//                             "border-red-500"
//                         )}`}
//                     >
//                         <ArrowLeft />
//                     </Button>
//                 )}
//                 {links.length > 3 &&
//                     links.slice(1, -1).map((link) => (
//                         <Button
//                             as={Link}
//                             key={link.label}
//                             href={link.url}
//                             size="xs"
//                             variant={link.active ? "solid" : "outline"}
//                             className={`w-5 h-5 ${applyClass(
//                                 link.active,
//                                 "bg-blue-500"
//                             )}`}
//                         >
//                             {link.label}
//                         </Button>
//                     ))}
//                 {nextPageUrl && (
//                     <Button
//                         as={Link}
//                         href={nextPageUrl}
//                         size="xs"
//                         variant="outline"
//                         className={`w-5 h-5 ${applyClass(
//                             nextPageUrl,
//                             "border-green-500"
//                         )}`}
//                     >
//                         <ArrowRight />
//                     </Button>
//                 )}
//             </div>
//         </div>
//     );
// }
