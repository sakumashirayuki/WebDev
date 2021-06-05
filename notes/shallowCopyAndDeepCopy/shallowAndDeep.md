## 浅拷贝与深拷贝
这里的深拷贝位递归的dfs
```javascript
// shallow copy
const shallowCopy = function(obj){
    // whether an obj?
    if(typeof obj != 'object') return;
    // whether array?
    const newObj = obj instanceof Array ? [] : {};
    // copy obj's own property
    for(var property in obj){
      if(obj.hasOwnProperty(property))
        newObj[property] = obj[property];
    }
    return newObj;
  };
  // deepcopy
  const deepCopy = function(obj){
    if(typeof obj != 'object') return;
    const newObj = obj instanceof Array ? [] : {};
    for(var property in obj){
      if(obj.hasOwnProperty(property)){
        let newValue = obj[property];
        newObj[property] = typeof newValue === 'object' ? deepCopy(newValue) : newValue;
      }
    }
    return newObj;
  };
```
## bfs和dfs迭代版的深拷贝
```javascript
function getEmpty(o){ // if it is 
    if(Object.prototype.toString.call(o)==='[object Object]')
        return {};
    if(Object.prototype.toString.call(o)==='[object Array]')
        return [];
    return o;
}

function bfs(origin){
    const queue = [];
    const map = new Map(); // mapping from origin to target
    let target = getEmpty(origin);
    if(target !== origin){ // object or array
        queue.push([target, origin]);
        map.set(origin, target)
    }
    while(queue.length){
        let [tar, ori] = queue.shift();
        for(let key in ori){
            if(map.has(ori[key])){ // has ring
                tar[key] = map.get(ori[key]);
                continue;
            }
            tar[key] = getEmpty(ori[key]);
            if(tar[key] !== ori[key]){ // object or array
                queue.push([tar[key], ori[key]]);
                map.set(ori[key], tar[key]);
            }
        }
    }
    return target;
}

function dfs(origin){
    const stack = [];
    const map = new Map();
    let target = getEmpty(origin);
    if(target !== origin){
        stack.push([target, origin]);
        map.set(origin, target);
    }
    while(stack.length){
        const [tar, ori] = stack.pop();
        for(let key in ori){
            if(map.has(ori[key])){// has ring
                tar[key] = map.get(ori[key]);
                continue;
            }
            tar[key] = getEmpty(ori[key]);
            if(tar[key] !== ori[key]){
                stack.push([tar[key], ori[key]]);
                map.set(ori[key], tar[key]);
            }
        }
    }
    return target;
}
// testing
[bfs, dfs].forEach(deepCopy=>{
	console.log(deepCopy({a:1}));
	console.log(deepCopy([1,2,{a:[3,4]}]))
	console.log(deepCopy(function(){return 1;}))
	console.log(deepCopy({
		x:function(){
			return "x";
		},
		val:3,
		arr: [
			1,
			{test:1}
		]
	}))

	let circle = {};
	circle.child = circle;
	console.log(deepCopy(circle));
})
```