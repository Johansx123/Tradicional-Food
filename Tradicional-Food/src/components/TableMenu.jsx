import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";
import responseProducts from '../mocks/products-menu1.json'
import { Products } from "./Products";
const menu = {
    version : {
        BLACK : Symbol()
    }
}


// eslint-disable-next-line react/prop-types
export function TableMenu({version}) {
    
    const versionValue = menu.version[version];
    const products = responseProducts?.Products
    const productsFiltered = {
        Tradicional : products.filter(product => product.category == 'Tradicional'),
        SuperTradicional : products.filter(product => product.category == 'SuperTradicional')
    }
    
        switch (versionValue) {
            case menu.version.BLACK:
                return (
                <Menu2 >
                    <Products products={productsFiltered.SuperTradicional}/>
                </Menu2>
                )
            default:
                return  (
                <Menu1 >
                 <Products products={productsFiltered.Tradicional}/>
                </Menu1>)
        }
}
