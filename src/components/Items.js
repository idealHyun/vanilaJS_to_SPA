import Component from '../core/Component.js';

export default class Items extends Component {
  setup() {
    this.state = {
      items: ['1', '2', '3']
    }
  }
  template() {
    const { items } = this.state;
    return `
                    <ul>
                    ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <button id='append'>추가</button>
                `
  }

  setEvent() {
    this.$target.querySelector('#append').addEventListener('click', () => {
      const { items } = this.state;
      this.setState({ items: [...items, `${items.length + 1}`] });
    });
  }
}