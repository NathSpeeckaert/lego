import { IStatus } from "./IStatus";
import { ITheme } from "./ITheme";

export interface ISet {
    id: number,
    set_num: string,
    name: string,
    year: number,
    theme_id:number,
    set_img_url: string,
    set_url: string,
    lego_price: number,
    buy_price:number,
    buy_date: Date,
    buy_loc: string,
    sale_date: Date,
    sale_price: number,
    status:number,
    theme:ITheme,  

}