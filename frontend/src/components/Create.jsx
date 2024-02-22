import React from 'react';
import { CreateFormButton, CreateFormContainer, CreateFormInput, CreateFormSubmitButton } from './style';


const Create = () => {

  return (
    <div>
      <CreateFormContainer>
        <CreateFormInput type="text" id="songName" name="songName" placeholder="Song Name" />
        <CreateFormInput  type="file" name="src" placeholder="Song File"/>
          <CreateFormButton>Upload Song File</CreateFormButton>
        <CreateFormInput  type="text" name="author" placeholder="Author"/>
        <CreateFormInput  type="file" name="thumbnail" placeholder="Image File" />
          <CreateFormButton>Upload Image File</CreateFormButton>
        <CreateFormInput type="text" name="releaseDate" placeholder="Release Date"/>
        <CreateFormSubmitButton>Add Track </CreateFormSubmitButton>
         
      </CreateFormContainer>
    </div>
  );
};

export default Create;