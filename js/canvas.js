function injectCanvas(parent){
  var orientation = parent.getAttribute("data-canvas-exif-orientation");
  var src         = parent.getAttribute("data-canvas-src");
  loadImage(
    src,
    function (canvas) {
      canvas.className="img-circle expand-width";
      parent.appendChild(canvas);
    },
    {
      canvas: true,
      orientation: Number(orientation)
    }
  );
};

function injectCanvasAll(){
  var canvasParents = document.getElementsByClass("canvas-parent");
  for(var i=0; i<canvasParents.length; i++)
    injectCanvas(canvasParents[i]);
}