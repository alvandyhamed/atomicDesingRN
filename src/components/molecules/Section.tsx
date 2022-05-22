import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native';
import {Title,Subtitle} from './../atoms/Typography';

type Props = {
    Titre?:string;
    children?:React.ReactNode;
}
const Section =(props:Props)=>{
    const isDarkMode = useColorScheme() === 'dark';
    const {Titre,children} = props;
    return(
       <Container>
           <Titles isDarkMode >{Titre}</Titles>
          {children}
          
           </Container>

    )

}


export default React.memo(Section);


const Container = styled.View(() => ({
    marginTop: 32,
    paddingHorizontal: 24,
  }));
const Titles=styled(Title)((isDarkMode)=>({
        color: !isDarkMode ? Colors.white : Colors.black,
}));

