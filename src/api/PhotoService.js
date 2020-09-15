export default async function getPhoto(item, id) {
  const url = `https://starwars-visualguide.com/assets/img/${item}/${id}.jpg`;
   
  return await fetch(url);
}
