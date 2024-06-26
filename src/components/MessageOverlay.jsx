import PropTypes from 'prop-types';
import { useEffect } from "react";
import iconCheck from "../../public/images/check.svg";
import { MessageTypes, setMessage } from "../redux/states/message.state";
import { useDispatch } from "react-redux";




export function MessageOverlay({ message, type = MessageTypes.success }) {
    const dispatcher = useDispatch()
    
    console.log("message", message, type)
    const classNameColor = type === MessageTypes.success ? 'green' : 'red';
    useEffect(()=>{
      setTimeout(()=>{
        dispatcher(setMessage(''))
        },2000)
    },[message])

  return (
    <div className={`MessageOverlay ${classNameColor} `}>
      <img src={iconCheck} alt="" />
      <h4 className={`message ${classNameColor}`}>
        {message}
      </h4>
    </div>
  );
}

MessageOverlay.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(MessageTypes)).isRequired,
};