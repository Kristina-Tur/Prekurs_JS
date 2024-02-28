// data
const info = {
  title: 'it-incubator',
  graduatesCount: 2000,
  areYouChampion: true,
  technologies: [
    {
      title: 'Front',
      id: 0
    },
    {
      title: 'Back',
      id: 1
    },
    {
      title: 'DevOps',
      id: 2
    }
  ]
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);



let selectElement = document.createElement('select');

let optionsElement0 = document.createElement('option');
optionsElement0.value = info.technologies[0].id;
optionsElement0.append(info.technologies[0].title);
selectElement.append(optionsElement0);

let optionsElement1 = document.createElement('option');
optionsElement1.value = info.technologies[1].id;
optionsElement1.append(info.technologies[1].title);
selectElement.append(optionsElement1);

let optionsElement2 = document.createElement('option');
optionsElement2.value = info.technologies[2].id;
optionsElement2.append(info.technologies[2].title);
selectElement.append(optionsElement2);

document.body.append(selectElement)
