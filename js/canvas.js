function injectCanvas(parent, className){
  var orientation  = parent.getAttribute("data-canvas-exif-orientation");
  var src          = parent.getAttribute("data-canvas-src");
  var extraClasses = parent.getAttribute("data-canvas-classes") === null ? "" : parent.getAttribute("data-canvas-classes");
  loadImage(
    src,
    function (canvas) {
      canvas.className="expand-width" + extraClasses;
      parent.appendChild(canvas);
    },
    {
      canvas: true,
      orientation: Number(orientation)
    }
  );
};

function injectCanvasAll(){
  var canvasParents = document.getElementsByClassName("canvas-parent");
  for(var i=0; i<canvasParents.length; i++)
    injectCanvas(canvasParents[i]);
}