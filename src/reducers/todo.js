import _ from 'lodash';

let initialState = {
  sections: []
};

export default (state = initialState, action) => {
  const newState = _.merge({}, state);
  switch (action.type) {
    default:
      return state;
  }
};