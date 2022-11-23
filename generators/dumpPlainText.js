function dumpPlainText(fps, clicks, cpf, swift, p1, p2) {
  let output = "";
  output += `${fps}\n`;
  if (swift) {
    for (let i = 0; i < clicks; i++) {
      for (let j = 0; j < cpf; j++) {
        if (p1) output += `${i} 1 0\n${i} 0 0\n`;
        if (p2) output += `${i} 1 1\n${i} 0 1\n`;
      }
    }
  } else {
    let holding = true;
    for (let i = 0; i < clicks * 2; i++) {
      if (holding) {
        if (p1) output += `${i} 1 0\n`;
        if (p2) output += `${i} 1 1\n`;
        holding = false;
      } else {
        if (p1) output += `${i} 0 0\n`;
        if (p2) output += `${i} 0 1\n`;
        holding = true;
      }
    }
  }
  return output;
}
