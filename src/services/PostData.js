const PostData = () => {
  const loginPageURL =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port;

  async function getAllPosts(page) {
    let response = await fetch("/posts/all/" + page, {
      method: "get",
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function getAllPostsByUserId(id, page) {
    let response = await fetch("/posts/user/" + id + "/" + page, {
      method: "get",
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    response = await response.json();
    return response;
  }

  async function addPost(formData) {
    let response = await fetch("/posts/add", {
      method: "post",
      body: formData,
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
    return await response.json();
  }

  async function editPostById(formData, id) {
    let response = await fetch("/posts/edit/" + id, {
      method: "post",
      body: formData,
    });
    if (response.status === 401) {
      sessionStorage.removeItem("auth");
      window.location.href = loginPageURL;
    }
  }

  return { getAllPosts, getAllPostsByUserId, addPost, editPostById };
};

export default PostData;
