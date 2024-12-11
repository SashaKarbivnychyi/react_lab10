class Helpers {
    constructor() {
      this.cache = {
        param: "",
        count: 0,
      };
    }
  
    clearCache() {
      this.cache = {
        param: "",
        count: 0,
      };
    }
  
    getId(param = "key") {
      console.log(this.cache);
  
      if (this.cache.param === param) {
        this.cache.count += 1;
  
        console.log("Param");
        console.table(this.cache);
  
      } else {
        this.clearCache();
        this.cache.param = param;
        this.cache.count = 0;
      }
      return `${param}_${this.cache.count}`;
    }
  }
  
  export default Helpers;