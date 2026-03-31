
// time complexity: O(n)
for(let i=0; i<n; i++){
    console.log(i);
}

// time complexity: O(n^2)
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        console.log(i, j);
    }
}

// time complexity: O(n^3)
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
            console.log(i, j, k);
        }
    }
}

// example for o(2n) => O(n)
for(let i=0; i<n; i++){
    console.log(i);
}
