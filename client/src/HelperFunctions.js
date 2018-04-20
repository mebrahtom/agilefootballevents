


export const importAll = (r) =>{
  let images = {};
  r.keys().forEach(function(element){
    images[element.replace('./', '')] = r(element);
  });
  return images;
}
