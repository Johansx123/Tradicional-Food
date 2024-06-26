import { useDispatch } from "react-redux";
import { MessageTypes, setMessage } from "../redux/states/message.state";

function MessageManager({ message, type}) {
    const dispatch = useDispatch();
    switch (type) {
        case MessageTypes.success:
            dispatch(setMessage({ message, type: MessageTypes.success }));
            break;

        case MessageTypes.error:
            dispatch(setMessage({ message, type: MessageTypes.error }));
            break;
        default:
            break;
    }
    

    
}


export const MessageUtilities = {
    success(message) {
        MessageManager({ message, type: MessageTypes.success });
    },

    error(message) {
        MessageManager({ message, type: MessageTypes.error });
    }

}