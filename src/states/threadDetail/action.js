import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ApiService from '../../utils/api';
import {
  toggleDownVoteThreadActionCreator,
  toggleNeutralizeVoteThreadActionCreator,
  toggleUpVoteThreadActionCreator,
} from '../threads/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALIZE_VOTE_COMMENT: 'TOGGLE_NEUTRALIZE_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralizeVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());

    try {
      const { detailThread: threadDetail } = await ApiService.getThreadById(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await ApiService.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await ApiService.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleNeutralizeVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleNeutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await ApiService.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncAddThreadComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const { comment } = await ApiService.createComment({ threadId, content });
      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await ApiService.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await ApiService.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleNeutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await ApiService.neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  addThreadCommentActionCreator,
  asyncAddThreadComment,
  asyncNeutralizeVoteComment,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteComment,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralizeVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralizeVoteCommentActionCreator,
  toggleNeutralizeVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleUpVoteThreadDetailActionCreator,
};
