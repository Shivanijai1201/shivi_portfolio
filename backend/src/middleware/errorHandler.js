export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, message: 'Route not found.' })
}

export function errorHandler(err, req, res, _next) {
  console.error(err)
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.publicMessage || 'Something went wrong. Please try again later.',
  })
}
