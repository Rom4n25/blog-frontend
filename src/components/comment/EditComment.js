import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledNewComment from "../../styles/Comment/StyledNewComment";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import IconImg from "../../styles/IconImg";
import StyledInputFile from "../../styles/StyledInputFile";
import StyledCommentFooter from "../../styles/Comment/StyledCommentFooter";
import IconSend from "../../styles/IconSend";
import StyledImgName from "../../styles/StyledImgName";

const EditComment = ({
  commentId,
  setComments,
  setEditComment,
  setText,
  text,
  setImg,
  img,
  postId,
}) => {
  const [imgName, setImgName] = useState("uploaded image");

  const addComment = () => {
    const formData = new FormData();
    if (img) {
      formData.append("file", img);
    }
    formData.append("text", text);
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
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={60}
          placeholder="Say something..."
        ></StyledTextArea>
        <StyledCommentFooter>
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
          <StyledTransparentButton onClick={addComment}>
            <IconSend />
          </StyledTransparentButton>
        </StyledCommentFooter>
      </StyledNewComment>
    </>
  );
};

export default EditComment;
