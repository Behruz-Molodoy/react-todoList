export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}
export const getPageArray = (totalPage) => {
  let res = []
  for (let i = 0; i < totalPage; i++) {
    res.push(i + 1)
  }
  return res
}