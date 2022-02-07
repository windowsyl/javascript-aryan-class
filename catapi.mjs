import { default as axios } from 'axios';
import { default as fs } from 'fs';
import { default as cp } from 'child_process';
import { default as enq } from 'enquirer';
const path = '/Users/sylvan/Documents/GitHub/javascript-aryan-class/test.png';
const index = {
  box: '5',
  sunglasses: '4',
  space: '2',
  sink: '14',
};
const breed_ids = {
  Abyssinian: 'abys',
  Aegean: 'aege',
  Himalayan: 'hima',
};

async function categorySearch(category) {
  let writer = fs.createWriteStream(path);
  let resp = await axios.get(
    `https://api.thecatapi.com/v1/images/search${category}`,
    {
      headers: {
        'x-api-key': 'a9f4a8eb-eb88-4c22-a8c1-f66f23f98ebc',
      },
    }
  );
  let url = resp.data[0].url;

  let img = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  img.data.pipe(writer);
  writer.on('finish', () => {
    cp.exec('open test.png');
    setTimeout(() => cp.exec('rm test.png'), 600);
  });
}

console.log("apparently the api doesn't support searching by multiple parameters, so if you want too look for a specific breed, you must select random for the category")
while (true) {
  let catprompt = new enq.AutoComplete({
    name: 'category',
    message: 'choose a category',
    choices: ['random', 'box', 'sink', 'sunglasses', 'space', 'exit'],
  });
  let cat = await catprompt.run();
  if (cat == 'exit') {
    break;
  }

  let breedprompt = new enq.AutoComplete({
    name: 'breed',
    message: 'choose a breed',
    choices: ['random', 'Himalayan', 'Aegean', 'Abyssinian', 'Free Response'],
  });

  let args = '';
  if (cat != 'random') {
    args += '?category_ids=' + index[cat];
  } else {
    let breed = await breedprompt.run();
    if (breed == 'Free Response') {
      let freeresponse = new enq.Input({
        message: "submit a breed id",
        initial: "mcoo"
      })
      args += "?breed_ids=" + await freeresponse.run()
    } else if (breed != 'random') {
      args += '?breed_ids=' + breed_ids[breed];
    }
  }
  categorySearch(args);
}
// categorySearch('?category_ids=5')
