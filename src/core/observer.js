let currentObserver = null;

export const observe = (fn) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set(value) {
        console.log('asd');
        // 변경된 상태가 이전 상태와 같을 경우 방어 로직
        if (_value === value) return; // 원시타입 감시
        if (JSON.stringify(_value) === JSON.stringify(value)) return; // 배열, 객체 감시 -> Set, Map, WeekSet, WeekMap은 JSON.Stringify로 변환되지 않으니 추가적인 검사 로직 필요
        _value = value;
        observers.forEach((fn) => fn());
      },
    });
  });

  return obj;
};
