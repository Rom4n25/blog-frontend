import StyledNewMessage from "../../styles/Messages/StyledNewMessage";
import StyledFooter from "../../styles/Messages/StyledFooter";
import StyledTextArea from "../../styles/Messages/StyledTextArea";
import StyledInputFileWrapper from "../../styles/Messages/StyledInputFileWrapper";
import StyledInputFile from "../../styles/Messages/StyledInputFile";
import IconImg from "../../styles/Messages/IconImg";
import IconSend from "../../styles/Messages/IconSend";
import StyledTransparentButton from "../../styles/StyledTransparentButton";
import StyledImgName from "../../styles/Messages/StyledImgName";
import IconRemove from "../../styles/Messages/IconRemove";
import { useEffect, useState } from "react";

const EditMessage = ({ text, setText, image, setImage, submit }) => {
  const [imageName, setImageName] = useState("");
  const [removeIcon, setRemoveIcon] = useState(image);

  useEffect(() => {
    if (image) {
      setImageName("uploaded image");
    }
  }, [image]);

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
            <StyledImgName>{imageName}</StyledImgName>
            <StyledTransparentButton
              onClick={() => {
                setImage(new File([], ""));
                setImageName("");
                setRemoveIcon(false);
              }}
            >
              {removeIcon ? <IconRemove /> : <></>}
            </StyledTransparentButton>
          </StyledInputFileWrapper>
          <StyledTransparentButton onClick={() => submit()}>
            <IconSend />
          </StyledTransparentButton>
        </StyledFooter>
      </StyledNewMessage>
    </>
  );
};

export default EditMessage;
