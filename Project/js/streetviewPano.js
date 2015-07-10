function init() {
  var _panoLoader = new GSVPANO.PanoLoader({zoom: 2});
  var _depthLoader = new GSVPANO.PanoDepthLoader();

  // load depthMap
  _depthLoader.onDepthLoad = function() {
    var x, y, canvas, context, image, w, h, c;
    
    canvas = document.createElement("canvas");
    context = canvas.getContext('2d');

    w = this.depthMap.width;
    h = this.depthMap.height;

    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    
    image = context.getImageData(0, 0, w, h);

    for(y=0; y<h; ++y) {
      for(x=0; x<w; ++x) {
        c = this.depthMap.depthMap[y*w + x] / 50 * 255;
        image.data[4*(y*w + x)    ] = c;
        image.data[4*(y*w + x) + 1] = c;
        image.data[4*(y*w + x) + 2] = c;
        image.data[4*(y*w + x) + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
    gDepthMap = this.depthMap;
    // $("body").append(canvas);
  }

  // load panorama img
  _panoLoader.onPanoramaLoad = function() {
    // var imgData = document.createElement("img");
    // imgData.src = this.canvas.toDataURL("image/png")
    // $("body").append(imgData)
    imgData = this.canvas.toDataURL("image/png");

    initRenderSphere(imgData);

    _depthLoader.load(this.panoId);
  };

  _panoLoader.load(new google.maps.LatLng(51.520027, -0.069247));
}//end of init

window.onload = function() {
  init();
} 

