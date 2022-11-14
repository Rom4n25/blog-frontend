import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/StyledTextArea";
import StyledNewComment from "../../styles/Messages/Comment/StyledNewComment";
import StyledInputFileWrapper from "../../styles/StyledInputFileWrapper";
import IconImg from "../../styles/IconImg";
import StyledInputFile from "../../styles/StyledInputFile";
import StyledFooter from "../../styles/Messages/StyledFooter";
import IconSend from "../../styles/IconSend";

const NewComment = ({ postId, setComments, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  const addComment = () => {
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }
    formData.append("text", comment);
    formData.append("postId", postId);

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
        <StyledFooter>
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
          <StyledTransparentButton onClick={addComment}>
            <IconSend />
          </StyledTransparentButton>
        </StyledFooter>
      </StyledNewComment>
    </>
  );
};

export default NewComment;
