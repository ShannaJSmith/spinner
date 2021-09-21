let lines = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let delay = 100;
for (let i = 0; i < lines.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + lines[i]);
  }, delay);
  delay += 200;
}