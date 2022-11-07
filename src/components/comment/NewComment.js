import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledButton from "../../styles/StyledButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledNewComment from "../../styles/Comment/StyledNewComment";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import IconImg from "../../styles/IconImg";
import StyledInputFile from "../../styles/StyledInputFile";

const NewComment = ({ postId, setComments, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");

  const addComment = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("postId", postId);
    formData.append("text", comment);

    CommentData()
      .addComment(formData)
      .then(() => {
        CommentData()
          .getComments(postId)
          .then((comments) => {
            setComments(comments);
            setComment("");
            setNewComment(false);
          });
      });
  };

  return (
    <>
      <StyledNewComment>
        <StyledTextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
        <StyledButton primary onClick={addComment}>
          Add Comment
        </StyledButton>
      </StyledNewComment>
    </>
  );
};

export default NewComment;
