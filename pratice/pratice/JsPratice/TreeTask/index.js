let tree = document.getElementById("tree");
const rootNode = {
  id: "root",
  children: [],
  value: "1",
};

function findNodeById(id, node) {
  if (node.id == id) return node;
  for (const child of node.children) {
    const foundNode = findNodeById(id, child);
    if (foundNode) return foundNode;
  }
  return null;
}

function findParentNode(id, node, parent = null) {
  if (node.id == id) {
    return parent;
  }
  for (const child of node.children) {
    const foundParentNode = findParentNode(id, child, node);
    if (foundParentNode) {
      return foundParentNode;
    }
  }
  return null;
}

function isDuplicateValue(value, node) {
  if (node.value === value) {
    return true;
  }
  for (const child of node.children) {
    if (isDuplicateValue(value, child)) {
      return true;
    }
  }
  return false;
}

function addNode(id) {
  const data = JSON.parse(localStorage.getItem("tree")) || rootNode;
  const node = findNodeById(id, data);


  const value = prompt("Enter the value new child node:").trim();
  
  if (value === null && value === "") { 
    return;
}

  if (isDuplicateValue(value, data)) {
    alert("already exists!");
    return;
  }
  //obj created
  const newChild = { value, id: generateRandomId(), children: [] };
  node.children.push(newChild);
  renderTree(data);
  localStorage.setItem("tree", JSON.stringify(data))

}
function removeNode(id) {
  let data = JSON.parse(localStorage.getItem("tree")) || rootNode;
  if (id === "root") {
    data.children = [];
    localStorage.setItem("tree", JSON.stringify(data));
    renderTree(data);
    return;
  }
  else {
    const parentNode = findParentNode(id, data);
    if (!parentNode) {
      alert("Parent node not found!");
      return false;
    }
    let a = parentNode.children.findIndex((i) => i.id == id)
    parentNode.children.splice(a, 1);
    localStorage.setItem("tree", JSON.stringify(data));
    renderTree(data);
  }

}
function moveNode(id) {
  const data = JSON.parse(localStorage.getItem("tree")) || rootNode;
  const selectedNode = findNodeById(id, data);
  if (!selectedNode) {
    alert("selected node not found!");
    return false;
  }

  const newParentId = prompt("Enter the id of the new parent node:");
  const newParentNode = findNodeById(newParentId, data);
  if (!newParentNode) {
    alert("New parent node not found!");
    return false;
  }

  const currentParentNode = findParentNode(id, data);
  if (!currentParentNode) {
    alert("Parent node of selected node not found!");
    return false;
  }

  //delete
  const index = currentParentNode.children.findIndex((child) => child.id == id);
  if (index != -1) {
    currentParentNode.children.splice(index, 1);
  }
  //added
  newParentNode.children.push(selectedNode);
  localStorage.setItem("tree", JSON.stringify(data))
  renderTree(data);
}
  function mergeNode(id) {
    const data = JSON.parse(localStorage.getItem("tree")) || rootNode;
    const selectedNode = findNodeById(id, data);
    if (!selectedNode) {
      alert("selected node not found!");
      return false;
    }

    const newParentId = prompt("Enter the id of the new parent node:");
    const newParentNode = findNodeById(newParentId, data);
    if (!newParentNode) {
      alert("New parent node not found!");
      return false;
    }

    const currentParentNode = findParentNode(id, data);
    if (!currentParentNode) {
      alert("Parent node of selected node not found!");
      return false;
    }

    //delete
    const index = currentParentNode.children.findIndex((child) => child.id == id);
    if (index != -1) {
      currentParentNode.children.splice(index, 1);
    }
    //added
    selectedNode.children.forEach((child) => {
      newParentNode.children.push(child);
    });

    localStorage.setItem("tree", JSON.stringify(data))
    renderTree(data);
  }
function generateRandomId() {
  return Math.floor(Math.random() * 90) + 14;
} 

function createTree(node) {
  let nodeHTML = "";
  if (node.id === "root") {
    nodeHTML += `
        <li class="">
            ${node.value} (id=${node.id})
            <span class="button" id="${node.id}" onclick="addNode('${node.id}')">ADD</span>
            <span class="button" id="${node.id}" onclick="removeNode('${node.id}')">Delete</span>
        `;
  } else {
    nodeHTML += `
        <li class="">
            ${node.value} (id=${node.id})
            <span class="button" id="${node.id}" onclick="addNode('${node.id}')">ADD</span>
            <span class="button" id="${node.id}" onclick="removeNode('${node.id}')">Delete</span>
            <span class="button" id="${node.id}" onclick="moveNode('${node.id}')">Move</span>
            <span class="button" id="${node.id}" onclick="mergeNode('${node.id}')">Merge</span>
        `;
  }

  if (node.children.length > 0) {
    let childrenHTML = "";
    node.children.forEach((child) => {
      childrenHTML += createTree(child);
    });
    //childnode
    nodeHTML += `<ul id="${node.id}" class="items">${childrenHTML}</ul>`;
  }

  nodeHTML += "</li>";
  return nodeHTML;
}

function renderTree(node) {
  tree.innerHTML = `<ul>${createTree(node)}</ul>`;
}
let localData = JSON.parse(localStorage.getItem("tree")) || rootNode
renderTree(localData);

