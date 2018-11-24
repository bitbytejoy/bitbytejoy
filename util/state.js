// State Library

let state = null
let actions = null 
const callbacks = []

const listen = callback => callbacks.push(callback) - 1

const ignore = i => callbacks.splice(i, 1)

const action = e => {
  const action = actions[e.type]
  state = action ? action(state, e.payload) : state
  for (let i = 0; i < callbacks.length; i++) callbacks[i](state)
}

const actor = (
  Component,
  stateMapping = s => ({ state: s }),
  actionMapping = a => ({ action: a })
) => (
  class extends React.Component {
    constructor() {
      super(...arguments)
      this.listenId = null
    }

    componentDidMount() {
      this.listenId = listen(() => this.forceUpdate())
      // If the child triggers an action during componentDidMount
      // we need to make sure it gets the updates back
      // Because the parent triggers componentDidMount after the child
      this.forceUpdate()
    }

    componentWillUnmount() {
      ignore(this.listenId)
    }

    render() {
      const props = stateMapping(state)
      return <Component {...stateMapping(state)} {...actionMapping(action)}/>
    }
  }
)

export default (s, a) => {
  state = state ? state : s
  actions = actions ? actions : a
  return actor
}

// Usage example:

/*
setState({
  count: 0
})
setActions({
  count: state => _.merge({}, state, { count: state.count + 1 })
})

const Counter = ({ count, action }) => {
  console.log('rendering counter')
  return <h1 onClick={() => action({ type: 'count' })}>{`count: ${count}`}</h1>
}

const CounterActor = actor(Counter, state => ({ state.count }))

const App = () => <div><CounterActor/></div>

ReactDOM.render(<App/>, document.getElementById('app'));
*/
