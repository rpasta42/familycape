
function _rawGet(url, callback) {
   $.get(url, callback);
   //angular version:
   //$http.get(req_str).then((data) => callback(data));
}

//request specific data from server
//if dataToget is string, send serv?data=blah,
//otherwise we need dictionary of parameters
function getData(dataToGet, callback) {
   var req_str = serv_url + 'serv?';

   if (isStr(dataToGet)) {
      req_str += 'data=' + dataToGet;
      _rawGet(req_str, callback);
      return;
   }
   var needAndSign = false;
   for (var paramName in dataToGet) {
      if (needAndSign)
         req_str += '&';
      req_str += paramName + '=' + dataToGet[paramName];
      needAndSign = true;
   }
   _rawGet(req_str, callback);
}
