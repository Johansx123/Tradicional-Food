import { useFilter } from "../../hooks/useFilter";
import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";

import { Products } from "./Products";
const menu = {
    version: {
        BLACK: Symbol()
    }
}


// eslint-disable-next-line react/prop-types
export function TableMenu({ version , products}) {

    const versionValue = menu.version[version];
    const filterBySuper  = useFilter(products,'category','SuperTradicional')
    const filterByTradicional  = useFilter(products,'category','Tradicional')

    const productsFiltered = {
        Tradicional: filterByTradicional,
        SuperTradicional: filterBySuper
    }

    switch (versionValue) {
        case menu.version.BLACK:
            return (
                <Menu2 >
                 <Products products={productsFiltered.SuperTradicional} />
                </Menu2>
            )
        default:
            return (
                <Menu1 >
                    <Products products={productsFiltered.Tradicional} />
                </Menu1>)
    }
}
