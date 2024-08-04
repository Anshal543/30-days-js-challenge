// median of two sorted Arrays

function medianOfArray(nums1,nums2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            result.push(nums1[i]);
            i++;
        }else{
            result.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length){
        result.push(nums1[i]);
        i++;
    }
    while(j < nums2.length){
        result.push(nums2[j]);
        j++;
    }
    const n = result.length;
    if(n%2===1){
        return result[Math.floor(n/2)];
    }else{
        const mid = n/2;
        return (result[mid-1]+result[mid])/2;
    }

}

console.log(medianOfArray([1, 3], [2])); 
console.log(medianOfArray([1, 2], [3, 4]));
console.log(medianOfArray([0, 0], [0, 0]));