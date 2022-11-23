function dumpMHRJson(fps, clicks, cf, rf, cpf, swift, p1, p2) {
  let output = {
    _: "Generated from gd spam macro generator",
    events: [],
    meta: { fps: +fps },
  };
  if (swift) {
    for (let i = 0; i < clicks; i++) {
      for (let j = 0; j < cpf; j++) {
        if (p1)
          output.events.push(
            {
              a: 0,
              down: true,
              frame: i * +rf,
              r: 0,
              x: 0,
              y: 0,
            },
            {
              a: 0,
              down: false,
              frame: i * +rf,
              r: 0,
              x: 0,
              y: 0,
            }
          );
        if (p2)
          output.events.push(
            {
              a: 0,
              down: true,
              frame: i * +rf,
              p2: true,
              r: 0,
              x: 0,
              y: 0,
            },
            {
              a: 0,
              down: false,
              frame: i * +rf,
              p2: true,
              r: 0,
              x: 0,
              y: 0,
            }
          );
      }
    }
  } else {
    let holding = true;
    let p;
    for (let i = 0; i < clicks * 2; i++) {
      if (holding) {
        p = (i / 2) * (+cf + +rf);
        if (p1)
          output.events.push({
            a: 0,
            down: true,
            frame: p,
            r: 0,
            x: 0,
            y: 0,
          });
        if (p2)
          output.events.push({
            a: 0,
            down: true,
            frame: p,
            p2: true,
            r: 0,
            x: 0,
            y: 0,
          });
        holding = false;
      } else {
        if (p1)
          output.events.push({
            a: 0,
            down: false,
            frame: p + +cf,
            r: 0,
            x: 0,
            y: 0,
          });
        if (p2)
          output.events.push({
            a: 0,
            down: false,
            frame: p,
            p2: true + +cf,
            r: 0,
            x: 0,
            y: 0,
          });
        holding = true;
      }
    }
  }
  return JSON.stringify(output, null, 1);
}
