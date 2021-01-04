import styled from "styled-components";
import * as palette from "../../variables";

export const Container = styled.section`
  z-index: 2;
  position: absolute;
  display: flex;
  position: absolute;
  font-family: ${palette.font_primary};
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
`;

export const Box = styled.article`
  width: 70%;
  min-width: 150px;
  max-width: 1000px;
  height: fit-content;
  min-height: 400px;
  background-color: ${palette.background_color};
  border-radius: 15px;
  box-shadow: 0px 0px 30px ${palette.background_shadow_color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3%;
  margin: 10%;
`;

export const Button = styled.div`
  width: "100%";
  height: "100px";
  background-color: ${palette.button_color_one};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color};
  color: ${palette.text_color_primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7%;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 40px ${palette.background_shadow_color};
  }
`;

export const CookiesWarning = styled.div`
  width: "100%";
  height: "auto";
  background-color: ${palette.button_color_two};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color};
  color: ${palette.text_color_primary};
  padding: 7%;
  border-radius: 15px;
  font-size: 1.2rem;
`;

export const RightSide = styled.article`
  width: 35%;
  min-width: 150px;
  height: 80%;
  margin: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 45%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
