let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = process.stdin.on('data', (key) => {
  if (key === "w") {
    conn.write("Move: up");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "d") {
    conn.write ("Move: right");
  } if (key === "l") {
    conn.write ("Say: OHAI!");
  }
});

  return stdin;

}

module.exports = setupInput;