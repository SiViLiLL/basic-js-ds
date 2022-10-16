const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor(){
		 this.treeRoot = null
	}
	root() {
	  return this.treeRoot
	}
	add(data) {
	  const newLeaf = new Node(data);
	  if (!this.treeRoot){
			this.treeRoot = newLeaf;
	  } else {
			let currentNode = this.treeRoot;
			while(currentNode.right || currentNode.left){
			  if(newLeaf.data > currentNode.data){
					if (currentNode.right){
						 currentNode = currentNode.right;
					} else {
						 currentNode.right = newLeaf;
						 break
					}
			  } else if (newLeaf.data < currentNode.data){
					if (currentNode.left){
						 currentNode = currentNode.left;
					} else {
						 currentNode.left = newLeaf;
						 break
					}
			  }
		  }
		  if (newLeaf.data > currentNode.data){
				currentNode.right = newLeaf;
		  } else if (newLeaf.data < currentNode.data){
				currentNode.left = newLeaf;
		  }
	  }
 }
 has(data) {
	 if(!this.treeRoot) return false
	 let currentNode = this.treeRoot;
	 while(currentNode.right || currentNode.left){
		  if (data > currentNode.data){
				if (currentNode.right){
					 currentNode = currentNode.right;
				} else return false
		  } else if (data < currentNode.data){
				if (currentNode.left){
					 currentNode = currentNode.left;
				} else return false
		  } else return true
	 }
	 if (data === currentNode.data) return true 
	 return false;
 }
 find(data) {
	 if (!this.treeRoot) return null
	 let currentNode = this.treeRoot;
	 while (currentNode.right || currentNode.left){
		  if (data > currentNode.data){
				if (currentNode.right){
					 currentNode = currentNode.right;
				} else return null
		  }  else if (data < currentNode.data){
				if (currentNode.left){
					 currentNode = currentNode.left;
				} else return null
		  } else if (data === currentNode.data) return currentNode
	 }
	 if (data === currentNode.data) return currentNode
	 return null
 }
 remove(data) {
	if (this.treeRoot.data === data){
		 let rootNode = this.treeRoot;
			  if (rootNode.left && rootNode.right){
					let prevNode = rootNode;
					let currentNode = rootNode.right;
					while (currentNode.left){
						 prevNode = currentNode;
						 currentNode = currentNode.left;
					}
					let replacementElement = currentNode;
					if (currentNode.right){
						 prevNode.left = currentNode.right;
					} else {
						 prevNode.left = null;
					}
					replacementElement.right = rootNode.right;
					replacementElement.left = rootNode.left;
					rootNode = replacementElement;
					this.treeRoot = rootNode;
			  } else if (rootNode.left){
					 this.treeRoot = rootNode.left;
			  } else if (rootNode.right){
					 this.treeRoot = rootNode.right;
			  } else this.treeRoot = null
		 } else {
		 let prevNode = null;
		 let currentNode = this.treeRoot;
		 while (currentNode.right || currentNode.left){
			  if (currentNode.data > data){
					if (currentNode.left){
						 prevNode = currentNode;
						 currentNode = currentNode.left
					} else break
			  } else if (currentNode.data < data){
					if (currentNode.right){
						 prevNode = currentNode;
						 currentNode = currentNode.right
					} else break
			  } else if (currentNode.data === data) {
					if (currentNode.left && currentNode.right){
						 let prevDeleteElement = prevNode;
						 let deleteElement = currentNode;
						 prevNode = currentNode;
						 currentNode = currentNode.right;
						 while(currentNode.left){
							 prevNode = currentNode;
							 currentNode = currentNode.left;
						 }
						 let replaceElement = currentNode;
						 if (prevNode === deleteElement){
							  currentNode.left = prevNode.left;
							  if (prevDeleteElement.right && prevDeleteElement.right.data === data){
									prevDeleteElement.right = replaceElement
							  } else if (prevDeleteElement.left && prevDeleteElement.left.data === data){
									prevDeleteElement.left = replaceElement
							  }
						 } else {
							  if (currentNode.right){
								  prevNode.left = currentNode.right;
							  } else prevNode.left = null
							  replaceElement.right = deleteElement.right;
							  replaceElement.left = deleteElement.left;
							  if (prevDeleteElement.right && prevDeleteElement.right.data === data){
								  prevDeleteElement.right = replaceElement;
							  } else if (prevDeleteElement.left && prevDeleteElement.left.data === data){
								  prevDeleteElement.left = replaceElement;
							  }
						 }
					} else if (currentNode.left){
						 if (prevNode.left && prevNode.left.data === data){
							  prevNode.left = currentNode.left;
						 } else if (prevNode.right && prevNode.right.data === data){
							  prevNode.right = currentNode.left;
						 }
					} else if (currentNode.right){
						 if (prevNode.left && prevNode.left.data === data){
							  prevNode.left = currentNode.right;
						 } else if (prevNode.right && prevNode.right.data === data){
							  prevNode.right = currentNode.right;
						 }
					} 
					currentNode = null
					break
			  } 
		 }
		 if (currentNode && currentNode.data === data){
			  if (prevNode.left && prevNode.left.data === data){
					prevNode.left = null
			  } else if (prevNode.right && prevNode.right.data === data){
					prevNode.right = null
			  }
		 }
	}
}
 min() {
	  if (!this.treeRoot) return null
	  let currentNode = this.treeRoot;
	  while(currentNode.left){
			currentNode = currentNode.left
	  }
	  return currentNode.data
 }
 max() {
	  if (!this.treeRoot) return null
	  let currentNode = this.treeRoot;
	  while(currentNode.right){
			currentNode = currentNode.right
	  }
	  return currentNode.data
 }
}


module.exports = {
  BinarySearchTree
};