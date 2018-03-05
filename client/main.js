import React from 'react'
import ReactDOM from 'react-dom'

import AccountsUIWrapper from './AccountsUIWrapper'

Meteor.startup(function () {
  ReactDOM.render(<AccountsUIWrapper />, document.getElementById('container'))
})
