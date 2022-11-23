function dumpPlainText(fps, clicks, cf, rf, cpf, swift, p1, p2) {
  let output = "";
  output += `${fps}\n`;
  let c = 0;
  if (swift) {
    for (let i = 0; i < clicks; i++) {
      for (let j = 0; j < cpf; j++) {
        if (p1) output += `${i * +rf} 1 0\n${i * +rf} 0 0\n`;
        if (p2) output += `${i * +rf} 1 1\n${i * +rf} 0 1\n`;
      }
    }
  } else {
    let holding = true;
    let p;
    for (let i = 0; i < clicks * 2; i++) {
      if (holding) {
        p = (i / 2) * (+cf + +rf);
        if (p1) output += `${p} 1 0\n`;
        if (p2) output += `${p} 1 1\n`;
        holding = false;
      } else {
        if (p1) output += `${p + +cf} 0 0\n`;
        if (p2) output += `${p + +cf} 0 1\n`;
        holding = true;
      }
    }
  }
  return output;
}
