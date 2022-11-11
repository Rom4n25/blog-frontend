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
import IconRemove from "../../styles/IconRemove";
import { useEffect, useState } from "react";

const EditPost = ({ text, postId, setPosts, editPost, image }) => {
  const [imageName, setImageName] = useState("");
  const [removeIcon, setRemoveIcon] = useState(image);
  const [newText, setNewText] = useState(text);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    if (image) {
      setImageName("uploaded image");
    }
  }, [image]);

  const addPost = () => {
    const formData = new FormData();

    if (newImage) {
      formData.append("file", newImage);
    }
    formData.append("text", newText);

    PostData()
      .editPostById(formData, postId)
      .then(() => {
        PostData()
          .getAllPosts(0)
          .then((posts) => {
            setPosts(posts);
            editPost(false);
          });
      });
  };

  return (
    <>
      <StyledNewPost>
        <StyledTextArea
          id="textArea"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
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
                setNewImage(e.target.files[0]);
                setImageName(e.target.files[0].name);
              }}
            ></StyledInputFile>
            <StyledImgName>{imageName}</StyledImgName>
            <StyledTransparentButton
              onClick={() => {
                setNewImage(new File([], ""));
                setImageName("");
                setRemoveIcon(false);
              }}
            >
              {removeIcon ? <IconRemove /> : <></>}
            </StyledTransparentButton>
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
