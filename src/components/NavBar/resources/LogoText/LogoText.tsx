function LogoText(): JSX.Element {
  return (
    <p
      className="font-serif text-2xl hidden
     xs:block xs:absolute xs:left-1/2 xs:top-1/2 xs:-translate-x-1/2 xs:-translate-y-1/2 
     sm:static sm:translate-x-0 sm:translate-y-0"
    >
      Fidget
      <span className="ml-1 text-sm font-mono">simulations</span>
    </p>
  )
}

export default LogoText
