const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
let hideLevel = false;

function el (element, arr) {
  const NUM0 = 0, NUM1 = 1;
  let created = typeof element === 'string' ? document.createElement(element) : element;
  if (arr) {
    for (let i in arr) {
      if (typeof arr[i] === 'string') {
        if (arr[i][NUM0] === '.') {
          created.classList.add(arr[i].slice(NUM1));
        } else {
          created.textContent = arr[i];
        }
      } else if (typeof arr[i] === 'object') {
        created.appendChild(arr[i]);
      }      
    }
  }
  return created;
}

function folders (arrFolders) {
  const NUM0 = 0;
  let ul = el('ul');
  if (hideLevel) {
    ul.className = 'hide';
  }
  hideLevel = true;
  if (arrFolders) {
    for (let i = NUM0; i < arrFolders.length; i++) {
      let li = createLi(arrFolders[i].title, arrFolders[i].folder ? 'folder' : 'insert_drive_file');
      if (arrFolders[i].folder) {
        li.appendChild(folders(arrFolders[i].children));
      }
      ul.appendChild(li);
    }
  } else {
    el(ul, ['.empty', createLi('Folder is empty')]);
  }
  return ul
}

function createLi (name, iconName) {
  let div = el('div');
  if (iconName) {
    let icon = el('i', [iconName, '.material-icons', `.${iconName === 'folder' ? 'folder' : 'file'}`]);
    el(div, ['.hover', icon]);
    if (iconName === 'folder') {
      div.addEventListener('click', click);
    }
  }
  return el('li', [ el(div, [ el('span', [name]) ] ) ] );
}

function click () {
  this.nextElementSibling.classList.toggle('hide');
  this.firstElementChild.textContent = this.nextElementSibling.classList.contains('hide') ?
      'folder' : 'folder_open';
}

rootNode.appendChild(folders(structure));
