const PostData = () => {
  const loginPageURL =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port;

  async function getAllPosts(page) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/all/" + page,
      {
        method: "get",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function getAllPostsByUserId(id, page) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/user/" + id + "/" + page,
      {
        method: "get",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function addPost(formData) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/add",
      {
        method: "post",
        body: formData,
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    return await response.json();
  }

  async function editPostById(formData, id) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/edit/" + id,
      {
        method: "post",
        body: formData,
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function deletePostById(id) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/delete/" + id,
      {
        method: "delete",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  async function addPoint(id) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/" + id + "/point/add",
      {
        method: "post",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }

    return response;
  }

  async function findTop10() {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/top",
      {
        method: "get",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    return response.json();
  }

  async function getAllPostsByTag(name, page) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/posts/tag/" + name + "/" + page,
      {
        method: "get",
      }
    );
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  return {
    getAllPosts,
    getAllPostsByUserId,
    addPost,
    editPostById,
    deletePostById,
    addPoint,
    findTop10,
    getAllPostsByTag,
  };
};

export default PostData;
