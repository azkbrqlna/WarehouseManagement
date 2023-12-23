const List = ( props ) => {
    const { children, href } = props;
    return(
        <li>
          <a
            href={href}
            className="text-zinc-400 font-bold text-xl py-[5px] px-[10px] relative content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-0 before:h-[2px] before:bg-zinc-400 before:transition-width before:duration-300 hover:before:w-full"
          >
            {children}
          </a>
        </li>
    )
}
export default List;