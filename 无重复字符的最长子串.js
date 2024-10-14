function lengthOfLongestSubstring(s){
  let set = new Set()
  let left = 0
  let maxlength = 0
  let maxStart = 0 // 记录最长子串的位置
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    if(right - left + 1 > maxlength){
      maxlength = right - left + 1
      maxStart = left
    }
    // maxlength = Math.max(maxlength,right - left + 1)

  }
  // return maxlength
  return [maxlength,s.slice(maxStart,maxStart + maxlength)]
}

console.log(lengthOfLongestSubstring('abccccdasdelsddfsa'))