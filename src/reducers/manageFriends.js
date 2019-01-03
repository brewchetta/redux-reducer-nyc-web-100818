export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND' :
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND' :
      const removedFriend = state.friends.find(friend => friend.id === action.id)
      const newFriends = [...state.friends]
      newFriends.splice(state.friends.indexOf(removedFriend), 1)
      return { friends: newFriends }
    default:
      return state
  }

}
