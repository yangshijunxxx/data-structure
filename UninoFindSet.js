function UninoFindSet (size){
    this.parent = new Array(size);
    this.rank = new Array(size);
    for (let i = 0;i < size;i++){
        this.parent[i] = i;
        this.rank[i] = 1;
    }
    UninoFindSet.prototype.find = function (x) {
        if (x < 0 || x >= this.parent.length) throw new Error("非法参数");
        while (x !== this.parent){
            x = this.parent;
        }
        return x;
    }
    UninoFindSet.prototype.union =function (a,b) {
        const aRoot = this.find(a);
        const bRoot = this.find(b);
        if (aRoot === bRoot){
            return;
        }
        if (this.rank[aRoot] < this.rank[bRoot]){
            this.parent[aRoot] = bRoot;
        }else if (this.rank[aRoot] > this.rank[bRoot]){
            this.parent[bRoot] = aRoot;
        }else{
            this.parent[bRoot] = aRoot;
            this.rank[bRoot] +=1;
        }
    }
}