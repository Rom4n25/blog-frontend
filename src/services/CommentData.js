const CommentData = () => {
  const loginPageURL =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port;

  async function getComments(postId) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/comments/post/" + postId,
      {
        method: "get",
        credentials: "include",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function addComment(formData) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/comments/add",
      {
        method: "post",
        credentials: "include",
        body: formData,
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    return await response.json();
  }

  async function editCommentById(formData, id) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/comments/edit/" + id,
      {
        method: "post",
        credentials: "include",
        body: formData,
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function deleteCommentById(id) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/comments/delete/" + id,
      {
        method: "delete",
        credentials: "include",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function addPoint(id) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/comments/" + id + "/point/add",
      {
        method: "post",
        credentials: "include",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }

    return response;
  }

  return {
    getComments,
    addComment,
    editCommentById,
    deleteCommentById,
    addPoint,
  };
};

export default CommentData;
