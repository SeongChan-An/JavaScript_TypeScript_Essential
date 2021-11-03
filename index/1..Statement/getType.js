export default function getType(data) {
    // Type 구분
    return Object.prototype.toString.call(data).slice(8, -1);
}
