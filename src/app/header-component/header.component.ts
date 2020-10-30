import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
    selector: 'recipeShop-header',
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],

})

export class RecipeShopHeader {
 

    @Output() featureSelected = new EventEmitter<string>();
    // @Output() openShopping = new EventEmitter<string>();


    onSelect(feature: string){
        this.featureSelected.emit(feature)
    }

    // onOpenShopping(){
    //     this.openShopping.emit('shopping')
    // }

}