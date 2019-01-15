let app = document.getElementById("app");
//create 创建，此时div还未存在于页面，但存在于内存
let div = document.createElement("div");
let state = 0;
div.innerHTMl = `
  <p>${state}</p>
  <button>+1</button>
  <button>移除div</button>
`;
//mount 挂载
app.appendChild(div);
div.querySelectorAll("button")[0].onclick = () => {
  state += 1;
  //update 更新
  div.querySelector("p").innerText = state;
};
div.querySelectorAll("button")[1].onclick = () => {
  div.querySelectorAll("button")[0].onclick = null;
  div.querySelectorAll("button")[1].onclick = null;
  div.remove();
  //destory
  div = null;
};
