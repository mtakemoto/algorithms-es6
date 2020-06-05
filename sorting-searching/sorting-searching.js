const mergeArray = (m, nums1, n, nums2) => {
    let n1idx = m - 1;
    let n2idx = n - 1;
    let compare = n - 1;

    while (n1idx > 0 || n2idx > 0) {
        if (nums1[compare] <= nums2[n2idx]) {
            swap(nums1, nums2, n1idx, n2idx);
            n1idx--, n2idx--;
        }
        else {
            swap(nums1, nums1, n1idx, compare)
            n1idx--, compare--;
        }
    }

    return nums1;
}

const swap = (N1, N2, n1idx, n2idx) => {
    let temp = N1[n1idx];
    N1[n1idx] = N2[n2idx];
    N2[n2idx] = temp;
}

export { mergeArray }