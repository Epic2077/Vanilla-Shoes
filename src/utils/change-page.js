export function changePage(PageComponent, data = {}) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const pageContent = PageComponent(data);
  app.appendChild(pageContent);
}
