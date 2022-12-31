export function isEmptyO(obj) {
  return !!Object.keys(obj).length
  /* 因为访问到的链接地址数据是
  {dest_list
    {'成都'[{
      id:1,message:'erwewe
    }]
    }
  }
  所以这里的意思就是拿到对象里面的key的值也就是成都的数组length是否有值
  这里加上两个！！是把后面的转成布尔类型有值返回true
  */
}
