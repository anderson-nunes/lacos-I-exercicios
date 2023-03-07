function fastFood() {
  let usuario = prompt(`Você deseja comer mais coxinhas?`).toUpperCase();

  let conta = 0;

  while (usuario !== "N" && usuario === "S") {
    conta = conta + 2.5;
    usuario = prompt(`Você deseja comer mais coxinhas?`).toUpperCase();
  }
  console.log(`O valor total da sua conta é: R$${conta} reais`);
}

fastFood();
