module.exports = function(source) {
    const result = source.replace('dell', this.query.name);
    const callback = this.async();
    setTimeout(()=>{
        callback(null, result);
    }, 1000);
}