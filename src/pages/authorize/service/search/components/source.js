const digzOla = () => {
  alert("Say My Name!");
};

const getData = () => {
  const os = document.querySelector("#os").value;
  const name = document.querySelector("#name").value;
  const cpf = document.querySelector("#cpf").value;

  if (os) {
    alert(os);
    return;
  }
  if (cpf) {
    alert(cpf);
    return;
  }
  if (name) {
    alert(name);
    return;
  }
};

export { digzOla, getData };
