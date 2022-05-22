import type {TextStyle} from 'react-native';
import styled from '@emotion/native';

type Props = {
    align?: TextStyle['textAlign'];
    flex?: TextStyle['flex'];
    transform?: TextStyle['textTransform'];
    lineHeight?: TextStyle['lineHeight'];
}

export const Base = styled.Text<Props>(props => ({
    flex: props.flex,
    textAlign: props.align,
    textTransform: props.transform,
    lineHeight: props.lineHeight,
  }));
  
  export const Headline = styled(Base)(props => ({
    fontSize: 26,
    lineHeight: props.lineHeight ?? 39,
  }));
  
  export const Title = styled(Base)(props => ({
    fontSize: 24,
    fontWeight: '600',
  }));
  
  export const Subtitle = styled(Base)(props => ({
    fontSize: 18,
    fontWeight: '400',
  }));
  
  export const Label = styled(Base)(props => ({
    fontSize: 12,
    lineHeight: props.lineHeight ?? 18,
    textTransform: props.transform ?? 'uppercase',
  }));
  
  export const TextBold = styled(Base)(props => ({
    fontSize: 16,
    lineHeight: props.lineHeight ?? 24,
  }));
  
  export const TextMedium = styled(Base)(props => ({
    fontSize: 16,
    lineHeight: props.lineHeight ?? 24,
  }));
  
  export const TextRegular = styled(Base)(props => ({
    fontSize: 14,
    lineHeight: props.lineHeight ?? 22,
  }));
  
  export const TextSmall = styled(Base)(props => ({
    
    fontSize: 12,
    lineHeight: props.lineHeight ?? 18,
  }));
