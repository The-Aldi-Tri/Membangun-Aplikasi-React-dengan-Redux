import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ApiService from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateThreadAndUsers() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const { threads } = await ApiService.getAllThreads();
      const { users } = await ApiService.getAllUsers();

      const ownerIds = new Set(threads.map((thread) => thread.ownerId));
      const usersWithThreads = users.filter((user) => ownerIds.has(user.id));

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(usersWithThreads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncPopulateThreadAndUsers };
