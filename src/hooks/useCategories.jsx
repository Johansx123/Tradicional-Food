export default function useCategories () {
  const getCategories = () => {
    return fetch('/api/api/categories')
      .then(res => res.json())
      .then(data => { return data; });
  };
  return { getCategories };
}
