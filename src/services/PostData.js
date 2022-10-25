const postData = () => {
  async function getAllPosts() {
    let response = await fetch("/posts/all", {
      method: "get",
    }).catch();
    response = await response.json();
    return response;
  }

  return { getAllPosts };
};

export default postData;
