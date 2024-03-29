const PostData = () => {
  const loginPageURL =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port;

  async function getAllPosts(page) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/all/" + page,
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

  async function getAllPostsByUserId(id, page) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/user/" + id + "/" + page,
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

  async function addPost(formData) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/add",
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

  async function editPostById(formData, id) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/edit/" + id,
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

  async function deletePostById(id) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/delete/" + id,
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
      process.env.REACT_APP_API_ENDPOINT + "/posts/" + id + "/point/add",
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

  async function findTop10() {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/posts/top",
      {
        method: "get",
        credentials: "include",
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
      process.env.REACT_APP_API_ENDPOINT + "/posts/tag/" + name + "/" + page,
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
