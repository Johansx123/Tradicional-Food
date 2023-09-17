export function useFilter(db, prop, value, start, end) {
  
  const elementsFiletered =  db.filter(e => e?.[prop] == value);
  const elementsSlice = end ? elementsFiletered.slice(start, end) : elementsFiletered.slice(start);
  let elements = [];
  if (!start && start !== 0) {
    if (elementsFiletered.length == 1) {
      elements = [elementsFiletered[0]];
    } else {
      elements = elementsFiletered;
    }
  } else {
    elements = elementsSlice;
  }
  return elements ;

}
