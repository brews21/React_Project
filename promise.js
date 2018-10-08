// write a function to retrieve  a blob of json
// make a AJAX request; Use the fetch function

//

// .then will get called if the fetch returns/ is resolved
function fetchAlbums() {
  fetch("URL")
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();

// using async

async function fetchAlbums() {
  const res = await fetch("URL");
  const json = await res.json();
  console.log(json);
}


const fetchAlbums = async () => {
  const res = await fetch("URL");
  const json = await res.json();
  console.log(json);
}
