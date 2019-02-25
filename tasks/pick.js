const { isEqual } = require('lodash')

module.exports = ({ oneOf, otherwiseUse }, { success }) => {
  const selection = oneOf.find(({ is, equal }) => isEqual(is, equal))
  if (selection) {
    return success({ data: selection.use })
  }
  return success({ data: otherwiseUse || {} })
}
