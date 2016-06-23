
export default function ajaxPromise(path) {

  return new Promise( (resolve, reject) => {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", path, true);

    ajax.onload = () => {
      if (ajax.readyState === 4) {
        if (ajax.status === 200){
          resolve(ajax.responseText);
        }
        else
          reject(ajax.statusText);
      }
      else
        reject("unknown error in ajax");
    };
    ajax.onerror = () => {
      reject(ajax.statusText);
    };

    ajax.send();
  });
}