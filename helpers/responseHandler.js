class ResponseHandler {
  static success(res, data = null, msg = 'Success') {
    return res.status(200).json({ success: true, message: msg, data: data });
  }

  static badRequest(res, data = null, msg = 'Bad Request') {
    return res.status(400).json({ success: false, message: msg, data: data });
  }

  static notFound(res, data = null, msg = 'Not Found') {
    return res.status(404).json({ success: false, message: msg, data: data });
  }

  static internalServerError(res, data = null, msg = 'Internal Server Error') {
    return res.status(500).json({ success: false, message: msg, data: data });
  }

  static unauthorized(res, data = null, msg = 'Unauthorized') {
    return res.status(401).json({ success: false, message: msg, data: data });
  }
}

module.exports = ResponseHandler;
