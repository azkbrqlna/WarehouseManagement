const List = ( props ) => {
    const { children, href } = props;
    return(
        <li>
          <a
            href={href}
            className="text-white font-bold text-lg py-[5px] px-[10px] relative content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-width before:duration-300 hover:before:w-full"
          >
            {children}
          </a>
        </li>
    )
}
export default List;