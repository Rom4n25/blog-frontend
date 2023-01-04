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

  async function addComment(formData) {
    let response = await fetch("/comments/add", {
      method: "post",
      body: formData,
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    return await response.json();
  }

  async function editCommentById(formData, id) {
    let response = await fetch("/comments/edit/" + id, {
      method: "post",
      body: formData,
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function deleteCommentById(id) {
    let response = await fetch("/comments/delete/" + id, {
      method: "delete",
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function addPoint(id) {
    let response = await fetch("comments/" + id + "/point/add", {
      method: "post",
    });
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
