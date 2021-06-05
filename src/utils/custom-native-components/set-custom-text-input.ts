const reactNative = require('react-native')
const { TextInput } = reactNative

export default (customProps: { style: any }) => {
  const TextInputRender = TextInput.render
  const initialDefaultProps = TextInput.defaultProps
  TextInput.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  TextInput.render = function render(props: { style: any }) {
    const oldProps = props
    props = { ...props, ...customProps, style: [customProps.style, props.style] }
    try {
      return TextInputRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}