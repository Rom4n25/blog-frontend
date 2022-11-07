import StyledNewPost from "../../styles/Post/StyledNewPost";
import { useState } from "react";
import PostData from "../../services/PostData";
import StyledButton from "../../styles/StyledButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledInputFile from "../../styles/StyledInputFile";
import IconImg from "../../styles/IconImg";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";

const NewPost = ({ setPosts }) => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");

  const addPost = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("text", post);

    PostData()
      .addPost(formData)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setPost("");
          });
      });
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledInputFileWrapper>
          <IconImg />
          <StyledInputFile
            id="custom_file_input"
            encType="multipart/form-data"
            name="file"
            title="upload image"
            type={"file"}
            onChange={(e) => setImage(e.target.files[0])}
          ></StyledInputFile>
        </StyledInputFileWrapper>
        <StyledButton primary onClick={addPost}>
          Add Post
        </StyledButton>
      </StyledNewPost>
    </>
  );
};

export default NewPost;
