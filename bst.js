class treeNode{
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right 
    }
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
    return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

function Tree(array){

    let root = null

    array.sort()

    function buildTree(array, start= 0 , end = array.length - 1){
    if (start > end){
     return array
    }

    let mid = Math.ceil((start + end)/2)
    let root = new treeNode(array[mid])
    root.data = array[mid]
    root.left = buildTree(array,start, mid - 1)
    root.right = buildTree(array, mid + 1, end)


    return root
}

    root = buildTree(array)


    function includes(value){
        for (let element of array){
            if(element === value){
                return true
            }
        }
        return false
    }

    function insertion(value){
        for (let element of array){
        if(value > element){
            array.push(value)
            array.sort()
            break
        }
        }

        root = buildTree(array)
        prettyPrint(root)
    }


    return {root,  includes, insertion}
}

let thatOneTree = new Tree([1,2,4,3,5,6,7,9])

thatOneTree.insertion(0)

// prettyPrint(thatOneTree.root)
// console.log(thatOneTree.includes(6))