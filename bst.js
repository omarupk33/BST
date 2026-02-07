class treeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null 
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
    // should sort and remove duplicates
    array.sort()

    function buildTree(array, start= 0 , end = array.length - 1){
    if (start > end){
     return null
    }

    let mid = Math.floor((start + end)/2)
    let root = new treeNode(array[mid])
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

    function insert(value, rt=root){
        if (rt === undefined || rt === null){return new treeNode(value)}

        if (value < rt.data){
            rt.left = insert(value, rt.left) 
        }
        else if (value > rt.data){
            rt.right = insert(value, rt.right)
        }
        else{
            return null
        }
        }


    return {root, includes, insert}
}

let thatOneTree = new Tree([1,4,3,5,6,7,9])

// not working despite the efforts
thatOneTree.insert(10)

prettyPrint(thatOneTree.root)
console.log(thatOneTree.root)
