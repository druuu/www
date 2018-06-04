define(function (require) {

    var Y = require('y');
    require('y-memory')(Y);
    require('y-webrtc')(Y);
    require('y-array')(Y);
    require('y-map')(Y);

    console.log('2222222222222');
    require('y-xml')(Y);
    console.log('33333333333');

    Y({
      db: {
        name: 'memory'
      },
      connector: {
        //name: 'websockets-client',
        name: 'webrtc',
        room: 'dinesh'
      },
      sourceDir: '/bower_components',
      share: {
        xml: 'Xml("p")' // y.share.xml is of type Y.Xml with tagname "p"
      }
    }).then(function (y) {
      window.yXml = y
      // bind xml type to a dom, and put it in body
      window.sharedDom = y.share.xml.getDom()
      document.body.appendChild(window.sharedDom)
    })

});
