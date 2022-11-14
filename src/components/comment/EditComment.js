import { useState, useEffect } from "react";
import CommentData from "../../services/CommentData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledNewComment from "../../styles/Messages/Comment/StyledNewComment";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import IconImg from "../../styles/IconImg";
import StyledInputFile from "../../styles/StyledInputFile";
import StyledFooter from "../../styles/Messages/StyledFooter";
import IconSend from "../../styles/IconSend";
import StyledImgName from "../../styles/StyledImgName";
import IconRemove from "../../styles/IconRemove";

const EditComment = ({
  commentId,
  text,
  setComments,
  setEditComment,
  postId,
  image,
}) => {
  const [newText, setNewText] = useState(text);
  const [newImage, setNewImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [removeIcon, setRemoveIcon] = useState(image);

  useEffect(() => {
    if (image) {
      setImageName("uploaded image");
    }
  }, [image]);

  const addComment = () => {
    const formData = new FormData();

    if (newImage) {
      formData.append("file", newImage);
    }
    formData.append("text", newText);
    formData.append("commentId", commentId);

    CommentData()
      .editCommentById(formData, commentId)
      .then(() => {
        CommentData()
          .getComments(postId)
          .then((comments) => {
            setComments(comments);
            setEditComment(false);
          });
      });
  };

  return (
    <>
      <StyledNewComment>
        <StyledTextArea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledFooter>
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
          <StyledTransparentButton onClick={addComment}>
            <IconSend />
          </StyledTransparentButton>
        </StyledFooter>
      </StyledNewComment>
    </>
  );
};

export default EditComment;
