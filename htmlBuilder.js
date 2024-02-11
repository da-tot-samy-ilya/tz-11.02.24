export const buildNestedHtmlList = (item) => {
  let html = `<li>${item.name}</li>`;
  if (item.children.length > 0) {
    html += "<ul>";
    item.children.forEach((child) => {
      html += buildNestedHtmlList(child);
    });
    html += "</ul>";
  }
  return html;
};

export const insertNestedHtmlList = (container, rootItems) => {
  let fullHtml = "";
  rootItems.forEach((rootItem) => {
    fullHtml += buildNestedHtmlList(rootItem);
  });
  container.innerHTML = `<ul>${fullHtml}</ul>`;
};
