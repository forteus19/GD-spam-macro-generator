function dumpEcho(fps, clicks, cpf, swift, p1, p2) {
  let output = {
    FPS: parseInt(fps),
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
              Frame: i,
              "X Position": 0,
            },
            {
              Hold: false,
              "Player 2": false,
              Frame: i,
              "X Position": 0,
            }
          );
        if (p2)
          output["Echo Replay"].push(
            {
              Hold: true,
              "Player 2": true,
              Frame: i,
              "X Position": 0,
            },
            {
              Hold: false,
              "Player 2": true,
              Frame: i,
              "X Position": 0,
            }
          );
      }
    }
  } else {
    let holding = true;
    for (let i = 0; i < clicks * 2; i++) {
      if (holding) {
        if (p1)
          output["Echo Replay"].push({
            Hold: true,
            "Player 2": false,
            Frame: i,
            "X Position": 0,
          });
        if (p2)
          output["Echo Replay"].push({
            Hold: true,
            "Player 2": true,
            Frame: i,
            "X Position": 0,
          });
        holding = false;
      } else {
        if (p1)
          output["Echo Replay"].push({
            Hold: false,
            "Player 2": false,
            Frame: i,
            "X Position": 0,
          });
        if (p2)
          output["Echo Replay"].push({
            Hold: false,
            "Player 2": true,
            Frame: i,
            "X Position": 0,
          });
        holding = true;
      }
    }
  }
  return JSON.stringify(output, null, 1);
}
