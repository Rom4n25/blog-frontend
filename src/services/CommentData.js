const CommentData = () => {
  async function getComments(postId) {
    let response = await fetch("/comments/post/" + postId, {
      method: "get",
    });
    response = await response.json();
    return response;
  }

  return { getComments };
};

export default CommentData;
