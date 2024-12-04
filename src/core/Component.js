export default class Component {
  $target
  state

  constructor($target) {
    this.$target = $target
    this.setup()
    this.setEvent();
    this.render()
  }

  // 초기 상태 세팅
  setup() { }

  // state를 통해 태그 레이아웃 만들기
  template() { return ''; }

  // 태그에 이벤트 달기
  setEvent() { }

  // 레이아웃 만들고 이벤트 달기
  render() {
    this.$target.innerHTML = this.template();
  }

  // 상태 업데이트
  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  // 이벤트 추가 함수 추상화
  addEvent (eventType, selector, callback) {
    // const children = [ ...this.$target.querySelectorAll(selector) ];
    this.$target.addEventListener(eventType, event => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    })
  }
}