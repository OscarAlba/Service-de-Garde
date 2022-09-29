import React from "react";

function ImageChange(original) {
  
  const imagesPath = {
    original: original.original,
    selected: original.selected
  }

  let imageName = 'original';

  
  const clickButton = () => {
  
    let idImg = document.querySelector("#"+original.id);

    (imageName === 'original') ? imageName ='selected':imageName ='original';
  
    idImg.setAttribute("src",imagesPath[imageName]);
  };

  
  return (
    <React.Fragment>
      <img id={original.id} src={imagesPath[imageName]}
        onClick={clickButton} />
    </React.Fragment>
  );

}


export { ImageChange }