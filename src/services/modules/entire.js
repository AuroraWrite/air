import hyRequest from '..'

export function getEntireRoomListData(offset = 0, size = 20) {
  // offset = 0表示从第0条数据开始取，size表示取20条，还有个page=1表示从第一页数据开始取
  return hyRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size,
    },
  })
}
