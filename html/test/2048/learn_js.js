const target = {
    for: 'bar'
}
const handler = {
    get() {
        return "handler override"
    }
}
const proxy = new Proxy(target, handler)
console.log(target.for)
console.log(proxy.for)