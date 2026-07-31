export const PATH_TO_ID = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/projects': 'projects',
  '/testimonials': 'testimonials',
  '/contact': 'contactme',
}

export const ID_TO_PATH = Object.fromEntries(
  Object.entries(PATH_TO_ID).map(([path, id]) => [id, path])
)
