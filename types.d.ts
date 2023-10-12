type card = {
  title: string,
  body:string,
  picture: string | any
  reverse: boolean = false
}
type project = {
  title: string,
  body:string,
  picture: string | any,
  tags: Array<string> = [],
  reverse: boolean = false
}