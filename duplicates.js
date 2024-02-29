// Duplicar Text de Card Item
const textOriginal = document.getElementById("textOriginal");

const textCardElement = document.getElementById("textDulp");

const duplicarTextCard = () => {
  const textCardDulp = textOriginal.cloneNode(true);
  return textCardElement.appendChild(textCardDulp);
};

// Duplicar Card Item
const frameOriginal = document.getElementById("frameItem");

const frameArray = [
  document.getElementById("frameDupl1"),
  document.getElementById("frameDupl2"),
  document.getElementById("frameDupl3"),
  document.getElementById("frameDupl4"),
  document.getElementById("frameDupl5"),
  document.getElementById("frameDupl6"),
];

let framesDuplicados = [];

const duplicarFrame = () => {
  for (i = 0; i < frameArray.length; i++) {
    let clone = frameOriginal.cloneNode(true);
    frameArray[i].appendChild(clone);
    framesDuplicados.push(clone);
  }
  return framesDuplicados;
};

// Duplicar Grupo de Cartas
const groupOriginal = document.getElementById("groupCards");
const groupElement = document.getElementById("groupDupl");

const duplicarGroup = () => {
  const groupDuplicado = groupOriginal.cloneNode(true);
  return groupElement.appendChild(groupDuplicado);
};

// Duplicar Tabela de Produtos
const tabProductOriginal = document.getElementById("tabProduct");
const tabProductElement = document.getElementById("tabProductDupl");

const duplicarTabProduct = () => {
  const tabProductDuplicado = tabProductOriginal.cloneNode(true);
  return tabProductElement.appendChild(tabProductDuplicado);
};

// Duplicar flexRow
const flexRowOriginal = document.getElementById("flexRow");
const flexRowArray = [
  document.getElementById("flexRowDupl"),
  document.getElementById("flexRowDupl1"),
  document.getElementById("flexRowDupl2"),
];
let flexRowDuplicados = [];

const duplicarFlexRow = () => {
  for (i = 0; i < flexRowArray.length; i++) {
    let clone = flexRowOriginal.cloneNode(true);
    flexRowArray[i].appendChild(clone);
    flexRowDuplicados.push(clone);
  }
  return flexRowDuplicados;
};

// Duplicar Texto do blog
const textBlogOriginal = document.getElementById("blogText");

const textBlogArray = [
  document.getElementById("blogTextDupl"),
  document.getElementById("blogTextDupl1"),
];

let textBlogDuplicados = [];

const duplicarTextBlog = () => {
  for (i = 0; i < textBlogArray.length; i++) {
    let clone = textBlogOriginal.cloneNode(true);
    textBlogArray[i].appendChild(clone);
    textBlogDuplicados.push(clone);
  }
  return textBlogDuplicados;
};

// Chamada das Funções para duplicação dos elementos
window.onload = () => {
  duplicarTextCard();
  duplicarFrame();
  duplicarGroup();
  duplicarTabProduct();
  duplicarFlexRow();
  duplicarTextBlog();
};
