//Удаление пробелов из поля ввода
export const deleteSpaces = (value) => {
  return value.replace(/\s/g, "");
};

//Удаление пробелов и цифр из поля ввода
export const deleteSpacesAndFigures = (value) => {
  return value.replace(/\s/g, "").replace(/\d/g, "");
};

