// import { hello, get as gets } from './A';

// console.log(hello);
// gets();
//

// import * as MyA from './A'; //把整个文件引入并重命名
// MyA.get();

//使用default 相当于双方都是default 那就不用再去查询名称 因此每个文件最多只有一个这种export
import demo from './A.js';
demo();
