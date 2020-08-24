import Styled from 'styled-components/native'

export const Container = Styled.View`
     flex: 1;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
`;

export const Content = Styled.View`
    height: 112px;
    width: 328px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
`;

export const ContentHeader = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 23px;
    margin-right: 22px;
`;

export const ContentHeaderTitle = Styled.Text`
    font-size: 22px;
    font-weight: 900;
    line-height: 32px;
    color: #212121;
`;

export const ContentValues = Styled.Text`
    font-size: 16px;
    color: #212121;
    width: 279px;
    align-self: center;
    margin-top: 15px;    

`;