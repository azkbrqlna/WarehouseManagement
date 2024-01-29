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
    return (
        <div
            className={`flex items-center justify-between ${applyClass(
                className,
                className
            )}`}
        >
            {withInfo && (
                <div>
                    <p>
                        Menampilkan{" "}
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
                        size="sm"
                        variant="outline"
                        className={`w-10 h-10 ${applyClass(
                            prevPageUrl,
                            "border-red-500"
                        )}`}
                    >
                        <ArrowLeft />
                    </Button>
                )}
                {links.length > 3 &&
                    links.slice(1, -1).map((link) => (
                        <Button
                            as={Link}
                            key={link.label}
                            href={link.url}
                            size="sm"
                            variant={link.active ? "solid" : "outline"}
                            className={`w-10 h-10 ${applyClass(
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
                        size="sm"
                        variant="outline"
                        className={`w-10 h-10 ${applyClass(
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
