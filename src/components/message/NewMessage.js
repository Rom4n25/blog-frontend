import StyledNewMessage from "../../styles/Messages/StyledNewMessage";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledTextArea from "../../styles/Messages/StyledTextArea";
import StyledInputFile from "../../styles/Messages/StyledInputFile";
import IconImg from "../../styles/Messages/IconImg";
import StyledInputFileWrapper from "../../styles/Messages/StyledInputFileWrapper";
import StyledFooter from "../../styles/Messages/StyledFooter";
import IconSend from "../../styles/Messages/IconSend";
import StyledImgName from "../../styles/Messages/StyledImgName";
import { useState } from "react";

const NewMessage = ({ text, setText, setImage, submit }) => {
  const [imgName, setImageName] = useState("");

  return (
    <>
      <StyledNewMessage>
        <StyledTextArea
          id="textArea"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
                setImage(e.target.files[0]);
                setImageName(e.target.files[0].name);
              }}
            ></StyledInputFile>
            <StyledImgName>{imgName}</StyledImgName>
          </StyledInputFileWrapper>
          <StyledTransparentButton
            onClick={() => {
              submit();
              setImageName("");
            }}
          >
            <IconSend />
          </StyledTransparentButton>
        </StyledFooter>
      </StyledNewMessage>
    </>
  );
};

export default NewMessage;
