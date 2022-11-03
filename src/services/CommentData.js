const CommentData = () => {
  const loginPageURL =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port;

  async function getComments(postId) {
    let response = await fetch("/comments/post/" + postId, {
      method: "get",
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function addComment(postId, post) {
    let response = await fetch("/comments/add/" + postId, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: post }),
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  return { getComments, addComment };
};

export default CommentData;
