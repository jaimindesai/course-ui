import {useRouterHistory} from 'react-router'
import {createHistory} from 'history'

export const browserHistory = useRouterHistory(createHistory)({
  basename: '/app'
});