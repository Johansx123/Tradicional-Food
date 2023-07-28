import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";


const menu = {
    version : {
        BLACK : Symbol()
    }
}


// eslint-disable-next-line react/prop-types
export function TableMenu({version}) {
    
    const versionValue = menu.version[version];
    
    
        switch (versionValue) {
            case menu.version.BLACK:
                return (<Menu2/>)
            default:
                return  (<Menu1/>)
        }
}
