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
        return rt
        }

// Advanced to here. Good work fello!
        function deleteItem(value, themainRoot=root){
            // Search for the value
            let target = themainRoot
            let parent = null
            // Need the parent here
            while(target.data !== value){
                if(value < target.data){
                    parent = target
                    target = target.left
                    if(target === null){return undefined}
                }

                else if(value > target.data){
                    parent = target
                    target = target.right
                    if(target === null){return undefined}
                }

                else{
                    break
                }
            }

            // When found check what type of node we got
            // Has no children
            if(target.left === null && target.right === null){
                if(parent.left.data === target.data){parent.left = null}
                else{parent.right = null}
            }

            // Has children on left
            else if(target.left !== null && target.right === null){
                if(parent.left.data === target.data)
                    {parent.left = target.left}

                else{parent.right = target.left}
            }

            // Has children on right
            else if(target.right !== null && target.left === null){
                if(parent.left.data === target.data)
                    {parent.left = target.right}

                else{parent.right = target.right}
            }
            else{
                let rightChild = target.right

                if(parent.left.data === target.data){
                    parent.left = target.left
                    parent.left.right = rightChild
                }   

                else{
                    parent.right = target.left
                    parent.right.right = rightChild
                }   
            }

            prettyPrint(themainRoot)
            return target
        }

        function printvalue(value){
         console.log(value)
         return
        }

        function levelOrderForEach(rt= root, callback= printvalue){
            if(rt === null){
                return 
            }


            if (array.at(Math.floor((0 + array.length)/2)) === rt.data)
            {callback(rt.data)}
            
            if(rt.left !== null){
                callback(rt.left.data)
            }

            if(rt.right !== null){
                callback(rt.right.data)
            }

                levelOrderForEach(rt.left);
                levelOrderForEach(rt.right);
        }


        function levelOrderForEachIterate(callback= printvalue){
            let dequeue = []
            dequeue.push(root)
            while(dequeue.length !== 0){
                let curr = dequeue[0]
                callback(curr.data)
                if(curr.left !== null){dequeue.push(curr.left)}
                if(curr.right !== null){dequeue.push(curr.right)}
                dequeue.shift()
            }            
        }

    return {root, includes, insert, deleteItem, levelOrderForEach, levelOrderForEachIterate}
}

let thatOneTree = new Tree([0,1,4,3,5,6,7])


thatOneTree.levelOrderForEach()
prettyPrint(thatOneTree.root)
