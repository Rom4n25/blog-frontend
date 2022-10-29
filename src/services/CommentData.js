const CommentData = () => {
  async function getComments(postId) {
    let response = await fetch("/comments/post/" + postId, {
      method: "get",
    });
    response = await response.json();
    return response;
  }

  async function addComment(postId, post) {
    await fetch("/comments/add/" + postId, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: post }),
    });
  }

  return { getComments, addComment };
};

export default CommentData;
