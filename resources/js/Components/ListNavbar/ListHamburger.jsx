const ListHamburger = ( props ) => {
    const { children, href } = props;
    return(
        <>
            <li className="group relative border-2 rounded-md border-zinc-800 overflow-hidden">
            <a
              href={href}
              className="text-xl text-zinc-800 py-2 flex justify-center group-hover:text-white relative z-10"
            >
              {children}
            </a>
            <div className="absolute inset-0 bg-zinc-800 translate-x-full group-hover:translate-x-0 transition duration-300"></div>
          </li>
        </>
    )
}

export default ListHamburger;