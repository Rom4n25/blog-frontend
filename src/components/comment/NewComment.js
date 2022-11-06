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
    CommentData()
      .addComment(postId, comment)
      .then((response) => {
        handleUpload(postId, response.id).then(() => {
          CommentData()
            .getComments(postId)
            .then((comments) => {
              setComments(comments);
              setComment("");
              setNewComment(false);
            });
        });
      });
  };

  const handleUpload = async (postId, commentId) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("postId", postId);
    formData.append("commentId", commentId);
    await CommentData().uploadImage(formData);
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
