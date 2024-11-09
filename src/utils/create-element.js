export function El({
  element,
  children,
  eventListener,
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
    const childrenArray = Array.isArray(children) ? children : [children];
    for (const child of childrenArray) {
      elem.append(child);
    }
  }
  if (eventListener) {
    eventListener.forEach((el) => elem.addEventListener(el.event, el.callback));
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
