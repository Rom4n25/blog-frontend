const PostData = () => {
  async function getAllPosts(page) {
    let response = await fetch("/posts/all/" + page, {
      method: "get",
    });

    response = await response.json();
    return response;
  }

  async function addPost(post) {
    await fetch("/posts/add", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: post }),
    }).catch();
  }

  return { getAllPosts, addPost };
};

export default PostData;
