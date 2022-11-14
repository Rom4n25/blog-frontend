import { useState } from "react";
import CommentData from "../../services/CommentData";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/Messages/StyledTextArea";
import StyledNewMessage from "../../styles/Messages/StyledNewMessage";
import StyledInputFileWrapper from "../../styles/Messages/StyledInputFileWrapper";
import IconImg from "../../styles/Messages/IconImg";
import StyledInputFile from "../../styles/Messages/StyledInputFile";
import StyledFooter from "../../styles/Messages/StyledFooter";
import IconSend from "../../styles/Messages/IconSend";

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
      <StyledNewMessage>
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
      </StyledNewMessage>
    </>
  );
};

export default NewComment;
