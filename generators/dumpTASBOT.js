function dumpTASBOT(fps, clicks, cf, rf, fo, cpf, swift, p1, p2) {
  let output = {
    fps: fps,
    macro: [],
  };
  if (swift) {
    for (let i = 0; i < clicks; i++) {
      for (let j = 0; j < cpf; j++) {
        if (p1)
          output.macro.push(
            {
              frame: i * rf + fo,
              player_1: {
                click: 1,
                x_position: 0,
              },
              player_2: {
                click: 0,
                x_position: 0,
              },
            },
            {
              frame: i * rf + fo,
              player_1: {
                click: 2,
                x_position: 0,
              },
              player_2: {
                click: 0,
                x_position: 0,
              },
            }
          );
        if (p2)
          output.macro.push(
            {
              frame: i * rf + fo,
              player_1: {
                click: 0,
                x_position: 0,
              },
              player_2: {
                click: 1,
                x_position: 0,
              },
            },
            {
              frame: i * rf + fo,
              player_1: {
                click: 0,
                x_position: 0,
              },
              player_2: {
                click: 2,
                x_position: 0,
              },
            }
          );
      }
    }
  } else {
    let holding = true;
    let p;
    for (let i = 0; i < clicks * 2; i++) {
      if (holding) {
        p = (i / 2) * (cf + rf);
        if (p1)
          output.macro.push({
            frame: p + fo,
            player_1: {
              click: 1,
              x_position: 0,
            },
            player_2: {
              click: 0,
              x_position: 0,
            },
          });
        if (p2)
          output.macro.push({
            frame: p + fo,
            player_1: {
              click: 0,
              x_position: 0,
            },
            player_2: {
              click: 1,
              x_position: 0,
            },
          });
        holding = false;
      } else {
        if (p1)
          output.macro.push({
            frame: p + cf + fo,
            player_1: {
              click: 2,
              x_position: 0,
            },
            player_2: {
              click: 0,
              x_position: 0,
            },
          });
        if (p2)
          output.macro.push({
            frame: p + cf + fo,
            player_1: {
              click: 0,
              x_position: 0,
            },
            player_2: {
              click: 2,
              x_position: 0,
            },
          });
        holding = true;
      }
    }
  }
  return JSON.stringify(output, null, 1);
}
