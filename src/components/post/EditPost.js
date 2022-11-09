import StyledNewPost from "../../styles/Post/StyledNewPost";
import StyledPostFooter from "../../styles/Post/StyledPostFooter";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import StyledInputFile from "../../styles/StyledInputFile";
import IconImg from "../../styles/IconImg";
import IconSend from "../../styles/IconSend";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import PostData from "../../services/PostData";
import StyledImgName from "../../styles/StyledImgName";
import { useState } from "react";

const EditPost = ({
  text,
  setText,
  img,
  setImg,
  id,
  setPosts,
  setEditPost,
}) => {
  const [imgName, setImgName] = useState("uploaded image");
  const addPost = () => {
    const formData = new FormData();
    if (img) {
      formData.append("file", img);
    }
    formData.append("text", text);

    PostData()
      .editPostById(formData, id)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setEditPost(false);
          });
      });
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          id="textArea"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
              onChange={(e) => {
                setImg(e.target.files[0]);
                setImgName(e.target.files[0].name);
              }}
            ></StyledInputFile>
            <StyledImgName>{imgName}</StyledImgName>
          </StyledInputFileWrapper>

          <StyledTransparentButton onClick={addPost}>
            <IconSend />
          </StyledTransparentButton>
        </StyledPostFooter>
      </StyledNewPost>
    </>
  );
};

export default EditPost;
