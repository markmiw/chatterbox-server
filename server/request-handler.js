// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
// var database = [{url: [{},{},{}],
//                  url2: []
//                       }];

var database = [];
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};
/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var requestHandler = function(request, response) {
  if (request.method === 'POST' ) {
    //add in a url key value
    if(request.url !== '/classes/messages') {
      var statusCode = 404;
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = '.application/json';
      response.writeHead(statusCode, headers);
      response.end('Failure');
    } else {
    // var message = {};
    // message.url = request.url;
    // message.data = request._postData;
    console.log('Serving request type ' + request.method + ' for url ' + request.url);
    var statusCode = 201;
    let combinedChunk = '';
    request.on('data',(chunk) => {
      combinedChunk = combinedChunk + chunk;
    });
    request.on('end',() => {
      database.push(JSON.parse(combinedChunk));
    });

    var headers = defaultCorsHeaders;
    headers['Content-Type'] = '.application/json';
    response.writeHead(statusCode, headers);
    response.end('Success');
    //need a failure case and corresponding status code
    }

  }

  if (request.method === 'GET') {
    if(request.url !== '/classes/messages') {
      var statusCode = 404;
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = '.application/json';
      response.writeHead(statusCode, headers);
      response.end('Failure');
    } else {
      console.log('Serving request type ' + request.method + ' for url ' + request.url);
      var statusCode = 200;
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = '.application/json';
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(database));
    }
  }
};

exports.requestHandler = requestHandler;




  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // // console.logs in your code.
  // console.log('Serving request type ' + request.method + ' for url ' + request.url);
  // console.log('Server request: ' + request)


  // /*
  // Request hndler is a function that will enable our server to handle different types of requests determined by the request.method
  // *** so we'll need to set up a bunch of conditionals for the different request methods
  // *** each method will need to have a response.writeHead and a response.end
  // */



  // // The outgoing status.
  // var statusCode = 200;

  // See the note below about CORS headers.
  // var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
          //change text/plain to JSON for chatterboxclient
  // headers['Content-Type'] = '.application/json';
  // response.writeHead(statusCode, headers);
  // response.end(JSON.stringify([]));

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.

