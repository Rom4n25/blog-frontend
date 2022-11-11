import StyledNewPost from "../../styles/Post/StyledNewPost";
import PostData from "../../services/PostData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledInputFile from "../../styles/StyledInputFile";
import IconImg from "../../styles/IconImg";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import StyledPostFooter from "../../styles/Post/StyledPostFooter";
import IconSend from "../../styles/IconSend";
import StyledImgName from "../../styles/StyledImgName";
import { useState } from "react";

const NewPost = ({ setPosts }) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [imgName, setImgName] = useState("");

  const addPost = () => {
    const formData = new FormData();
    if (img) {
      formData.append("file", img);
    }
    formData.append("text", text);

    PostData()
      .addPost(formData)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            setText("");
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

export default NewPost;
