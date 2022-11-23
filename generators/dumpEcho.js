function dumpEcho(fps, clicks, cf, rf, cpf, swift, p1, p2) {
  let output = {
    FPS: +fps,
    "Starting Frame": 0,
    "Echo Replay": [],
  };
  if (swift) {
    for (let i = 0; i < clicks; i++) {
      for (let j = 0; j < cpf; j++) {
        if (p1)
          output["Echo Replay"].push(
            {
              Hold: true,
              "Player 2": false,
              Frame: i * +rf,
              "X Position": 0,
            },
            {
              Hold: false,
              "Player 2": false,
              Frame: i * +rf,
              "X Position": 0,
            }
          );
        if (p2)
          output["Echo Replay"].push(
            {
              Hold: true,
              "Player 2": true,
              Frame: i * +rf,
              "X Position": 0,
            },
            {
              Hold: false,
              "Player 2": true,
              Frame: i * +rf,
              "X Position": 0,
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
          output["Echo Replay"].push({
            Hold: true,
            "Player 2": false,
            Frame: p,
            "X Position": 0,
          });
        if (p2)
          output["Echo Replay"].push({
            Hold: true,
            "Player 2": true,
            Frame: p,
            "X Position": 0,
          });
        holding = false;
      } else {
        if (p1)
          output["Echo Replay"].push({
            Hold: false,
            "Player 2": false,
            Frame: p + +cf,
            "X Position": 0,
          });
        if (p2)
          output["Echo Replay"].push({
            Hold: false,
            "Player 2": true,
            Frame: p + +cf,
            "X Position": 0,
          });
        holding = true;
      }
    }
  }
  return JSON.stringify(output, null, 1);
}
