function setTwitterShareHref(element){
  element.setAttribute("href", "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) );
}

function setTwitterShareHrefAll(){
  elements = document.getElementsByClassName("twitter-share-link");
  for(var i=0; i<elements.length; i++)
    setTwitterShareHref(elements[i]);
}