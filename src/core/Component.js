export default class Component {
  $target;
  props; // 부모에서 자식으로 상태나 메소드를 넘겨주기 위함
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  mounted() {} // render 이후 추가적인 기능을 수행하기 위함
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후 mounted 발생
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // 이벤트 버블링 추상화
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
