function twoSum(nums, target) {

    let final = []
    let doubles = []
    for (let i = 0; i < nums.length; i++) {
        let float = (target - nums[i])
        if (target / 2 === float) { doubles.push(nums[i]) }
        if (nums.includes(float) && float !== nums[i]) { final.push(nums.indexOf(nums[i])) && (nums.indexOf(float)) }
    }

    if (doubles.length === 2) { final.push(nums.indexOf(doubles[0])) }
    if (nums.indexOf(doubles[0] !== -1)) { nums[nums.indexOf(doubles[0])] = 'x' }
    if (doubles.length === 2) { final.push(nums.indexOf(doubles[0])) }
    return final
};