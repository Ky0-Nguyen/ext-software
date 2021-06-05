const reactNative = require('react-native')
const { Text } = reactNative

export default (customProps: { style: any }) => {
  const TextRender = Text.render
  const initialDefaultProps = Text.defaultProps
  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  }
  Text.render = function render(props: { style: any }) {
    const oldProps = props
    props = { ...props, style: [customProps.style, props.style] }
    try {
      return TextRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}