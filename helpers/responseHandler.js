class ResponseHandler {
  static success(res, msg = 'Success', data = null) {
    return res.status(200).json({ success: true, message: msg, data: data });
  }

  static badRequest(res, msg = 'Bad Request', data = null) {
    return res.status(400).json({ success: false, message: msg, data: data });
  }

  static notFound(res, msg = 'Not Found', data = null) {
    return res.status(404).json({ success: false, message: msg, data: data });
  }

  static internalServerError(res, msg = 'Internal Server Error', data = null) {
    return res.status(500).json({ success: false, message: msg, data: data });
  }

  static unauthorized(res, msg = 'Unauthorized', data = null) {
    return res.status(401).json({ success: false, message: msg, data: data });
  }
}

module.exports = ResponseHandler;
