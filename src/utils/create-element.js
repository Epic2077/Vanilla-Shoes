export function El({
  element,
  children,
  evertlistener,
  dataset,
  restAttrs = {},
  className = "",
  ...rest
}) {
  const elem = document.createElement(element);
  for (const attr in rest) {
    elem[attr] = rest[attr];
  }
  if (children) {
    for (const child of children) {
      elem.append(child);
    }
  }
  if (evertlistener) {
    evertlistener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  if (dataset) {
    elem.dataset[key] = dataset[key];
  }
  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
  }
  elem.setAttribute("class", className);
  return elem;
}
