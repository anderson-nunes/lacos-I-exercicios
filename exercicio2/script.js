function numeroTabuada() {
  let tabuada = Number(prompt(`Digite um número:`));

  for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }
}

numeroTabuada();
