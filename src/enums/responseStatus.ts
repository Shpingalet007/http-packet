enum ResponseStatus {
  Code100 = 'Continue',
  Code101 = 'Switching Protocols',
  Code102 = 'Processing',
  Code103 = 'Early Hints',
  Code200 = 'OK',
  Code201 = 'Created',
  Code202 = 'Accepted',
  Code203 = 'Non-Authoritative Information',
  Code204 = 'No Content',
  Code205 = 'Reset Content',
  Code206 = 'Partial Content',
  Code207 = 'Multi-Status',
  Code208 = 'Already Reported',
  Code226 = 'IM Used',
  Code300 = 'Multiple Choices',
  Code301 = 'Moved Permanently',
  Code302 = 'Found',
  Code303 = 'See Other',
  Code304 = 'Not Modified',
  Code305 = 'Use Proxy',
  Code306 = 'unused',
  Code307 = 'Temporary Redirect',
  Code308 = 'Permanent Redirect',
  Code400 = 'Bad Request',
  Code401 = 'Unauthorized',
  Code402 = 'Payment Required',
  Code403 = 'Forbidden',
  Code404 = 'Not Found',
  Code405 = 'Method Not Allowed',
  Code406 = 'Not Acceptable',
  Code407 = 'Proxy Authentication Required',
  Code408 = 'Request Timeout',
  Code409 = 'Conflict',
  Code410 = 'Gone',
  Code411 = 'Length Required',
  Code412 = 'Precondition Failed',
  Code413 = 'Payload Too Large',
  Code414 = 'URI Too Long',
  Code415 = 'Unsupported Media Type',
  Code416 = 'Range Not Satisfiable',
  Code417 = 'Expectation Failed',
  Code418 = 'I\'m a teapot',
  Code421 = 'Misdirected Request',
  Code422 = 'Unprocessable Entity',
  Code423 = 'Locked',
  Code424 = 'Failed Dependency',
  Code425 = 'Too Early',
  Code426 = 'Upgrade Required',
  Code428 = 'Precondition Required',
  Code429 = 'Too Many Requests',
  Code431 = 'Request Header Fields Too Large',
  Code451 = 'Unavailable For Legal Reasons',
  Code500 = 'Internal Server Error',
  Code501 = 'Not Implemented',
  Code502 = 'Bad Gateway',
  Code503 = 'Service Unavailable',
  Code504 = 'Gateway Timeout',
  Code505 = 'HTTP Version Not Supported',
  Code506 = 'Variant Also Negotiates',
  Code507 = 'Insufficient Storage',
  Code508 = 'Loop Detected',
  Code510 = 'Not Extended',
  Code511 = 'Network Authentication Required',
}

export default ResponseStatus;
