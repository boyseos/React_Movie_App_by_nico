import React from 'react'

function swap(a: number,b: number){
    let temp = a
    b = a, a = temp
}

function quickSort (arr: Array<number>): number[]{
    const len = arr.length / 2 + 1
    let temp
    for(let i=0; i < len; i++){
        arr[i] > arr[len] ? 
            (temp = arr[i], arr[i] = arr[len], arr[len] = temp)
         : null
    }
    return []

}

export default function Sort(arr: Array<number>): any{

    return (
    <div>

    </div>)
}