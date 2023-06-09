import styled from "styled-components"
import { Button } from "antd"

export interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: any
  type: "primary" | "success" | "warning" | "danger" | "info"
  children: React.ReactNode
  loading?: boolean
}

const Wrapper = styled.div`
  .button {
    transition: all 0.2s ease;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .button:active {
    transform: translateY(1px);
    box-shadow: none;
  }
`
const DefaultButton = styled(Button)`
  background-color: #fafbfc;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #24292e !important;
  }
`
const PrimaryButton = styled(Button)`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #fff !important;
  }
`
const SuccessButton = styled(Button)`
  background-color: #2ea44f;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #fff !important;
  }
`
const WarningButton = styled(Button)`
  background-color: #fa6400;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #fff !important;
  }
`
const DangerButton = styled(Button)`
  background-color: #e63946;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #fff !important;
  }
`
const InfoButton = styled(Button)`
  background-color: #0095ff;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
    color: #fff !important;
  }
`

const getButton = (
  type: string,
  action: any,
  chidren: React.ReactNode,
  loading: boolean
) => {
  switch (type) {
    case "primary":
      return (
        <PrimaryButton
          onClick={action}
          loading={loading}
          className={"button button-primary"}
        >
          {chidren}
        </PrimaryButton>
      )
    case "success":
      return (
        <SuccessButton
          onClick={action}
          loading={loading}
          className={"button button-success"}
        >
          {chidren}
        </SuccessButton>
      )
    case "warning":
      return (
        <WarningButton
          onClick={action}
          loading={loading}
          className={"button button-warning"}
        >
          {chidren}
        </WarningButton>
      )
    case "danger":
      return (
        <DangerButton
          onClick={action}
          loading={loading}
          className={"button button-danger"}
        >
          {chidren}
        </DangerButton>
      )
    case "info":
      return (
        <InfoButton
          onClick={action}
          loading={loading}
          className={"button button-info"}
        >
          {chidren}
        </InfoButton>
      )
    default:
      return (
        <DefaultButton
          onClick={action}
          loading={loading}
          className={"button button-default"}
        >
          {chidren}
        </DefaultButton>
      )
  }
}
export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  loading,
}) => {
  const button = getButton(type, onClick, children, loading)

  return <Wrapper>{button}</Wrapper>
}
