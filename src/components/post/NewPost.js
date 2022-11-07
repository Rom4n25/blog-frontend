import StyledNewPost from "../../styles/Post/StyledNewPost";
import { useState } from "react";
import PostData from "../../services/PostData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledInputFile from "../../styles/StyledInputFile";
import IconImg from "../../styles/IconImg";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import StyledPostFooter from "../../styles/Post/StyledPostFooter";
import IconSend from "../../styles/IconSend";

const NewPost = ({ setPosts }) => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);

  const addPost = () => {
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }
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
        <StyledPostFooter>
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
          <StyledTransparentButton onClick={addPost}>
            <IconSend />
          </StyledTransparentButton>
        </StyledPostFooter>
      </StyledNewPost>
    </>
  );
};

export default NewPost;
