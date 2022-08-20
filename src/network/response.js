exports.success = (req, res, message, code) => {
  if(!code) { code = 200}
  res.status(code).send({
    success: true,
    error: '',
    body: message,
  })
}

exports.error = (req, res, message, code, detail) => {
  console.error(`response detail: ${detail}`)
  res.status(code).send({
    success: false,
    error: message,
    body: '',
  })
}
