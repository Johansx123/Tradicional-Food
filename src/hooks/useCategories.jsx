export default function useCategories () {
  const getCategories = () => {
    return fetch('https://api.tradicionalfood.com/categories')
      .then(res => res.json())
      .then(data => { return data; });
  };
  return { getCategories };
}
