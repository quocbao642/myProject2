const getBlob = (url) => {
  fetch(url)
    .then((response) => {
      let myBlob = response.blob();
      return myBlob;
    })
    .then((myBlob) => {
      let objectURL = URL.createObjectURL(myBlob);
      var myImage = document.getElementById("my-img");
      myImage.src = objectURL;
    })
    .catch((error) => {
      console.log("Error!");
      console.log(error);
    });
};

let id = 0;

const clickNext = () => {
  id = parseInt(id + 1);
  getBlob(`https://picsum.photos/id/${id}/200/300`);
};

const clickPrev = () => {
  if (parseInt(id - 1) >= 0) {
    id = parseInt(id - 1);
  } else {
    alert("No Image");
  }
  getBlob(`https://picsum.photos/id/${id}/200/300`);
};
