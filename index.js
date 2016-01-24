const path = require('path');
const settings = require(path.join(__dirname, 'settings.json'));
const knox = require('knox');
const client = knox.createClient({
    key: settings.key
  , secret: settings.secret
  , bucket: settings.bucket
});

//------        list         ------//
client.list({ prefix: settings.bucketPath }, function(err, data){
  console.log(data)
});
//------     end of list     ------//


//------       get         ------//
/*client.get(settings.bucketPath + 'template.config').on('response', function(res){
  console.log(res.statusCode);
  console.log(res.headers);
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log(chunk);
  });
}).end();*/
//------     end of get     ------//

//------        put         ------//
/*const object = { foo: "bar" };
const string = JSON.stringify(object);
const req = client.put(settings.bucketPath + 'obj.json', {
    'Content-Length': Buffer.byteLength(string)
  , 'Content-Type': 'application/json'
  , 'x-amz-acl': 'public-read' 
});
req.on('response', function(res){
  if (200 == res.statusCode) {
    console.log('saved to %s', req.url);
  }
});
req.end(string);*/
//------     end of put     ------//

//------        delete         ------//
/*client.del(settings.bucketPath + 'obj.json').on('response', function(res){
  console.log(res.statusCode);
  console.log(res.headers);
}).end();*/
//------     end of delete     ------//


