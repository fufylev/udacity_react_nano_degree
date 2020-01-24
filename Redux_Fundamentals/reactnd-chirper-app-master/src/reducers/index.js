import {combineRuducers} from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';

export default combineRuducers({
    authedUser,
    users,
    tweets,
})