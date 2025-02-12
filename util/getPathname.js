const getPathname = (pathname) => {
  return pathname.split('/').slice(1)
}

export default getPathname;