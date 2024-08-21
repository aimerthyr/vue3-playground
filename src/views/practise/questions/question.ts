export const questions = [
  `
  \`\`\`js
    /** 1.将多维数组打平 */
    function flatten(arr) {
      // 数组最后聚合成一个，可以考虑使用 reduce
      return arr.reduce((pre, cur) => {
          // 如果不是数组，则直接追加，如果是数组，则递归进行追加
          return Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur);
      }, []);
  }
  console.log(flatten([1, 2, [3, 4, [56, [999]]], [5, 6]]), '1.将多维数组打平');
  \`\`\`
  `,
  `
  \`\`\`js
  /** 2. 找出页面上所有 a 标签的 href 属性 */
console.log(
  Array.from(document.querySelectorAll('a')).map(
    (ele) => ele.href,
  ),
  '2.找出页面上所有 a 标签的 href 属性',
);
  \`\`\`
  `,
  `
  \`\`\`js
 /** 3. 如何给按钮绑定两个事件 */
const btn = ref();
onMounted(() => {
  btn.value.addEventListener('click', () => {
    console.log('click 1');
  });
  btn.value.addEventListener('click', () => {
    console.log('click 2');
  });
});
  \`\`\`
  `,
  `
  \`\`\`js
  /** 4. 原地打乱数组 */
function shuffle(arr) {
  const randomIndex = (currentIndex) => {
    const index = Math.floor(Math.random() * arr.length) + 1;
    if (index === currentIndex) {
      return randomIndex(currentIndex);
    }
    return index;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    // 每次找一个非自己下标的随机下标
    const j = randomIndex(i);
    // 通过解构赋值来进行交换
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}
console.log(shuffle([1, 4, 5, 6, 3, 77]), '4. 原地打乱数组');
  \`\`\`
  `,
  `
  \`\`\`js
  /** 5. 对象深拷贝 */
function deepClone(obj, map = new WeakMap()) {
  // 处理 null 或 undefined
  if (obj === null || obj === undefined) {
    return obj;
  }

  // 处理原始类型 (string, number, boolean, symbol, bigint)
  if (typeof obj !== 'object') {
    return obj;
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // 处理 Map 对象
  if (obj instanceof Map) {
    const result = new Map();
    obj.forEach((value, key) => {
      result.set(deepClone(key, map), deepClone(value, map));
    });
    return result;
  }

  // 处理 Set 对象
  if (obj instanceof Set) {
    const result = new Set();
    obj.forEach(value => {
      result.add(deepClone(value, map));
    });
    return result;
  }

  // 处理循环引用
  if (map.has(obj)) {
    return map.get(obj);
  }

  // 处理对象和数组
  const result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);

  Object.keys(obj).forEach(key => {
    result[key] = deepClone(obj[key], map);
  });

  return result;
}
let obj = {
  a: {
    b: 123,
  },
};
obj.self = obj;
console.log(deepClone(obj));
  \`\`\`
  `,
  `
  \`\`\`js
  /** 6. 实现一个函数防抖 */
function debounce(fn, time) {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(arg);
    }, time);
  };
}
let iptValue1 = ref('');
const inputChange = debounce(() => {
  console.log(iptValue1, 'iptValue');
}, 500);

function throttle(fn, time) {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      flag = true;
      fn.apply(args);
    }, time);
  };
}
let iptValue2 = ref('');
const inputChange2 = throttle(() => {
  console.log(iptValue2, 'iptValue2');
}, 1000);
  \`\`\`
  `,
  `
  \`\`\`js
  /** 7. 并发执行（最大支持三个请求） */
function request(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(url, 'url');
      resolve(url);
    }, 1000);
  });
}

const url = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5',
  'https://jsonplaceholder.typicode.com/todos/6',
  'https://jsonplaceholder.typicode.com/todos/7',
  'https://jsonplaceholder.typicode.com/todos/8',
  'https://jsonplaceholder.typicode.com/todos/9',
  'https://jsonplaceholder.typicode.com/todos/10',
];

/** 并发请求处理 */
async function concurrentRequest(url, max) {
  return new Promise(resolve => {
    // 正在运行中的数量
    let running = 0;
    // 当前执行的下标
    let currentIndex = 0;
    // 保证最后返回的结果是有序
    const result = url.map(v => ({ id: v, result: null }));
    const start = () => {
      // 运行的数量小于最大限制 并且没有超出需要请求的数量
      while (running < max && currentIndex <= url.length - 1) {
        running++;
        const currentUrl = url[currentIndex++];
        request(currentUrl).then(data => {
          running--;
          result.find(v => v.id === currentUrl).result = data;
          // 正在运行中的为0 代表全部执行完毕
          if (running === 0) {
            resolve(result);
          }
          start();
        });
      }
    };
    start();
  });
}
(async () => {
  const result = await concurrentRequest(url, 3);
  console.log(result, '7. 并发执行（最大支持三个请求）');
})();
  \`\`\`
  `,
  `
  \`\`\`js
  function formate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = \`\${date.getMonth() + 1}\`.padStart(2, '0');
    const day = \`\${date.getDate()}\`.padStart(2, '0');
    const hour = \`\${date.getHours()}\`.padStart(2, '0');
    const min = \`\${date.getMinutes()}\`.padStart(2, '0');
    const second = \`\${date.getSeconds()}\`.padStart(2, '0');
    return \`\${year}-\${month}-\${day} \${hour}:\${min}:\${second}\`;
  }

console.log(formate(), '8. 获取当前日期 (yyyy-MM-dd hh:mm:ss)');
  \`\`\`
  `,
  `
  \`\`\`js
/** 9. 实现一个once函数,传入函数只执行一次 */
function once(fn) {
  let done = false;
  return (...arg) => {
    if (done) return;
    done = true;
    fn(...arg);
  };
}
const fn = once((a, b) => {
  console.log('once', a, b);
});

fn(1, 2);
fn(3);
fn(4);
  \`\`\`
  `,
];
