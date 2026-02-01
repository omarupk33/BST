class treeNode{
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right 
    }
}


function bst(list, start= 0 , end = list.length - 1){
    if (start > end){
     return list
    }

    let mid = Math.ceil((start + end)/2)

    let root = new treeNode(list[mid])
    root.data = list[mid]
    root.left = bst(list,start, mid - 1)
    root.right = bst(list, mid + 1, end)


    return root
}


console.log(bst([1,2,3,4,5,6,7]))