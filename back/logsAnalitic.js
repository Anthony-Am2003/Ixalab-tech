
  function analyzeLogs(logs) {
    const result = {
      totalRequests: 0,
      statusCodeCounts: {},
      pathCounts: {},
    };
  
    for (const log of logs) {
      const match = log.match(/"(\w+) ([^"]+)" (\d+) \w+/);
  
      if (match) {
        const [, method, path, statusCode] = match;
        result.totalRequests++;
        if (!result.statusCodeCounts[statusCode]) {
            result.statusCodeCounts[statusCode] = 1;
          } else {
            result.statusCodeCounts[statusCode]++;
          }
          if (!result.pathCounts[path]) {
            result.pathCounts[path] = 1;
          } else {
            result.pathCounts[path]++;
          }
      }
    }
  
    return result;
  }
  
  const logsArray = [
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '127.0.0.1 - - [timestamp] "POST /path2" 404 Not Found',
    '192.168.0.1 - - [timestamp] "GET /path1" 200 OK',
    '192.168.0.1 - - [timestamp] "GET /path1" 200 OK',
    '127.0.0.1 - - [timestamp] "GET /path1" 404 Not Found',
    '192.168.0.1 - - [timestamp] "POST /path2" 200 OK',
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '192.168.0.1 - - [timestamp] "GET /path1" 404 Not Found',
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '127.0.0.1 - - [timestamp] "GET /path1" 404 Not Found',
    '192.168.0.1 - - [timestamp] "POST /path2" 200 OK',
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '192.168.0.1 - - [timestamp] "GET /path1" 404 Not Found',
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '192.168.0.1 - - [timestamp] "GET /path1" 200 OK',
    '127.0.0.1 - - [timestamp] "POST /path2" 404 Not Found',
    '192.168.0.1 - - [timestamp] "GET /path1" 200 OK',
    '127.0.0.1 - - [timestamp] "GET /path1" 200 OK',
    '192.168.0.1 - - [timestamp] "GET /path1" 404 Not Found',
  ];
 
  
  
console.log(analyzeLogs(logsArray));