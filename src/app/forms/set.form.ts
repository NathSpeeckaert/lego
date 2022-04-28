import { Validators } from "@angular/forms";

export const SetForm : any = {
    name : [null,[]],
    set_num : [null,[]],
    year:[null,[]],
    theme_id : [null,[]],
    set_img_url:[null,[]],
    set_url:[null,[]],
    lego_price:[0,[Validators.min(0)]],     
    buy_price:[0,[Validators.required, Validators.min(0)]],
    buy_date: [null,[Validators.required]],
    buy_loc: [null,[Validators.required,Validators.minLength(2)]],
    sale_date: [null,[]],
    sale_price: [0,[Validators.min(0)]],
    status:[2,[]],
}