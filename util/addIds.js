import _ from 'lodash'

export default list => _.map(list, (item, i) => _.assign({}, item, { id: i }))
