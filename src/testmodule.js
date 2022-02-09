console.log('Test import module');

async function start() {
  return await Promise.resolve('async testing 222222');
}

start()
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  });
